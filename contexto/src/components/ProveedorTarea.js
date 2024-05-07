//Proveedor de arrtareas y sus operaciones,usa un contexto para pasar el estado y las funciones a los componentes hijos
import { createContext } from "react";
import { useState } from "react";

export const ContextoTareas = createContext();

const ProveedorTarea= ({children}) => {    
    
    //Datos
    const [arrTareas, setArrTareas] = useState([]);

    //Función para agregar una tarea
    const agregarNuevaTarea = (tareaNueva) => {
        //arrTareas.push(tarea); nO SE PUEDE MODIFICAR A MANO
        setArrTareas([tareaNueva, ...arrTareas]);//coleccion de tareas o elementos y me permite completar el nuevo arreglo
    };
    

    const completarTarea = (id) => {
        const arrTareasNuevo = arrTareas.map((tarea) => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setArrTareas(arrTareasNuevo);
    }

    //Funcion para borrar una tarea
    const eliminarTarea = (id) => {
        const arrTareasNuevo = arrTareas.filter((tarea) => tarea.id !== id);
        setArrTareas(arrTareasNuevo);
    }

    return (
        <ContextoTareas.Provider value={[arrTareas, setArrTareas, agregarNuevaTarea, completarTarea, eliminarTarea]}>
            {children}
        </ContextoTareas.Provider>
    );

};
export default ProveedorTarea;