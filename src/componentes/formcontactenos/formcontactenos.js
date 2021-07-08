import './formcontactenos.css';



function Form(){
return(
	
  <div className="fondoform">
  <form id="frmvalidacion2" novalidate>
  
  <h1 id="titulocontacto">CONTACTO</h1>
         
        <div id="camponom">
          <label>Nombre<sup>*</sup></label><br/>
          <input type="text" name="name" id="nombre"/>
          <div className="feedback"></div>
        </div>

        <div id="campoape">
          <label>Apellido</label><br/>
          <input type="text" name="lastname" id="apellido"/>
          <div className="feedback"></div>
        </div>

        <div id="campoemail">
          <label>Correo Electronico</label><br/>
          <input type="text" name="email" id="correo"/>
          <div className="feedback"></div>
        </div> 

        <div id="camponum">
          <label>Número<sup>*</sup></label><br/>
          <input type="text" name="number" id="numero"/>
          <div className="feedback"></div>
        </div>

        <div id="campotext">
          <label for="mensaje"></label>
          <textarea rows="3" cols="35" placeholder="Mensaje*" name="mensaje" id="mensaje"></textarea>
          <div className="feedback"></div>
        </div>
    <button type="submit" className="boton-contacto" onclick="ingreso2()">Enviar</button>

     
      
   
    
    </form>
    <div className="mapa">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0568804676177!2d-74.10587668573689!3d4.583811343937568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f98de8b2cdf01%3A0xcb94d4852598b934!2sKuepa%20-%20Restrepo!5e0!3m2!1ses!2sco!4v1618325973893!5m2!1ses!2sco" width="300" height="300" allowfullscreen="" loading="lazy"></iframe>
        <div className="inf">
        <h2>¿Cómo encontrarnos?</h2><br/>
        <ul>
        <li><i className="bi bi-geo-alt-fill"><strong> Dirección:</strong> Cra 173 # 45-41 Bogotá D.C, Cundinamarca</i></li><br/>
        <li><i className="bi bi-telephone-fill"><strong> Telefono:</strong> 319 609 9527</i></li><br/>
        <li><i className="bi bi-envelope-fill"><strong> Email:</strong> pasteleriasweetenyourday1@gmail.com</i></li><br/>
        </ul>
      </div>
</div> 
  </div>

  

  
	);

}

export default Form; 