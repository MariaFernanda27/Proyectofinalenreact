import './error404.css';
import error404 from '../../assets/img/ERROR404.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

function Errorpages(){
return(
	<div className="img404">
	
	<button  className="boton-volver">
	<i className="bi bi-arrow-left-circle"></i>
    <Link to="/home" className="letracolor">Volver a la pagina principal</Link>
	</button>
    <img src={error404} className="imagenerror" />
     </div>
	);

}

export default Errorpages; 