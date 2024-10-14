import React from 'react';
import '../hojas-de-estilos/tareas.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tareas({id, texto, completada, completarTarea, eliminarTarea}){
    return(
      <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        <div className='tarea-texto'
            onClick={()=>completarTarea(id)}>
            {texto}
        </div>
        <div 
          onClick={()=>eliminarTarea(id)}
          className='tarea-contenedor-icono'>
          <AiOutlineCloseCircle className='tarea-icono'/>
        </div>
      </div>
     
    );
}

export default Tareas;
