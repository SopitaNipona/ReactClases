import { useRef, useState } from "react";
import "../styles/capturaTarea.css";
import { v4 as uuidv4 } from "uuid";

const CapturaTarea = (props) => {
  const refDescripcion = useRef();
  const [visible, setVisible] = useState(true);

  const handleHideButton = () => {
    setVisible(!visible);
    console.log("Botón cancelar");
  };

  const agregarNuevaTarea = (evento) => {
    evento.preventDefault();
    const nuevaTarea = {
      descripcion: refDescripcion.current.value,
      id: uuidv4(),
      completada: false,
    };
    arrTareas.push(nuevaTarea);
    props.onSubmit(nuevaTarea);
    console.log("Agrega nueva tarea: ", refDescripcion.current.value);
  };

  const cambiaDescripcion = () => {
    setDescripcion(evento.target.value);
    console.log(descripcion);
  };

  return (
    <div className="tarea-forma">
      {visible && (
        <form className="tarea-forma" onSubmit={agregarNuevaTarea}>
          <label htmlFor="descripcion">Descripción de la tarea</label>
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
        </form>
      )}
      <button className="tarea-boton" type="submit" onClick={handleHideButton}>
        Cancelar
      </button>
    </div>
  );
};

export default CapturaTarea;
