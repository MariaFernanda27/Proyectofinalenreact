import './index.css';
import carrusel2 from '../../assets/img/carrusel2.jpg';
import carrusel5 from '../../assets/img/carrusel5.jpg';
import carrusel4 from '../../assets/img/carrusel4.jpg';
import carrusel7 from '../../assets/img/carrusel7.jpg';
import carrusel8 from '../../assets/img/carrusel8.jpg';
import favorito1 from '../../assets/img/favorito1.jpg';
import producto2 from '../../assets/img/producto2.jpg';
import producto3 from '../../assets/img/producto3.jpg';
import producto4 from '../../assets/img/producto4.png';
import producto5 from '../../assets/img/producto5.jpg';
import producto11 from '../../assets/img/producto11.jpg';
import producto7 from '../../assets/img/producto7.jpg';
import producto8 from '../../assets/img/producto8.jpg';
import producto9 from '../../assets/img/producto9.jpg';
import Modal1 from './Modalproducto1';
import Modal2 from './Modalproducto2';
import Modal3 from './Modalproducto3';
import Modal4 from './Modalproducto4';
import Modal5 from './Modalproducto5';
import Modal6 from './Modalproducto6';
import Modal7 from './Modalproducto7';
import Modal8 from './Modalproducto8';
import Modal9 from './Modalproducto9';
function Indexcont() {
  return (
    <body>
     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carrusel2} height="650px" className="d-block w-100" alt="..." />   
      <div className="carousel-caption d-none d-md-block">
                <h5 id="titulo-carrusel">Dulce regalo y bueno para comer.</h5>
                <div className="background trans"></div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carrusel5} height="650px" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 id="titulo-carrusel">Ven a experimentar el sabor de la alegría.</h5>
                <div className="background2 trans2"></div> 
      </div>
    </div>
    <div className="carousel-item">
      <img src={carrusel4} height="650px" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 id="titulo-carrusel">Tan dulce y bueno. Seguro que traerá sonrisas.</h5>
                <div className="background2 trans2"></div> 
      </div>
    </div>
    <div className="carousel-item">
      <img src={carrusel7} height="650px" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 id="titulo-carrusel">Sabor incuestionable… Calidad incomparable…</h5>
                <div className="background2 trans2"></div> 
      </div>
    </div>
    <div className="carousel-item">
      <img src={carrusel8} height="650px" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 id="titulo-carrusel">Donde los sabores y la gente se encuentran.</h5>
                <div className="background2 trans2"></div> 
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


<div className="cajitapr">
 <div className="cajitainfo">
  <h1 id="titulo-principal">¡PARA TI!</h1>
    <h5 id="subtitulo">Ofrecer productos de reposteria e primera calidad, enfocandonos en satisfacer las necesidades y superar las epectativas de cada cliente mediante la implementacion de las mejores tecnicas, tecnologia de punta y personal altamente calificado con el fin de crear experiencias y momentos unicos para nuestros clientes y de esta manera ser recordados en el mercado.</h5>
    </div>
  </div>

<div className="row">
<section className="section1">
<div className="tarjeta1" data-bs-target="#rosescupcake" data-bs-toggle="modal">
  <div className="card">
  <img src={favorito1} className="img-fluid" alt="..." />
  <div className="card-body">
    <h5 className="card-title" >Roses Cupcake</h5>
     <div className="botones-exc">
      <p id="textos">Expresa lo que tienes en mente, con detalles dulces y creativos.</p>
</div>
  </div>
</div>
</div>


<div className="tarjeta2" data-bs-target="#cuplove" data-bs-toggle="modal">
  <div className="card">
  <img src={producto2} width="80px" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Cup Love</h5>
     <div className="botones-exc" >
       <p id="textos">Los CupCakes son nuestros mejores mensajeros de amor.</p>
</div>
  </div>
</div>
</div>

<div className="tarjeta3" data-bs-target="#cuphappy" data-bs-toggle="modal">
  <div className="card">
  <img src={producto3} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Cup Happy</h5>
    <div className="botones-exc2" >
      <p id="textos">Te ayudamos a sorprender a tu persona favorita, personalizalo a tu gusto.</p>
</div>
  </div>
</div>
</div>
</section>



<section className="seccion2">
   <div className="tarjeta4" data-bs-target="#postrecanela" data-bs-toggle="modal">
  <div className="card">
  <img src={producto4}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Mini Dulce</h5>
     <div className="botones-exc" >
       <p id="textos">Un mini postre por cada dia de antojo, ¿Que te parece?</p>
</div>
  </div>
</div>
</div>

<div className="tarjeta5" data-bs-target="#gelatina" data-bs-toggle="modal">
  <div className="card">
   <img src={producto5}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Postre mil y una gelatina</h5>
     <div className="botones-exc2" >
       <p id="textos">Postres para que hagas tu, o su, dia especial. Ideales para cualquier momento.</p>
</div>
  </div>
</div>
</div>

<div className="tarjeta6" data-bs-target="#pizza" data-bs-toggle="modal">
  <div className="card">
   <img src={producto11}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Pizza De Brownie</h5>
     <div className="botones-exc" >
       <p id="textos">¿Que tal esta pizza? El encanto de todos. Sosprende con esta delicia.</p>
</div>
  </div>
</div>
</div>

</section>

<section className="seccion3">
   <div className="tarjeta7" data-bs-target="#redcake" data-bs-toggle="modal">
  <div className="card">
  <img src={producto7}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Red Velvet Cake</h5>
     <div className="botones-exc2" >
       <p id="textos">En toda fiesta no puede faltar la torta, dinos como la quieres y asi mismo la tendras.</p>
</div>
  </div>
</div>
</div>

<div className="tarjeta8" data-bs-target="#chocolate" data-bs-toggle="modal">
  <div className="card">
  <img src={producto8}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Happy-Cake</h5>
     <div className="botones-exc" >
       <p id="textos">Para que disfrutes con tu familia y amigos, no te quedes con el antojo.</p>
</div>
  </div>
</div>
</div>

<div className="tarjeta9" data-bs-target="#zanahoria" data-bs-toggle="modal">
  <div className="card">
  <img src={producto9}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Carrot Cake</h5>
    <div class="botones-exc" >
       <p id="textos">Recuerda que tu haces parte de esta magia de recrear detalles dulces.</p>

</div>
  </div>
</div>
</div>

</section>
</div>
<Modal1 />
<Modal2 />
<Modal3 />
<Modal4 />
<Modal5 />
<Modal6 />
<Modal7 />
<Modal8 />
<Modal9 />
</body>
  );
} 

export default Indexcont;