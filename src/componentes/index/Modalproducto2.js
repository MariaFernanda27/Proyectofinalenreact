import './Modales.css';
import producto2 from '../../assets/img/producto2.jpg';
import checked from '../../assets/img/unchecked.png';

function Modal2() {
  return (
    <div className="modal modal fade" tabindex={-1} id="cuplove"> 
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">    
<div className="modal-content">

  <div className="modal-header">
  <button type="button" id="close" data-bs-dismiss="modal" aria-label="Close"><img src={checked} width="20px"/></button>
      </div>

      <div className="modal-body">
      <div className="cuplove"><img src={producto2}/></div> 
        <div id="submodal">
          <h5 className="modal-title">CUP LOVE</h5>
          <p>Su sabor representativo es el chocolate, con crema de vainilla, glaseado con vainilla y chispas de colores.<br/></p>
          <p id="precio">$*****</p>
      <button className="carrito"><i className="bi bi-basket2"></i>Añadir al carrito</button>
          </div>
      </div>
  
    </div>
       
      </div>
   
    </div>
  
  );
} 

export default Modal2;