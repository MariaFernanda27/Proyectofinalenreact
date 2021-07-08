import './header.css';
import logo from './logofinal.png';
function Header(){
	return(

		<header className="row align-items-center">
		<div className="logo col-12 col-md-8 col-lg-7">
			<img src={logo} className="img-fluid" width="200px" />
		</div>
		<div className="botonoes col-12 col-md-8 col-lg-5">
			<button type="button" className="btn btn-outline-info"><i className="bi bi-basket2"></i>Tus Compras</button>
			
		</div>
	</header>
		);
}
export default Header;