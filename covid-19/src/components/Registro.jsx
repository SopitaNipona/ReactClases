// Muestra un renglon de detalle con fecha descripcion y cantidad
// Autor: Diego Sánchez Valle

import Fecha from './Fecha';
import "./registro.css";

const Registro = (props) => {
  return (
    <div className="registro">
      <Fecha fecha={props.fecha} />
      <div className="registro-descripcion">
        <h2>{props.descripcion}</h2>
      </div>
      <div className='registro-contagios'>{props.cantidad}</div>
    </div>
  );
};

export default Registro