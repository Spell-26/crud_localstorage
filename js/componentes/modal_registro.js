const modal = `<div id="modal_registro" class="contenedor_formulario" >
<form class="formulario" id="formularioRegistro">
    <header>
        <div>
            <h1>Registro de empleados</h1>
        </div>
        <div id="cerrar" onclick="ocultar_modal()">
            <span class="material-symbols-rounded">
                close
                </span>
        </div>
    </header>
    <hr>
    <label for="">Correo electronico</label>
    <input type="email" id="emailRegistro">
    <label for="">Contraseña</label>
    <input type="password" id="contrasenaRegistro">
    <label for="">Nombre empleado</label>
    <input type="text" id="nombreRegistro">
    <label for="">Edad</label>
    <input type="number" id="edadRegistro">
    <label for="">Profesión</label>
    <input type="text" id="profesionRegistro">
    <label for="">Dirección</label>
    <input type="text" id="direccionRegistro">
    <label for="">Departamento de residencia</label>
    <input type="text" id="departamentoRegistro">

    <div class="botones_formulario">
        <button  class="boton violeta boton_interno_formulario" id="registrar" onclick="tomarDatos(event)">Registrarse</button>
        <button class="boton escarlata boton_interno_formulario" id="limpiar">Limpiar</button>
    </div>
    
</form>
</div>`;

document.body.innerHTML += modal;


let fuera_modal = document.getElementById("modal_registro");


let abrir_modal = document.getElementById("registro")
let id_modal = document.getElementById("modal_registro");

function mostrar_modal(){
    
    id_modal.style.zIndex = 1;
    id_modal.style.display = "block";


  // Agregar un listener al documento para cerrar el modal al presionar la tecla ESC
  document.addEventListener('keydown', closeModalEsc);

  // Agregar un listener al documento para cerrar el modal al hacer clic fuera del formulario
  document.addEventListener('click', closeModalOutside);


}
function ocultar_modal(){

    id_modal.style.zIndex = -1;
    id_modal.style.display = "none";

  // Remover el listener para cerrar el modal al presionar la tecla ESC
  document.removeEventListener('keydown', closeModalEsc);

    // Remover el listener para cerrar el modal al hacer clic fuera del formulario
  document.removeEventListener('click', closeModalOutside);
}

// Función para cerrar el modal al presionar la tecla ESC
function closeModalEsc(event) {
  if (event.keyCode == 27) {
    ocultar_modal();
  }
}

// Función para cerrar el modal al hacer clic fuera del formulario
function closeModalOutside(event) {
    if (event.target == fuera_modal) {
      ocultar_modal();
    }
  }