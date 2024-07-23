import React from "react";
import Spinner from "./Spinner";

const Card = ({ mostrarData, cargandoData, clima, pronostico }) => {
  var hoy = new Date();
  var dia = hoy.getDate();
  var mes = hoy.getMonth();
  var año = hoy.getFullYear();
  var fecha = dia + "/" + mes + "/" + año;

  var url = "";
  var iconoUrl = "";

  var iconoUrl3 = "";
  var iconoUrl6 = "";
  var iconoUrl9 = "";

  var pronosticoFecha3 = "";
  var pronosticoFecha6 = "";
  var pronosticoFecha9 = "";

  if (cargandoData) {
    return <Spinner />;
  }

  if (mostrarData) {
    url = "http://openweathermap.org/img/w/";

    iconoUrl = url + clima.weather[0].icon + ".png";

    iconoUrl3 = url + pronostico.list[1].weather[0].icon + ".png";
    iconoUrl6 = url + pronostico.list[2].weather[0].icon + ".png";
    iconoUrl9 = url + pronostico.list[3].weather[0].icon + ".png";

    pronosticoFecha3 =
      pronostico.list[1].dt_txt.substring(8, 10) +
      "/" +
      pronostico.list[1].dt_txt.substring(5, 7) +
      "/" +
      pronostico.list[1].dt_txt.substring(0, 4) +
      " " +
      pronostico.list[1].dt_txt.substring(11, 13);
    pronosticoFecha6 =
      pronostico.list[2].dt_txt.substring(8, 10) +
      "/" +
      pronostico.list[2].dt_txt.substring(5, 7) +
      "/" +
      pronostico.list[2].dt_txt.substring(0, 4) +
      " " +
      pronostico.list[2].dt_txt.substring(11, 13);
    pronosticoFecha9 =
      pronostico.list[3].dt_txt.substring(8, 10) +
      "/" +
      pronostico.list[3].dt_txt.substring(5, 7) +
      "/" +
      pronostico.list[3].dt_txt.substring(0, 4) +
      " " +
      pronostico.list[3].dt_txt.substring(11, 13);
  }

  return (
    <div className="mt-5">
      {mostrarData === true ? (
        <div className="container">
          <div className="card mx-auto bg-dark text-light">
            <div className="row g-0">
              <div className="col-md-4">
                <h3 className=" card-text-img card-title">{clima.name}</h3>
                <p className=" card-text-img card-date">{fecha}</p>
                <h1 className=" card-text-img card-temp">
                  {(clima.main.temp - 273.15).toFixed(1)}ºC
                </h1>
                <h4 className=" card-text-temp card-desc">
                  <img src={iconoUrl} alt="icon" />
                  {clima.weather[0].description}
                </h4>
                <img
                  src="https://www.zollotech.com/wp-content/uploads/2021/03/blue-gradient-wallpaper-by-ongliong11.png"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-start mt-2">
                  <h5 className="card-text">
                    Temperatura máxima:{" "}
                    {(clima.main.temp_max - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className="card-text">
                    Temperatura mínima:{" "}
                    {(clima.main.temp_min - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className="card-text">
                    sensación térmica:{" "}
                    {(clima.main.feels_like - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className="card-text">Humedad: {clima.main.humidity}%</h5>
                  <h5 className="card-text">
                    Velocidad del viento: {clima.wind.speed}m/s
                  </h5>
                </div>
                <hr />

                <div className="row mt-4">
                  <div className="col">
                    <p>{pronosticoFecha3}h</p>
                    <p className="description">
                      <img src={iconoUrl3} alt="icon" />
                      {pronostico.list[1].weather[0].description}
                    </p>
                    <p className="temp">
                      {(pronostico.list[1].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                  <div className="col">
                    <p>{pronosticoFecha6}h</p>
                    <p className="description">
                      <img src={iconoUrl6} alt="icon" />
                      {pronostico.list[2].weather[0].description}
                    </p>
                    <p className="temp">
                      {(pronostico.list[2].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                  <div className="col">
                    <p>{pronosticoFecha9}h</p>
                    <p className="description">
                      <img src={iconoUrl9} alt="icon" />
                      {pronostico.list[3].weather[0].description}
                    </p>
                    <p className="temp">
                      {(pronostico.list[3].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-dark">Sin datos</h2>
      )}
    </div>
  );
};

export default Card;
