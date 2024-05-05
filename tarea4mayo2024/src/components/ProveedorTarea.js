//Proveedor de arrtareas y sus operaciones,usa un contexto para pasar el estado y las funciones a los componentes hijos
import { createContext } from "react";
import { useState, useEffect } from "react";

export const ContextoTareas = createContext();

const ProveedorTarea= ({children}) => {    
    
    //Datos
    const [arrTareas, setArrTareas] = useState([]);
    const [filter, setFilter] = useState('todas');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then(res => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            const formatoInterno = data.map(tarea => ({
            
                id: tarea.id,
                descripcion: tarea.title,
                completada: tarea.completed
              
            }));
            setArrTareas(formatoInterno);
          })
          .catch(error => {
            console.log(error);
          });
    }, []);

    const tareasFiltradas = () => {
        switch (filter) {
            case 'completadas':
                return arrTareas.filter(tarea => tarea.completada);
            case 'pendientes':
                return arrTareas.filter(tarea => !tarea.completada);
            default:
                return arrTareas;
        }
    };
    
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