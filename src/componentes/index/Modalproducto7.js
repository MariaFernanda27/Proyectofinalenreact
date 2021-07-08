import './Modales.css';
import producto7 from '../../assets/img/producto7.jpg';
import checked from '../../assets/img/unchecked.png';

function Modal7() {
  return (
    <div className="modal modal fade" tabindex={-1} id="redcake"> 
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">    
<div className="modal-content">

  <div className="modal-header">
  <button type="button" id="close" data-bs-dismiss="modal" aria-label="Close"><img src={checked} width="20px"/></button>
      </div>

      <div className="modal-body">
       <div className="redvelvetcake"><img src={producto7} /></div>
        <div id="submodal">
          <h5 className="modal-title">RED VELVET CAKE</h5>
          <p>¿Que te parece este delicia?, biscocho de varios pisos sabor a chocolate coloreado en rojo, con relleno de queso crema y trozos de freza. Decorado a tu gusto.<br/></p>
          <p id="precio">$*****</p>
      <button className="carrito"><i className="bi bi-basket2"></i>Añadir al carrito</button>
          </div>
      </div>
  
    </div>
       
      </div>
   
    </div>
  
  );
} 

export default Modal7;