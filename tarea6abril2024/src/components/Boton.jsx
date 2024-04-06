//<Boton url="https://www.google.com/"/>


const Redirect = (urlRedirect) => {
    window.location.replace(urlRedirect);
}

const Boton = (props) => {
    const handleClick = () => {
        Redirect(props.url);
    }

    return (
        <button onClick={handleClick}>Ver en Línea</button>
    );
};

export default Boton;