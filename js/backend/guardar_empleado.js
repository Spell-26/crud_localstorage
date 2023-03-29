// variables globales

const formulario_registro_UI =document.querySelector('#formularioRegistro');


let array_empleado = [];

// funciones

//constante que crea un objeto empleado y lo almacena en el array
// array_empleado

const crear_empleado = (correo_UI, contrasena_UI,nombre_UI, edad_UI, profesion_UI, direccion_UI, departamento_UI) => {
    let nuevo_empleado ={
        correo : correo_UI,
        contrasena : contrasena_UI,
        nombre : nombre_UI,
        edad : edad_UI,
        profesion : profesion_UI,
        direccion : direccion_UI,
        departamento : departamento_UI
    }
    let empleados = JSON.parse( localStorage.getItem("empleados"));
    array_empleado.push(nuevo_empleado);

    if(empleados != null){
        empleados.push(nuevo_empleado);
        localStorage.setItem('empleados', JSON.stringify(empleados));

    }else{
        localStorage.setItem('empleados', JSON.stringify(array_empleado));
    }

    return nuevo_empleado;
}


// event listeners

function tomarDatos(event){
    event.preventDefault();

    let correo_UI, contrasena_UI, nombre_UI, edad_UI, profesion_UI, direccion_UI, departamento_UI;

    correo_UI =document.querySelector('#emailRegistro').value;
    contrasena_UI = document.querySelector('#contrasenaRegistro').value;
    nombre_UI = document.querySelector('#nombreRegistro').value;
    edad_UI = document.querySelector('#edadRegistro').value;
    profesion_UI = document.querySelector('#profesionRegistro').value;
    direccion_UI = document.querySelector('#direccionRegistro').value;
    departamento_UI = document.querySelector('#departamentoRegistro').value;

    crear_empleado(correo_UI, contrasena_UI, nombre_UI, edad_UI, profesion_UI, direccion_UI, departamento_UI);

    formulario_registro_UI.reset();
    

};