import React, { useState } from "react";

const Form = ({newLocalizacion}) =>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ciudad, setCiudad] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(ciudad);

        if(ciudad === "" || !ciudad) return; 

        newLocalizacion(ciudad);
    }

    return(

        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mx-auto mb-3">
                    
                    <span>
                      <input className="skinny" id="ciudad" type="text" placeholder="Introduzca la ciudad..." onChange= {(e) => setCiudad (e.target.value)}/>
                      <label for="ciudad">Cuidad</label>
                    </span>
                    

                </div>
                <button className="btn btn-primary input-group.text" type="submit">Buscar</button>
                
            </form>
        </div>
    );
}

export default Form; 