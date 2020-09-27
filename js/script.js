let sueldoBruto_mensual = parseInt(prompt("Ingrese su sueldo Bruto Mensual","Escriba aqui..."));
let sueldoBruto_anual = (sueldoBruto_mensual * 12);

alert("Su sueldo bruto Anual es " + sueldoBruto_anual);

let sueldoNeto_mensual;
let sueldoNeto_anual;

let calculoSueldo;


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




