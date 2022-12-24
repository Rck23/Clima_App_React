import React, { useState } from "react";
import Form from './Form';

const ClimaPanel = () =>{

    let urlClima = "https://api.openweathermap.org/data/2.5/weather?appid=3922bcdf20628b4ff50d410c3c6e7e3c&lang=es";
    let ciudadUrl = "&q=";

    let urlPronostico = "https://api.openweathermap.org/data/2.5/forecast?appid=3922bcdf20628b4ff50d410c3c6e7e3c&lang=es";
   
    const [clima, setClima] = useState([]);
    const [pronostico, setPronostico] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [mostrar, setMostrar] = useState(false);
    const [localizacion, setLocalizacion] = useState("");
   
    const getLocalizacion = async(loc)=>{
        setLocalizacion(loc);
        setCargando(true);

        // CLIMA    

        urlClima = urlClima + ciudadUrl + loc; 

        await fetch(urlClima).then((response)=>{
            if(!response.ok) throw {response}
            return response.json();

        }).then((weatherData)=>{
            console.log(weatherData);
            setClima(weatherData);
        }).catch(error =>{
            console.log(error);
            setCargando(false);
            setMostrar(false);
        });

        // PRONOSTICO

        urlPronostico = urlPronostico + ciudadUrl + loc; 

        await fetch(urlPronostico).then((response)=>{
            if(!response.ok) throw {response}
            return response.json();

        }).then((forecastData)=>{
            console.log(forecastData);
            setPronostico(forecastData);

            setCargando(false);
            setMostrar(true);

        }).catch(error =>{
            console.log(error);
            setCargando(false);
            setMostrar(false);
        });

    }
    return(

        <React.Fragment>
            <Form 
                newLocalizacion = {getLocalizacion}
            />
        </React.Fragment>

    ); 
}

export default ClimaPanel; 