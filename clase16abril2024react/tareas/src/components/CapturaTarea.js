//Una forma para capturar una nueva tarea
// Autor: Diego Sánchez Valle

import { useRef } from "react";
import "../styles/capturaTarea.css";
import {v4 as uuidv4} from "uuid";

const CapturaTarea = (props) => {
    const refDescripcion = useRef();

    //funcion para agregar un nueva tarea
    const agregarNuevaTarea = (evento) => {
        evento.preventDefault();
        const nuevaTarea = { descripcion: refDescripcion.current.value,
        id: uuidv4(),
        completada: false
        };
        props.onSubmit(nuevaTarea);
        console.log("Agrega nueva tarea: ", refDescripcion.current.value);
    };
    return (
        <form className="tarea-forma" onSubmit={agregarNuevaTarea}>
            <label htmlFor="descripcion">Descripción de la tarea</label>
            <input className="tarea-input" type="text" placeholder="Escribe la descripción de la tarea" name="descripcion" id="descripcion"
            ref={refDescripcion}
            />
            <button className="tarea-boton" type="submit">Agregar tarea</button>
        </form>
    );
};

export default CapturaTarea;