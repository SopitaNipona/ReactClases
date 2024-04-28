
import "../styles/capturaTarea.css";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";


const CapturaTarea = (props) => {

    const [descripcion, setDescripcion] = useState('');

    //función para agregar una tarea
    const agregarNuevaTarea = (evento) => {
        evento.preventDefault();
        const nuevaTarea = {
            descripcion: descripcion,
            id: uuidv4(),
            completada: false
        };
        //Ejecutamos la función que llego como onSubmit
        props.onSubmit(nuevaTarea);
    };

    const cambiaDescripcion = (evento) => { 
        setDescripcion(evento.target.value);
        console.log(descripcion); 
    };

    return (
        <form className="tarea-forma" onSubmit={agregarNuevaTarea}>
            <label htmlFor="tarea-label"> Nueva tarea: </label>
            <input
                className="tarea-input"
                type="text"
                placeholder="Escribe la descripción de la tarea"
                name="descripcion"
                id="descripcion"
                onChange={cambiaDescripcion}
            />
            <button className="tarea-boton" type="submit">
                Agregar tarea
            </button>
            <button className="tarea-boton" type="submit">
                Cambiar color
            </button>
        </form>
    );
};

export default CapturaTarea;
