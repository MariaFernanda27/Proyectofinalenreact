import './footer.css';
import llamada from '../../assets/img/llamada-telefonica.png';
import red from '../../assets/img/red.png';
import instagram from '../../assets/img/instagram.png';
import facebook from '../../assets/img/facebook.png';
function Footer() {
  return (
<section className="footer-info">

  <div className="footer">
    <div className="card-body s1">

      <div id="icono"><img src={llamada} width="30px" /></div>
        <h5 class="card-title">Llamanos</h5>
        <ul id="num">
          <li>319 609 9527</li>
          
        </ul>
        
       </div>
    </div>



  <div className="footer">
    <div className="card-body s1">

      <div id="icono"><img src={red} width="30px" /></div>
        <h5 className="card-title">Encuentranos</h5>
        <ul id="num">
          <img src={instagram} id="instagram" />
          <img src={facebook} id="facebook" />
        </ul>
        
       </div>
    </div>

<footer>
     &COPY; sitio desarrollado grupo 5 - todos los derechos reservados
      
    </footer>
  </section>

  );
} 

export default Footer;