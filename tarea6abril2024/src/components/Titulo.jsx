//Define la funcion que regresa un componente con un titulo
//Autor: Diego Sánchez Valle
import "./titulo.css";

const Titulo = (props) => {
    return(
        <h1>{props.texto}</h1>
    );
};

export default Titulo;