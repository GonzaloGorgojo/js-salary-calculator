var consulta_mensual = parseInt(prompt("Ingrese su sueldo Bruto Mensual","Ingrese numero sin puntos ni comas..."));
var sueldoBruto_mensual = document.getElementsByClassName("sueldoBruto_mensual");
sueldoBruto_mensual[0].innerHTML = consulta_mensual;

var calculoBruto_anual = (consulta_mensual * 12);

var sueldoBruto_anual = document.getElementsByClassName("sueldoBruto_anual");
sueldoBruto_anual[0].innerHTML = calculoBruto_anual;



function elementoCreado(){
    var contenedor = document.createElement("p");
    var texto = document.createTextNode("te Dije que no funciona!");
    contenedor.appendChild(texto);

    var agregar = document.getElementById("nuevoElemento");
    document.body.insertBefore(contenedor, agregar);

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



