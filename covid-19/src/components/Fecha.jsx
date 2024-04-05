//Regresa la fecha con año, mes y día en distintos renglones. Recuadro
//Autor: Diego Sánchez Valle

import "./fecha.css"

const Fecha = (props) => {
    const a = props.fecha.getFullYear();
    const m = props.fecha.toLocaleString('es-MX',{month: 'long'});
    const d = props.fecha.toLocaleString('es-MX',{day: '2-digit'});
    return (
        <div className="fecha">
            <div className="fecha_anio">{a}</div>
            <div className="fecha_mes">{m}</div>
            <div className="fecha_dia">{d}</div>
        </div>
    );
};

export default Fecha;