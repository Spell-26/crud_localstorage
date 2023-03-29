window.addEventListener('scroll', function(){
    let barra = document.querySelector('.cabecera');
    if( window.scrollY > 10){
        barra.classList.toggle('scrolled', window.scrollY > 10);
    }
    else if(window.scrollY < 10){
        barra.classList.remove('scrolled', window.scrollY < 10);
    }
})


const header = `<header id="cabecera" class="cabecera">
<div id="acciones" class="informacion_superior">
    <a class="boton blanco" id="registro" onclick="mostrar_modal()"><span>Registrarse</span> </a>
    <a class="boton blanco" id="inicio" onclick="inicio()"><span>Inicio</span></a>

    <a class="boton blanco" id="listar_empleados" onclick="mostrar_empleados()"><span>Mostrar empleados</span></a>

</div>

<div id="empleado" class="informacion_superior">
<span id="online" class="material-symbols-outlined">
    face
    </span>
<a id="username" class="boton blanco"><span>NombreUsuario</span> </a>
<a id="log_out" class="boton escarlata" onclick="cerrarSesion()"><span>Cerrar sesión</span> </a>

</div>

</header>`

document.body.innerHTML += header;
