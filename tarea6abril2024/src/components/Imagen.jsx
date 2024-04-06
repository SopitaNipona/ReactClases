import blueDog from '../images/blue.png';
import blueDog2 from '../images/bluedog2.jpg';
//import "./imagen.css";

const Imagen = (props) => {
    const imageSelected = props.option;
    if(imageSelected === '1'){
        return(<img src={blueDog} alt="Blue the dog" />);
    }
    if(imageSelected === '2'){
        return(<img src={blueDog2} alt="Blue the dog" />)
    }
};

export default Imagen;