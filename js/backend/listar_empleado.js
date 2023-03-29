let empleado_guardado = localStorage.getItem("empleados");
let empleados = JSON.parse(empleado_guardado);

const container_listado_empleados = document.querySelector('.cuerpo_tabla_empleados');

function listar(){
    container_listado_empleados.innerHTML = '';
    for(let i = 0; i < empleados.length; i++){


        /* SE CREA LA FILA Y LAS CELDAS*/
        let fila = document.createElement("tr");
        let nombre = document.createElement("td");
        let correo = document.createElement("td");
        let edad = document.createElement("td");
        let profesion = document.createElement("td");
        let direccion = document.createElement("td");
        let departamento = document.createElement("td");
        let accion_editar = document.createElement("td");
        let accion_eliminar = document.createElement("td");
    
        /* agregar contenido a los campos td */
        nombre.textContent = empleados[i].nombre;
        correo.textContent = empleados[i].correo;
        edad.textContent = empleados[i].edad;
        profesion.textContent = empleados[i].profesion;
        direccion.textContent = empleados[i].direccion;
        departamento.textContent = empleados[i].departamento;
    
        /* crear boton editar y eliminar */
        let boton_editar = document.createElement("button");
        let boton_eliminar = document.createElement("button");
        
        boton_editar.textContent = "Editar";
        boton_eliminar.textContent = "Eliminar";
    
        boton_editar.setAttribute("data_correo", empleados[i].correo);
        boton_editar.addEventListener('click', editar_registro);
    
        boton_eliminar.setAttribute("data_correo", empleados[i].correo);
        boton_eliminar.addEventListener('click', eliminar_registro);
    
        /* agg botones a las celdas */
        accion_editar.appendChild(boton_editar);
        accion_eliminar.appendChild(boton_eliminar);
    
        /*agg celdas a la fila */
        fila.appendChild(nombre)
        fila.appendChild(correo)
        fila.appendChild(edad)
        fila.appendChild(profesion)
        fila.appendChild(direccion)
        fila.appendChild(departamento)
        fila.appendChild(accion_editar)
        fila.appendChild(accion_eliminar)
    
        /* agregar fila a la tabla */
        container_listado_empleados.appendChild(fila);
    }
    
}


/* listeners */



function editar_registro(evento) {

}

function eliminar_registro(evento){

    //obtenemos el nombre guardado en el atributo
    let correo = evento.target.getAttribute("data_correo");
    

    empleados = empleados.filter((obj) => obj.correo !== correo)

    localStorage.setItem("empleados", JSON.stringify(empleados));

    listar();
}

/* Simpre se ejecuta cuando se carga el script */
listar();


function mostrar_empleados(){
    let landing = document.getElementById("landing");
    let tabla_empleados = document.getElementById("listado_empleados")
    landing.style.display = "none";
    tabla_empleados.style.display ="block";
}