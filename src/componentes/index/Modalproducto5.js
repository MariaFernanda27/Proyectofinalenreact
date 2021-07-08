import './Modales.css';
import producto5 from '../../assets/img/producto5.jpg';
import checked from '../../assets/img/unchecked.png';

function Modal5() {
  return (
    <div className="modal modal fade" tabindex={-1} id="gelatina"> 
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">    
<div className="modal-content">

  <div className="modal-header">
  <button type="button" id="close" data-bs-dismiss="modal" aria-label="Close"><img src={checked} width="20px"/></button>
      </div>

      <div className="modal-body">
      <div className="gelatina"><img src={producto5}/></div>
        <div id="submodal">
          <h5 className="modal-title">POSTRE MIL Y UNA GELATINA</h5>
          <p>Cremoso postre con variedad de sabores de galatina, decorados con frutas o dulces.<br/></p>
          <p id="precio">$*****</p>
      <button className="carrito"><i className="bi bi-basket2"></i>Añadir al carrito</button>
          </div>
      </div>
  
    </div>
       
      </div>
   
    </div>
  
  );
} 

export default Modal5;