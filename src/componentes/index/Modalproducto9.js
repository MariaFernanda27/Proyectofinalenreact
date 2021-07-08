import './Modales.css';
import producto9 from '../../assets/img/producto9.jpg';
import checked from '../../assets/img/unchecked.png';

function Modal9() {
  return (
    <div className="modal modal fade" tabindex={-1} id="zanahoria"> 
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">    
<div className="modal-content">

  <div className="modal-header">
  <button type="button" id="close" data-bs-dismiss="modal" aria-label="Close"><img src={checked} width="20px"/></button>
      </div>

      <div className="modal-body">
      <div className="carrot"><img src={producto9} /></div>
        <div id="submodal">
          <h5 className="modal-title">CARROT CAKE</h5>
          <p>Torta esponjosa y suave con zanahorias frescas y nueces. Decorado con trozos de nueces dulces<br/></p>
          <p id="precio">$*****</p>
      <button className="carrito"><i className="bi bi-basket2"></i>Añadir al carrito</button>
          </div>
      </div>
  
    </div>
       
      </div>
   
    </div>
  
  );
} 

export default Modal9;