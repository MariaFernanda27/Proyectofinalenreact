import './Modales.css';
import producto6 from '../../assets/img/producto11.jpg';
import checked from '../../assets/img/unchecked.png';

function Modal6() {
  return (
    <div className="modal modal fade" tabindex={-1} id="pizza"> 
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">    
<div className="modal-content">

  <div className="modal-header">
  <button type="button" id="close" data-bs-dismiss="modal" aria-label="Close"><img src={checked} width="20px"/></button>
      </div>

      <div className="modal-body">
       <div className="piizabrownie"><img src={producto6}/></div>
        <div id="submodal">
          <h5 className="modal-title">PIZZA DE BROWNIE</h5>
           <p>Torta de chocolate, crujiente por fuera y tierno por dentro. Decorado con variedades de golosinas<br/></p>
          <p id="precio">$*****</p>
      <button className="carrito"><i className="bi bi-basket2"></i>Añadir al carrito</button>
          </div>
      </div>
  
    </div>
       
      </div>
   
    </div>
  
  );
} 

export default Modal6;