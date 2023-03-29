const modal_login = `<div id="modal_login" class="contenedor_formulario">
<form class="formulario" id="formulario_login">
    <header>
        <div>
            <h1>Inicio de sesión</h1>
        </div>    
        <div id="cerrar" onclick="ocultar_modal_login()">
            <span class="material-symbols-rounded">
            close
            </span>
        </div>
    </header>
    <hr>
    <label for="">Correo electronico</label>
    <input type="email" id="email_login">
    <label for="">Contraseña</label>
    <input type="password" id="contrasena_login">

    <div class="botones_formulario">
        <button  class="boton violeta boton_interno_formulario" id="iniciar_sesion" onclick="">iniciar sesión</button>
    </div>
</form>
</div>`;


document.body.innerHTML += modal_login;


let login = document.getElementById("modal_login");

function mostrar_modal_login(){
    login.style.zIndex = 1;
    login.style.display = "block";
}

function ocultar_modal_login(){
    login.style.zIndex = -1;
    login.style.display = "none";
    location.reload()
}