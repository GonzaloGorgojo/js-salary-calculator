function crearInputSueldo() {
  var contenedorInputSueldo = document.createElement("INPUT");
  contenedorInputSueldo.style.margin = "2vh 0 2vh 5vw";
  contenedorInputSueldo.style.marginLeft = "3vw";
  contenedorInputSueldo.style.fontSize = "1rem";
  contenedorInputSueldo.style.width = "30vw";
  contenedorInputSueldo.style.height = "5vh";
  contenedorInputSueldo.setAttribute("id", "inputSueldo");
  contenedorInputSueldo.setAttribute("type", "number");
  contenedorInputSueldo.setAttribute("step", "any");

  var agregarInput = $("#creaInput").before(
    contenedorInputSueldo,
    agregarInput
  );

  $("#inputSueldo").on("keypress", function (e) {
    if (e.which == 13) {
        sueldoBruto();
        descuentos();
        mostrarContenidoTablas();
    }
  })
  resaltarInputSueldo();
}



function resaltarInputSueldo() {
  $("#inputSueldo").hover(resaltar, desmarcar);

  function resaltar() {
    $(this).css("borderColor", "red");
  }
  function desmarcar() {
    $(this).css("borderColor", "silver");
  }
}

function crearInputSueldo_texto() {
  var texto = document.createElement("p");
  var parrafo = document.createTextNode(
    "Ingrese su sueldo Bruto y presione Enter al Finalizar!"
  );
  texto.style.fontSize = "1rem";
  texto.style.marginLeft = "3vw";
  texto.style.fontWeight = "bold";
  texto.style.width = "90vw";
  texto.appendChild(parrafo);

  var insertaElementoTexto = $("#otroElemento").before(
    texto,
    insertaElementoTexto
  );
}

function crearInteraccion() {
  crearInputSueldo();
  crearInputSueldo_texto();
}

$("#boton").click(function () {
  $("div#afiliado").show();
  $("#boton").attr("disabled", true);
});

function mostrarContenidoTablas() {
  $("#ocultarTablas").show();
}

function sueldoBruto() {   
  var consulta_mensual = $("#inputSueldo").val();
  var sueldoBruto_mensual = $(".sueldoBruto_mensual");
  sueldoBruto_mensual[0].innerHTML = (consulta_mensual);

  var calculoBruto_anual = (consulta_mensual * 12);

  var sueldoBruto_anual = $(".sueldoBruto_anual");
  sueldoBruto_anual[0].innerHTML = calculoBruto_anual;
}

function descuentos() {
  var consulta_mensual = $("#inputSueldo").val();

  var obraSocial = $(".descuentos_obraSocial");
  var afiliacion = $(".descuentos_afiliacion");
  var jubilacion = $(".descuentos_jubilacion");
  var ganancias = $(".descuentos_ganacias");

  obraSocial[0].innerHTML = (consulta_mensual * 4) / 100;
  jubilacion[0].innerHTML = (consulta_mensual * 14) / 100;

  if ($("input[name=siafiliado]:checked").length > 0) {
    afiliacion[0].innerHTML = (consulta_mensual * 2) / 100;
  } else {
    afiliacion[0].innerHTML = 0;
  }

  if (consulta_mensual >= 80000) {
    ganancias[0].innerHTML = (consulta_mensual * 4) / 100;
  } else {
    ganancias[0].innerHTML = 0;
  }
  sueldoNeto();
}

function sueldoNeto() {
  var consulta_mensual = $("#inputSueldo").val();

  var sueldoNeto_mensual = $(".sueldoNeto_mensual");
  var sueldoNeto_anual = $(".sueldoNeto_anual");
  sueldoNeto_mensual[0].innerHTML =
    consulta_mensual -
    $(".descuentos_obraSocial").html() -
    $(".descuentos_afiliacion").html() -
    $(".descuentos_jubilacion").html() -
    $(".descuentos_ganacias").html();
  sueldoNeto_anual[0].innerHTML = sueldoNeto_mensual[0].innerHTML * 12;

  JSONusuario();
  valorCripto();
  compraPizzas();
  compraCerveza();
}

function JSONusuario() {
  var usuario = {
    nombre: "Usuario Anonimo",
    "sueldo Bruto Mensual": $("#inputSueldo").val(),
    "sueldo Neto Mensual": $(".sueldoNeto_mensual").html(),
  };
  sessionStorage.sueldoBrutoUsuario = usuario.nombre;
}

function compraPizzas() {
  $.ajax({
    url: "datos.json",
    type: "GET",
    dataType: "json",
  })
    .done(function (resultado) {
      var pizzaChica = $(".pizza_chica");
      var pizzaGrande = $(".pizza_grande");
      var pizzaComun = $(".pizza_comun");
      var pizzaEspecial = $(".pizza_especial");

      pizzaChica[0].innerHTML =
        parseInt(
          $(".sueldoNeto_mensual").html() /
            resultado.datosComparaciones[0].valor
        ) + " Unidades";
      pizzaGrande[0].innerHTML =
        parseInt(
          $(".sueldoNeto_mensual").html() /
            resultado.datosComparaciones[1].valor
        ) + " Unidades";
      pizzaComun[0].innerHTML =
        parseInt(
          $(".sueldoNeto_mensual").html() /
            resultado.datosComparaciones[2].valor
        ) + " Unidades";
      pizzaEspecial[0].innerHTML =
        parseInt(
          $(".sueldoNeto_mensual").html() /
            resultado.datosComparaciones[3].valor
        ) + " Unidades";
    })
    .fail(function (xhr, status, error) {
      console.log(xhr);
      console.log(status);
      console.log(error);
    });
}

function compraCerveza() {
  $.ajax({
    url: "datos.json",
    type: "GET",
    dataType: "json",
  })
    .done(function (resultado) {
      var cervezaLata = $(".cerveza_lata");
      var cervezaPinta = $(".cerveza_pinta");
      var cervezaBotella = $(".cerveza_botella");

      cervezaLata[0].innerHTML =
        
          parseInt($(".sueldoNeto_mensual").html() /
            resultado.datosComparaciones[4].valor
          )+ " Unidades";
      cervezaPinta[0].innerHTML =
        parseInt(
          $(".sueldoNeto_mensual").html() /
            resultado.datosComparaciones[5].valor
        ) + " Unidades";
      cervezaBotella[0].innerHTML =
        parseInt(
          $(".sueldoNeto_mensual").html() /
            resultado.datosComparaciones[6].valor
        ) + " Unidades";
    })
    .fail(function (xhr, status, error) {
      console.log(xhr);
      console.log(status);
      console.log(error);
    });
}

function valorCripto() {
  $.ajax({
    url:
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=ars",
    type: "GET",
    dataType: "json",
  })
    .done(function (resultado) {
      var bitcoin = $(".criptomoneda_bitcoin");
      bitcoin[0].innerHTML =
        ($(".sueldoNeto_mensual").html() / resultado.bitcoin.ars).toFixed(8) +
        " BTC";
    })
    .fail(function (xhr, status, error) {
      console.log(xhr);
      console.log(status);
      console.log(error);
    });
}
