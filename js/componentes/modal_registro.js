const modal = `<div id="modal_registro" class="contenedor_formulario">
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

    <label for="">Nombre empleado</label>
    <input type="text" id="nombreRegistro">
    <label for="">Edad</label>
    <input type="number" id="edadRegistro">
    <label for="">Profesión</label>
    <input type="text" id="profesionRegistro">
    <label for="">Dirección</label>
    <input type="text" id="diraccionRegistro">
    <label for="">Departamento de residencia</label>
    <input type="text" id="departamentoRegistro">

    <div class="botones_formulario">
        <button class="boton violeta boton_interno_formulario" id="registrar">Registrarse</button>
        <button class="boton escarlata boton_interno_formulario" id="limpiar">Limpiar</button>
    </div>
    
</form>
</div>`;

document.body.innerHTML += modal;





let abrir_modal = document.getElementById("registro")

function mostrar_modal(){
    let id_modal = document.getElementById("modal_registro");
    id_modal.style.zIndex = 1;
    id_modal.style.display = "block"
}
function ocultar_modal(){
    let id_modal = document.getElementById("modal_registro");
    id_modal.style.zIndex = -1;
    id_modal.style.display = "none"
}