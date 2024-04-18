//App completa, incluye la captura de tareas y la colecciones de renglones
//Autor: Diego Sánchez Valle


import { useState } from "react";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";

const ListaTareas = ({ props }) => {
  //Estado para almacenar las tareas
  const [arrTareas, setArrTareas] = useState([
    
  ]);

  //Función que compelta una tarea
  const completaTarea = (id) => {
    arrTareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
  };

  const eliminarTarea = (id) => {
    const arrTareasNuevo = arrTareas.filter((tarea) => tarea.id !== id);
    setArrTareas(arrTareasNuevo);
  }

  const agregarNuevaTarea = (tareaNueva) => {
    //arrTareas.push({ descripcion: tarea }); //No se debe hacer
    setArrTareas([tareaNueva,...arrTareas]);
  };

  return (
    <div className="tareas-contenedor">
      <CapturaTarea onSubmit={agregarNuevaTarea}/>
      {/*Genera los renglones para las tareas*/}
      {arrTareas.length !== 0 ? (
        arrTareas.map((tarea) => {
          return( <Tarea descripcion={tarea.descripcion}
            tarea={tarea}
            completaTarea={completaTarea}
            eliminarTarea={eliminarTarea}
            key={tarea.id}   
          />);
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