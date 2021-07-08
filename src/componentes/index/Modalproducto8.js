import './Modales.css';
import producto8 from '../../assets/img/producto8.jpg';
import checked from '../../assets/img/unchecked.png';

function Modal8() {
  return (
    <div className="modal modal fade" tabindex={-1} id="chocolate"> 
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">    
<div className="modal-content">

  <div className="modal-header">
  <button type="button" id="close" data-bs-dismiss="modal" aria-label="Close"><img src={checked} width="20px"/></button>
      </div>

      <div className="modal-body">
      <div className="happy"><img src={producto8} /></div>
        <div id="submodal">
          <h5 className="modal-title">HAPPY-CAKE</h5>
          <p>Torta de chocolate, relleno de vainilla y oreo, tiene un glaseado de chocolate y esta decorado con chispas de colores y dulces.<br/></p>
          <p id="precio">$*****</p>
      <button className="carrito"><i className="bi bi-basket2"></i>Añadir al carrito</button>
          </div>
      </div>
  
    </div>
       
      </div>
   
    </div>
  
  );
} 

export default Modal8;