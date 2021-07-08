import './Modales.css';
import favorito1 from '../../assets/img/favorito1.jpg';
import checked from '../../assets/img/unchecked.png';

function Modal1() {
  return (
    <div className="modal modal fade" tabindex={-1} id="rosescupcake">  
<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">    
<div className="modal-content" >
  <div className="modal-header" >
    <button type="button" id="close" data-bs-dismiss="modal" aria-label="Close"><img src={checked} width="20px"/></button>
      </div>
       <div className="modal-body" >
        <div className="embed-responsive embed-responsive-4by3">
        <div className="rosescupcake"><img src={favorito1}/></div> 
        <div id="submodal">
          <h5 className="modal-title">ROSES CUPCAKE</h5>
         <p>Su sabor representativo es el chocolate, con crema de vainilla, glaseado con vainilla y chispas de colores.<br/></p>
          <p id="precio">$*****</p>
          <button className="carrito"><i className="bi bi-basket2"></i>Añadir al carrito</button>
        </div>
          </div>
      </div>
  
    </div>
   </div>
      </div>
   
 
  
  );
} 

export default Modal1;

