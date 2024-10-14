import React, { useState } from 'react';
import '../hojas-de-estilos/tarea-formulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario(props){

    const [textoInput, setTextoInput] = useState('');

    const manejarCambio = e =>{
        setTextoInput(e.target.value); /*permite extraer el valor del campo en el formulario*/
    };

    const manejarEnvio = e => {
        e.preventDefault();/*Para que la página no se actualice nuevamente */

        const tareaNueva = { //objeto
            id:uuidv4(),
            texto:textoInput,
            completada:false
        }
       props.onSubmit(tareaNueva); 
       //al darle chic al botón enviar se envía un objeto llamado tarea nueva
    };


    return(
        <form className='tarea-formulario'
            onSubmit={manejarEnvio}>
            <input 
            className='tarea-input'
            placeholder='Escribe una tarea'
            name='texto'
            onChange={manejarCambio}/>
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
            
        </form>
    );
}

export default Formulario;
