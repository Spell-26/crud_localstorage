function iniciarSesion(event){
    event.preventDefault();
    let alerta = document.querySelector('.alerta');
    let correo = document.getElementById("email_login").value;
    let contrasena = document.getElementById("contrasena_login").value;

    let empleado_guardado = localStorage.getItem("empleados");
    let empleados = JSON.parse(empleado_guardado);

    let usuario_encontrado;

    for(let i = 0; i < empleados.length; i++){
        if(empleados[i].correo == correo &&  empleados[i].contrasena == contrasena){
            usuario_encontrado = true;
            break;
        }
        else {
            usuario_encontrado = false;
        }
    }    
    if(usuario_encontrado){
        let inicio = document.getElementById("inicio");
        let listar_empleados = document.getElementById("listar_empleados");
        let registro = document.getElementById("registro");

        let online_icon = document.getElementById("online");
        let username = document.getElementById("username");
        let log_out = document.getElementById("log_out");

        let form_loging = document.getElementById("landin_derecho");
        
        alerta.style.display = "none";

        /* ocultar y mostrar nueva info */

        inicio.style.display = "block";
        registro.style.display = "none";
        listar_empleados.style.display = "block";

        online_icon.style.display = "block";
        username.innerHTML = correo;
        username.style.display = "block";
        log_out.style.display = "block";

        form_loging.style.display ="none";
    }
    else{
        alerta.style.display = "block";
        
    }
}

function cerrarSesion(){
    let inicio = document.getElementById("inicio");
    let listar_empleados = document.getElementById("listar_empleados");
    let registro = document.getElementById("registro");

    let online_icon = document.getElementById("online");
    let username = document.getElementById("username");
    let log_out = document.getElementById("log_out");

    let form_loging = document.getElementById("landin_derecho");

    let landing = document.getElementById("landing");
    let tabla_empleados = document.getElementById("listado_empleados")
    
    

    /* ocultar y mostrar nueva info */

    inicio.style.display = "block";
    registro.style.display = "block";
    listar_empleados.style.display = "none";

    online_icon.style.display = "none";
    username.innerHTML = '';
    username.style.display = "none";
    log_out.style.display = "none";

    tabla_empleados.style.display="none";
    landing.style.display = "block";
    form_loging.style.display ="block";

    location.reload();

}