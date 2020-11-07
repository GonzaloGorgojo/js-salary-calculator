# Calculadora de Sueldo :exclamation:


### 👉 De que se trata ?

Esta es una calculadora que muestra cual es el sueldo en Argentina luego de realizar los correspondientes descuentos y para representar que podemos comprar con el.


### 🤔 Como usarla ?
Es Simple:
1. Hacer click en el boton "Aqui".
2. Luego se despliegan dos radio buttons y un Input 
3. Seleccionar un radio button, completar el Input con su sueldo bruto y presionar Enter !


### :computer: Como esta hecha ?

* La estructura y el diseño estan hechos con HTML y CSS.
* Diseño responsive.
* La logica esta hecha con javascript y Jquery.
* Las animaciones/efectos estan hechos con JQUERY.
* Llamada a API sobre el valor de criptomonedas esta hecha con Jquery/AJAX.
* Informacion sobre el valor de los productos en JSON.


### :books: Logica

Luego de presionar el boton "Aqui" se muestran dos elementos en pantalla, uno esta oculto con "Display:none" y el otro se crea mediante una funcion Javascript.

Cuando ingresamos el sueldo bruto en el elemento Input creado previamente y presionamos Enter, se ejecutan 2 funciones:
1. La primer funcion toma el valor de lo ingresado por el usuario y lo posiciona en un "p" representando su sueldo bruto. Luego lo multiplica por 12 y lo posiciona en otro "p" que representa el Sueldo bruto Anual.
2. La segunda funcion toma el valor ingresado por el usuario y realiza las siguientes operaciones:
    * Calcula el 4% de descuento por obra social.
    * Calcula el 14% de descuento por aportes jubilatorios.
    * Si el usuario puso que "SI" en los radio buttons, calcula el 2% de descuento por aportes a Sindicatos.
    * Si el usuario indico que gana mas de 80.000$, calcula el 4% de descuentos sobre ganancias.

Cuando finaliza de ejecutarse la segunda funcion se ejecuta una nueva funcion, esta funcion lo que hace es tomar el valor de lo que ingreso el usuario y restarle los correspondientes descuentos calculados previamente, los posiciona en dos "p", uno representa su Sueldo Neto Mensual y el otro representa su sueldo Neto Anual, para este ultimo multiplica por 12 su suelto Neto Mensual.

Luego de finalizar la ejecucion de la funcion para calcular el sueldo Neto, se ejecutan 4 nuevas funciones:
1. La primer funcion crea un "JSON" con los datos del Usuario y los almacena en una "sessionStorage"
2. La segunda funcion mediante "Jquery/AJAX" hace una llamada a una API externa y obtiene el valor de la criptomoneda "bitcoin", con ese valor hace un calculo de cuantos bitcoin podria comprar el usuario con su sueldo Neto.
3. La tercer funcion tambien mediante "Jquery/Ajax" hace una llamada a un archivo Json estatico (fue creado previamente) y obtiene los valores de las diferentes pizzas. Con estos valores hace el calculo de cuantas unidades podria comprar el usuario con su sueldo Neto. Luego los posiciona en los diferentes elementos "p" que las representan.
4. La cuarta funcion mediante "Jquery/Ajax" hace una llamada a un archivo Json estatico (fue creado previamente) y obtiene los valores de las diferentes cervezas. Con estos valores hace el calculo de cuantas unidades podria comprar el usuario con su sueldo Neto. Para luego posicionanarlos en los diferentes elementos "p" que las representan.

Y eso es todo, asi es como funciona !!

### Esta calculadora fue hecha por [Gonzalo Gorgojo!](https://www.linkedin.com/in/gonzalogorgojo/), sientanse libres de escribirme por cualquier consulta o mejora que quieran hacer !