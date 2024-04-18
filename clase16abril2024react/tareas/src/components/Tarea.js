// Representa un renglon con información de una tarea
// Autor Diego Sánchez Valle

import { MdOutlineDeleteForever } from "react-icons/md";
import "../styles/tarea.css";

const Tarea = ({tarea, completarTarea, eliminarTarea}) => {
    const estilo ="tarea-contenedor" + (tarea.completada ? "completada" : "");
    return (
        <div className={estilo}>
            <div className="tarea-descripcion" onClick={() => completarTarea(tarea.id)}>
                {tarea.descripcion}
            </div>
            <div className="tarea-icono-borrar" onClick={() => eliminarTarea(tarea.id)}>
                <MdOutlineDeleteForever />
            </div>
        </div>
    );
};

export default Tarea;