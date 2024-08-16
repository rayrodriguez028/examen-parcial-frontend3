import React, { useState } from 'react';
import Card from './Card';

const Form = () => {

    const [persona, setPersona] = useState({
        nombre: "",
        color: "",
    });

    const [mostrar, setMostrar] = useState(false);
    const [error, setError] = useState(false);

    const handlerNombre = (event) => {
        setPersona({ ...persona, nombre: event.target.value });
    };
    const handlerColor = (event) => {
        setPersona({ ...persona, color: event.target.value });
    };
    const handlerSubmit = (event) => {
        event.preventDefault();
        if ( persona.nombre.trim().length < 3 || persona.color.trim().length < 6 ) {
            setError(true);
            setMostrar(false);
        } else {
            setMostrar(true);
            setError(false);
        }
    };

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <label>Ingresa tu nombre: </label>
                <input type="text" value={persona.nombre} onChange={handlerNombre}/>
                <br />
                <label>Color favorito: </label>
                <input type="text" value={persona.color} onChange={handlerColor}/>
                <br />
                <button type="submit">Enviar</button>
                <br />
            </form>
            { error ? <h4>Error: Por favor chequea que la información sea correcta</h4> : mostrar ? <Card persona={persona} /> : ""}
        </>
    );
};

export default Form;
