function elementoCreado(){
    var contenedor = document.createElement("INPUT");
    contenedor.style.margin = '10px';
    contenedor.style.fontSize = '30px';
    contenedor.style.width = '150px';
    contenedor.setAttribute("id", "inputSueldo");

    var agregar = document.getElementById("nuevoElemento");
    document.body.insertBefore(contenedor, agregar);

    $("#inputSueldo").on('keypress', function(e){if(e.which == 13){sueldoBruto()}});
    
    ejecutarResaltar();
}

function ejecutarResaltar(){
    $("#inputSueldo").hover(resaltar, desmarcar)

    function resaltar(){
    $ (this).css("borderColor", "red")
    }
    function desmarcar(){
    $ (this).css("borderColor", "silver")
    }
}

function elementoCreado_texto(){
    var texto = document.createElement("p");
    var parrafo = document.createTextNode("Ingrese su sueldo bruto y presione la tecla Enter al Finalizar!");
    texto.style.fontSize = '25px';
    texto.style.marginLeft = '10px';
    texto.style.fontWeight = 'bold';
    texto.appendChild(parrafo);

    var algo = document.getElementById("otroElemento");
    document.body.insertBefore(texto, algo);
}

function llamarAmbas() {
    elementoCreado();
    elementoCreado_texto();
}

var btnAceptar=document.getElementById("boton");
var disableButton = function() { this.disabled = true; };
btnAceptar.addEventListener('click', disableButton , false);


function sueldoBruto(){
    var consulta_mensual = document.getElementById("inputSueldo").value;
    var sueldoBruto_mensual = document.getElementsByClassName("sueldoBruto_mensual");
    sueldoBruto_mensual[0].innerHTML = consulta_mensual;

    var calculoBruto_anual = (consulta_mensual * 12);

    var sueldoBruto_anual = document.getElementsByClassName("sueldoBruto_anual");
    sueldoBruto_anual[0].innerHTML = calculoBruto_anual;

    guardarSueldo();
    crearJSON();
}


function guardarSueldo(){
    sessionStorage.sueldoUsuario = document.getElementById("inputSueldo").value;
}

function crearJSON(){
     var usuario = {
        "nombre":null,
        "sueldo Bruto": document.getElementById("inputSueldo").value,
        "sueldo Neto": null,

    }
    console.log(usuario["sueldo Bruto"]);
}







//let sueldoNeto_mensual;
//let sueldoNeto_anual;
//let calculoSueldo;

/*
function nuevaPizza(tamanio, gusto){
    this.tamanio = tamanio;
    this.gusto = gusto;
}

var pizza1 = new nuevaPizza("chica");
var pizza2 = new nuevaPizza("grande");
var pizza3 = new nuevaPizza("comun");
var pizza4 = new nuevaPizza("especial");

console.log(pizza1, pizza2)


var cerveza1 = ["Lata"];
var cerveza2 = ["Pinta"];
var cerveza3 = ["Botella"];

alert("Los tamaños de cerveza son " + cerveza1.concat(cerveza2, cerveza3));
*/



