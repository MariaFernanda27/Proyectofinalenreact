import './Modales.css';
import producto4 from '../../assets/img/producto4.png';
import checked from '../../assets/img/unchecked.png';

function Modal4() {
  return (
    <div className="modal modal fade" tabindex={-1} id="postrecanela"> 
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">    
<div className="modal-content">

  <div className="modal-header">
  <button type="button" id="close" data-bs-dismiss="modal" aria-label="Close"><img src={checked} width="20px"/></button>
      </div>

      <div className="modal-body">
      <div className="minidulce"><img src={producto4}/></div>
      
        <div id="submodal">
          <h5 className="modal-title">MINI DULCE</h5>
          <p>Postre esponjoso de canela y manzana, lleva un glaseado irresistible de vainilla.<br/></p>
          <p id="precio">$*****</p>
      <button className="carrito"><i className="bi bi-basket2"></i>Añadir al carrito</button>
          </div>
      </div>
  
    </div>
       
      </div>
   
    </div>
  
  );
} 

export default Modal4;