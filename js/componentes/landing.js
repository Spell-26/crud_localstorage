const landing = `<section class="primer_elemento" id="landing">
<div id="landing_izquierdo"> 
<header id="cabecera_landing">
<h1>Gestión empleados.</h1>
</header>
<div id="contenedor_landing">
<h2>Un sistema intuitivo</h2>
<p>Registrate si aún no lo has hecho, si ya tienes una cuenta inicia sesión</p>
<h3>Carácteristicas de gestión empleados:</h3>
<ul id="lista_landing">
    <li>Facil ingreso de los empleados</li>
    <li>Visualización rápida</li>
    <li>Edición de los datos de los empleados</li>
    <li>Busqueda de empleado por documento de identidad</li>
</ul>
</div>
</div>

<div id="landin_derecho">
<form id="formulario_landing">
<header>
<div>
    <h1 id="encabezado_login">Inicio de sesión<hr></h1>
    
</div>    
</header>
<p class="alerta">Correo electronico o contraseña incorrectos</p>

<label for="">Correo electronico</label>
<input type="email" id="email_login">
<label for="">Contraseña</label>
<input type="password" id="contrasena_login">

<div class="botones_formulario">
<button class="boton violeta boton_interno_formulario" id="iniciar_sesion" onclick="iniciarSesion(event)">Log in</button>
</div> 
</form>
</div>

</section>`

document.body.innerHTML += landing;

function inicio(){
    let landing = document.getElementById("landing");
    let tabla_empleados = document.getElementById("listado_empleados")
    tabla_empleados.style.display ="none";

    landing.style.display = "block";
}