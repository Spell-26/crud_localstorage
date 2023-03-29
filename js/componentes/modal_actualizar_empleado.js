
let atributo;
let empleado_guardado_actualizar = localStorage.getItem("empleados");
let empleados_actualizar = JSON.parse(empleado_guardado_actualizar);

const botones = document.querySelectorAll('[data_correo]');

botones.forEach(function (boton) {
  boton.addEventListener('click', function () {
    atributo = (boton.getAttribute('data_correo'));
    if(boton.innerHTML == "Editar"){
      generar_modal(atributo);
    }
    
  })
})

function actualizar_empleado() {
  let empleado_guardado = localStorage.getItem("empleados");
  let empleados = JSON.parse(empleado_guardado);

  let correo = document.getElementById('emailActualizar').value;
    
  empleados = empleados.filter((obj) => obj.correo !== correo);

  let nombre, contrasena, edad, profesion, direccion, departamento;

  nombre =  document.getElementById('nombreActualizar').value;
  contrasena = document.getElementById('contrasenaActualizar').value;
  edad = document.getElementById('edadActualizar').value;
  profesion = document.getElementById('profesionActualizar').value;
  direccion  = document.getElementById('direccionActualizar').value;
  departamento = document.getElementById('departamentoActualizar').value;

  let empleado_actualizado = {
      correo : correo,
        contrasena : contrasena,
        nombre : nombre,
        edad : edad,
        profesion : profesion,
        direccion : direccion,
        departamento : departamento
  }

  empleados.push(empleado_actualizado);
  localStorage.setItem('empleados', JSON.stringify(empleados));

  console.log("exito!")
}

function generar_modal(atributo) {

  let empleado = empleados_actualizar.find(function (emp) {
    return emp.correo === atributo
  })

  const modal_actualizar = `<div id="modal_actualizar" class="contenedor_formulario" >
<form class="formulario id="formularioActualizar">
    <header>
        <div>
            <h1>Actualizar de empleados</h1>
        </div>
        <div id="cerrar_actualizar" onclick="ocultar_modal_actualizar()">
            <span class="material-symbols-rounded">
                close
                </span>
        </div>
    </header>
    <hr>
    <label for="">Correo electronico</label>
    <input type="email" id="emailActualizar" value = "${empleado.correo}">
    <label for="">Contraseña</label>
    <input type="password" id="contrasenaActualizar" value = "${empleado.contrasena}">
    <label for="">Nombre empleado</label>
    <input type="text" id="nombreActualizar" value = "${empleado.nombre}">
    <label for="">Edad</label>
    <input type="number" id="edadActualizar" value = "${empleado.edad}">
    <label for="">Profesión</label>
    <input type="text" id="profesionActualizar" value = "${empleado.profesion}">
    <label for="">Dirección</label>
    <input type="text" id="direccionActualizar" value = "${empleado.direccion}">
    <label for="">Departamento de residencia</label>
    <input type="text" id="departamentoActualizar" value = "${empleado.departamento}">

    <div class="botones_formulario">
        <button  class="boton violeta boton_interno_formulario" id="actualizar" onclick="actualizar_empleado()">Actualizar</button>
        
    </div>
    
</form>
</div>`;

  document.body.innerHTML += modal_actualizar;


  let fuera_modal_actualizar = document.getElementById("modal_actualizar");



  let id_modal_actualizar = document.getElementById("modal_actualizar");


  function mostrar_modal_actualizar() {

    id_modal_actualizar.style.zIndex = 2;

    id_modal_actualizar.style.display = "block";

    // Agregar un listener al documento para cerrar el modal al presionar la tecla ESC
    document.addEventListener('keydown', closeModalEsc_actualizar);

    // Agregar un listener al documento para cerrar el modal al hacer clic fuera del formulario
    document.addEventListener('click', closeModalOutside_actualizar);


  }
  function ocultar_modal_actualizar() {

    id_modal_actualizar.style.zIndex = -2;
    id_modal_actualizar.style.display = "none";

    // Remover el listener para cerrar el modal al presionar la tecla ESC
    document.removeEventListener('keydown', closeModalEsc_actualizar);

    // Remover el listener para cerrar el modal al hacer clic fuera del formulario
    document.removeEventListener('click', closeModalOutside_actualizar);
  }

  // Función para cerrar el modal al presionar la tecla ESC
  function closeModalEsc_actualizar(event) {
    if (event.keyCode == 27) {
      ocultar_modal_actualizar();
      location.reload();
    }
  }

  // Función para cerrar el modal al hacer clic fuera del formulario
  function closeModalOutside_actualizar(event) {
    if (event.target == fuera_modal_actualizar) {
      ocultar_modal_actualizar();
      location.reload();
    }
  }

  mostrar_modal_actualizar();
}





