import './compqs.css';
import fresas from '../../assets/img/fresas.png';
import chocolate from '../../assets/img/chocolate.png';
import cup from '../../assets/img/cup.png';
import './compqs.css';
function Nosotros(){
	return(
<div className="todoqs">
<section id="quienessomos">
	<h1 className="titulo">NOSOTROS</h1>
	<hr className="separador" />
<article className="quienessomos1">
<h2>SOMOS MÁS QUE UNA REPOSTERÍA</h2>
<br/>


<p>Sweeten yourday que en español se traduce "endulza tu día" sera una pagina web, donde se mostrara variedad de productos en su mayoria postres que estaran a su venta por medio de esta pagina. 
    	Crea tu espacio en casa y sigue el aprendizaje de manera segura para ti y tu familia, ya que te bridaremos videos cortos donde podras aprender a preparar postres de manera <strong>SENCILLA</strong> y rapida.<br/> Opciones de servicio: Compras en tienda · Retiro en tienda · Entrega a domicilio<br/><br/>
    	 Recuerda por Salud y seguridad:<br/><br/>

    	 <ol>
     <li>toma de temperatura al ingreso</li>
     <li>Se requiere el uso de mascarilla</li>
     <li>Se requiere una revisión de temperatura</li>
     <li>El personal usa mascarillas</li>
     <li>El personal se somete a revisiones de temperatura</li>
     <li>Desinfección de superficies obligatoria por parte del personal después de cada visita</li>
     </ol>
     <br/>
      <div>
      <img className="fresas"src={fresas}/>
      </div>
       <div>
      <img className="chocolatee"src={chocolate}/>
      </div>
       <div>
      <img className="uvas"src={cup}/>
      </div>
</p>

</article> 
</section>
<div className="valores">
<section  id="quienessomos">

<h2 className="titulo">VALORES CORPORATIVOS</h2>
<ol>
<li><strong>Honestidad:</strong> Todas las operaciones y procesos realizados son hechos con transparencia y rectitud.</li>
<li><strong>Respeto:</strong> Escuchamos y tenemos en cuenta cada una de las opiniones y diferencias de nuestros clientes y trabajadores; buscando armonía y cordialidad en las relaciones interpersonales de la compañía.</li>
 <li><strong>Cumplimiento:</strong> Entregar a tiempo cada producto a nuestros clientes, y cumplir con las obligaciones que como empresa tenemos.</li>
 <li><strong>Confianza:</strong> Cumplimos con los productos ofrecidos a cada cliente brindando calidad, servicio, transparencia y responsabilidad.</li>
  <li><strong>Responsabilidad:</strong> Somos una compañía que se encarga de cumplir con sus deberes y velar por sus derechos. De la misma manera nos encargamos de cuidar a cada cliente y trabajador.</li>
        <li><strong>Lealtad:</strong> Somos fieles a nuestras creencias y metas como empresa, buscando cumplir cada una de estas para así lograr crecer y permanecer en el mercado.</li>
        <li><strong>Perseverancia:</strong> Es lo que nos alienta y motiva para cumplir cada cosa que nos proponemos, ya que si creemos en lo que hacemos es posible superar los obstáculos que se presentan en el camino para así crecer día a día.</li>
</ol>

</section>
</div>
</div>




		);
}
export default Nosotros;