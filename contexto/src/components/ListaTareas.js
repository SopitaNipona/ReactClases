import React, { useContext} from "react";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";
import "../styles/listaTareas.css";
import { ContextoTareas } from "./ProveedorTarea";



const ListaTareas = (props) => {

    const [arrTareas, setArrTareas, agregarNuevaTarea, completarTarea, eliminarTarea] = useContext(ContextoTareas);

    return (

            <div className="lista-tareas">
                <CapturaTarea onSubmit={agregarNuevaTarea} />
                {arrTareas.length !== 0 ? (
                    arrTareas.map((tarea) => {
                        return (
                            <Tarea
                                tarea={tarea}
                                completarTarea={completarTarea}
                                eliminarTarea={eliminarTarea}
                                key={tarea.id}
                            />
                        );
                    })
                ) : (
                    <div className="tarea-contenedor">
                        <h2>No hay tareas</h2>
                    </div>
                )}
            </div>
    );
};

export default ListaTareas;
