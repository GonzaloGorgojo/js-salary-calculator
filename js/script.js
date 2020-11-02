function elementoCreado(){
    var contenedor = document.createElement("INPUT");
    contenedor.style.margin = '2vh 0 2vh 5vw';
    contenedor.style.marginLeft = '3vw';
    contenedor.style.fontSize = '1rem';
    contenedor.style.width = '30vw';
    contenedor.style.height = '5vh';
    contenedor.setAttribute("id", "inputSueldo");
    contenedor.setAttribute("type", "number");
    contenedor.setAttribute("step", "any");

    var agregar = document.getElementById("nuevoElemento");
    document.body.insertBefore(contenedor, agregar);

    $("#inputSueldo").on('keypress', function(e){if(e.which == 13){sueldoBruto(); descuentos()}});
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
    var parrafo = document.createTextNode("Ingrese su sueldo bruto sin puntos ni comas y presione la tecla Enter al Finalizar!");
    texto.style.fontSize = '1rem';
    texto.style.marginLeft = '3vw';
    texto.style.fontWeight = 'bold';
    texto.style.width = '90vw';
    texto.appendChild(parrafo);

    var algo = document.getElementById("otroElemento");
    document.body.insertBefore(texto, algo);
}

function llamarAmbas() {
    elementoCreado();
    elementoCreado_texto();
}

$("#boton").click(function(){ 
    $("div#afiliado").show(); 
  });
  

var btnAceptar=document.getElementById("boton");
var disableButton = function() { this.disabled = true; };
btnAceptar.addEventListener('click', disableButton , false);



function sueldoBruto(){
    var consulta_mensual = document.getElementById("inputSueldo").value;
    var sueldoBruto_mensual = document.getElementsByClassName("sueldoBruto_mensual");
    sueldoBruto_mensual[0].innerHTML = parseInt(consulta_mensual);

    var calculoBruto_anual = parseInt((consulta_mensual * 12));

    var sueldoBruto_anual = document.getElementsByClassName("sueldoBruto_anual");
    sueldoBruto_anual[0].innerHTML = calculoBruto_anual;

    guardarSueldo();
}


function descuentos(){
 var consulta_mensual = $("#inputSueldo").val();

 var obraSocial = $(".descuentos_obraSocial");
 var afiliacion = $(".descuentos_afiliacion");
 var jubilacion = $(".descuentos_jubilacion");
 var ganancias = $(".descuentos_ganacias");

 obraSocial[0].innerHTML = (consulta_mensual * 4 / 100);
 jubilacion[0].innerHTML = (consulta_mensual * 14 / 100);

if($('input[name=siafiliado]:checked').length > 0){
    afiliacion[0].innerHTML = (consulta_mensual * 2 / 100);
}
else {
    afiliacion[0].innerHTML = 0;
}

if( consulta_mensual >= 80000){
    ganancias[0].innerHTML = (consulta_mensual * 4 / 100);
} 
else {
    ganancias[0].innerHTML = 0;
}
sueldoNeto()
}

function sueldoNeto(){
    var consulta_mensual = $("#inputSueldo").val();

    var sueldoNeto_mensual = $(".sueldoNeto_mensual");
    var sueldoNeto_anual = $(".sueldoNeto_anual");
    sueldoNeto_mensual[0].innerHTML = (consulta_mensual - $(".descuentos_obraSocial").html() - $(".descuentos_afiliacion").html() - $(".descuentos_jubilacion").html() - $(".descuentos_ganacias").html());
    sueldoNeto_anual[0].innerHTML = (sueldoNeto_mensual[0].innerHTML * 12);

    JSONusuario();
    valorCripto();
    compraPizzas();
    compraCerveza();
}


function guardarSueldo(){
    sessionStorage.sueldoBrutoUsuario = document.getElementById("inputSueldo").value;
}

function JSONusuario(){
     var usuario = {
        "nombre": 'Usuario Anonimo',
        "sueldo Bruto Mensual": document.getElementById("inputSueldo").value,
        "sueldo Neto Mensual": $(".sueldoNeto_mensual").html(),
    }
    console.log(usuario);
}


function compraPizzas(){ 
    $.ajax({
        url: "datos.json",
        type: "GET",
        dataType: "json"
    }).done( function(resultado) {
        var pizzaChica = $(".pizza_chica");
        var pizzaGrande =  $(".pizza_grande");
        var pizzaComun = $(".pizza_comun");
        var pizzaEspecial = $(".pizza_especial");

        pizzaChica[0].innerHTML = parseInt(($(".sueldoNeto_mensual").html() / resultado.datosComparaciones[0].valor));
        pizzaGrande[0].innerHTML = parseInt(($(".sueldoNeto_mensual").html() / resultado.datosComparaciones[1].valor));
        pizzaComun[0].innerHTML = parseInt(($(".sueldoNeto_mensual").html() / resultado.datosComparaciones[2].valor));
        pizzaEspecial[0].innerHTML = parseInt(($(".sueldoNeto_mensual").html() / resultado.datosComparaciones[3].valor));
 
    }).fail(function (xhr, status, error) {
        console.log(xhr); console.log(status); console.log(error);
       })
}

function compraCerveza(){ 
    $.ajax({
        url: "datos.json",
        type: "GET",
        dataType: "json"
    }).done( function(resultado) {
        var cervezaLata = $(".cerveza_lata");
        var cervezaPinta =  $(".cerveza_pinta");
        var cervezaBotella = $(".cerveza_botella");

        cervezaLata[0].innerHTML = parseInt(($(".sueldoNeto_mensual").html() / resultado.datosComparaciones[4].valor));
        cervezaPinta[0].innerHTML = parseInt(($(".sueldoNeto_mensual").html() / resultado.datosComparaciones[5].valor));
        cervezaBotella[0].innerHTML = parseInt(($(".sueldoNeto_mensual").html() / resultado.datosComparaciones[6].valor));
 
    }).fail(function (xhr, status, error) {
        console.log(xhr); console.log(status); console.log(error);
       })
}

function valorCripto() {
    $.ajax({
        url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=ars",
        type: "GET",
        dataType: "json"
    }).done( function(resultado) {
        var bitcoin = $(".criptomoneda_bitcoin");
        bitcoin[0].innerHTML = ($(".sueldoNeto_mensual").html() / resultado.bitcoin.ars).toFixed(8);   
    }).fail(function (xhr, status, error) {
        console.log(xhr); console.log(status); console.log(error);
       })
}

 