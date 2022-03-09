
function reserva(){
    var img = document.querySelector("img");
    img.src="/imagenes/reservado.jpg"
}

function reserva2(){
    var imagen2 = document.querySelector("#hot2");
    imagen2.src="/imagenes/reservado.jpg"
}

function ocultar() {
    document.getElementById("hab1").style.display = "none"
    cancelar1 = 0;
}

function ocultar2() {
    document.getElementById("hab2").style.display = "none"
}


function login(){
    var user, pass;
    user = document.getElementById("usuario").value;
    pass = document.getElementById("password").value;

    if (user == "admin" && pass == "1234") {
        window.location = "index.html";
    }else {
        alert("Ingrese las credenciales correctamente")
    }
}		