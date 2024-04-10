//Autor: Diego Sánchez Valle

import "../styles/boton.css";

const Boton = (props) => {
    return(
        <button className="boton-tenis" onClick={props.onClick}>
            {props.texto}
        </button>
    );
};

export default Boton;