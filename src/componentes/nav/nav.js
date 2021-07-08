import './nav.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
function Nav(){
	return(
		 <nav>
      <ul className="menu">
      
        <li>
        <Link to="/home" className="nav-link"><i className="bi bi-house-fill"></i>Inicio</Link>
        </li>

        <li>
        <Link to="/quienessomos" className="nav-link"><i className="bi bi-people-fill"></i>Quienes Somos</Link>
        </li>

         <li>
        <Link to="/productos" className="nav-link"><i className="bi bi-journal-bookmark-fill"></i>Productos</Link>
        </li>

         <li>
        <Link to="/contacto" className="nav-link"><i className="bi bi-envelope-fill"></i>Contactenos</Link>
        </li>
      </ul>
    </nav>

		

		);
}
export default Nav;