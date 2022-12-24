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
                    <input type="text" className="form-control" placeholder="Ciudad" onChange= {(e) => setCiudad (e.target.value)}/>
                    <button className="btn btn-primary input-group.text" type="submit">Buscar</button>
                </div>

            </form>
        </div>
    );
}

export default Form; 