import React from "react";
import "../styles/tarea.css";
import { MdOutlineDeleteForever } from "react-icons/md";

const Tarea = ({tarea, completarTarea, eliminarTarea}) => {
    //Calcular estilo de latarea, depende de completada
    const estilo = "tarea-contenedor " + (tarea.completada ? "completada" : "");
    return (
        <div className={estilo}>
            <div className="tarea-descripcion" onClick={() => {completarTarea(tarea.id)}}>
                {tarea.descripcion}
            </div>
            <div className="tarea-icono-borrar" onClick= {() => eliminarTarea(tarea.id)}>
                <MdOutlineDeleteForever />
            </div>
        </div>
    );
};

export default Tarea;
