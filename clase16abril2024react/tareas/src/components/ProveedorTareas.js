//Proveedor de arrTareas y sus operaciones, usa un contexto
//Autor: Diego Sánchez

import { createContext } from "react";

export const ContextoTareas = createContext(); //Crea un contexto

const ProveedorTareas = ({ children }) => {
    const [arrTareas, setArrTareas] = useState([]);

    const agregarTarea = (tarea) => {
        setArrTareas([tarea, ...arrTareas]);
    }

    const completarTarea = (id) => {
        const arrTareasNuevo = arrTareas.map((tarea) => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setArrTareas(arrTareasNuevo);
    }
};