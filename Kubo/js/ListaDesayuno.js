/*
  En un arreglo de objetos se guardan las propiedades que nos interesan para mostrar la orden
  (id para identificar cual checkbox estamos marcando, el nombre del platillo, su precio
  asi como su estado, para determinar si este platillo ha sido agregado a la orden)
*/
var itemMenu=[];
itemMenu = [
  {
    /*Podemos ver que en cada elemento es importante considerar las siguientes propiedades
    como el id que tiene que ser identico al id del modal del html, el nombre del platillo 
    que aparecerá en la tabla del total según los elementos seleccionados, el precio que debe 
    coincidir con el precio del html de cada elemento, y el estado es "false" porque es por defecto
    este estado nos indicará si ya se ha agregado algún platillo a la orden o no */
    id:"lechuga",
    nombre: "Ensalada de hojas de lechuga",
    precio:60,
    estado:false
  },
 
  {
    id:"higos",
    nombre: "Ensalada de higos con queso",
    precio:75,
    estado:false
  },
  {
    id:"e-fresca",
    nombre: "Ensalada fresca",
    precio:70,
    estado:false
  },
  {
    id:"manzana",
    nombre: "Coctel de manzana",
    precio:50,
    estado:false
  },
  {
    id:"kiwi",
    nombre: "Coctel de kiwi",
    precio:65,
    estado:false
  },
  {
    id:"piña",
    nombre: "Coctel con piña",
    precio:45,
    estado:false
  },
  {
    id:"pasas",
    nombre: "Pan de pasas",
    precio:18,
    estado:false
  },
  {
    id:"donas",
    nombre: "Donas",
    precio:15,
    estado:false
  },
  {
    id:"almendras",
    nombre: "Concha con alméndras",
    precio:30,
    estado:false
  },
  {
    id:"quesadilla",
    nombre: "Quesadilla de queso",
    precio:80,
    estado:false
  },
  {
    id:"filete-pollo",
    nombre: "Filete de pollo",
    precio:100,
    estado:false
  },
  {
    id:"huevos-revueltos",
    nombre: "Huevos revueltos",
    precio:85,
    estado:false
  },
  {
    id:"nopales-asados",
    nombre: "Nopales asados/Queso",
    precio:70,
    estado:false
  },
  {
    id:"caldo-pollo",
    nombre: "Caldo de pollo",
    precio:95,
    estado:false
  },
  {
    id:"calabazas",
    nombre: "Calabazas a la Mexicana",
    precio:70,
    estado:false
  },
  {
    id:"chilaquiles-r",
    nombre: "Chilaquiles rojos",
    precio:65,
    estado:false
  },
  {
    id:"tamales",
    nombre: "Tamales de nopales",
    precio:60,
    estado:false
  },
  {
    id:"chilaquiles-v",
    nombre: "Chilaquiles verdes c/Huevos estrellados",
    precio:90,
    estado:false
  },
  {
    id:"taco-mexicano",
    nombre: "Taco Mexicano",
    precio:50,
    estado:false
  },
  {
    id:"enchiladas-rojas",
    nombre: "Orden de enchiladas rojas",
    precio:70,
    estado:false
  },
  {
    id:"enchiladas-verdes",
    nombre: "Orden de enchiladas verdes",
    precio:70,
    estado:false
  },
  {
    id:"tostadas-tinga",
    nombre: "Orden de tostadas de tinga",
    precio:75,
    estado:false
  },
  {
    id:"sopes",
    nombre: "Orden de sopes",
    precio:60,
    estado:false
  },
  {
    id:"pechuga-rellena",
    nombre: "Pechuga rellena",
    precio:85,
    estado:false
  },
  {
    id:"calabaza-dulce",
    nombre: "Calabaza en dulce",
    precio:45,
    estado:false
  },
  {
    id:"flan-napolitano",
    nombre: "Flan napolitano",
    precio:48,
    estado:false
  },
  {
    id:"pay-frambuesa",
    nombre: "Pay de frambuesa",
    precio:50,
    estado:false
  },
  {
    id:"yogurth-natural",
    nombre: "Yogurth natural con frutas",
    precio:30,
    estado:false
  },
  {
    id:"mil-hojas",
    nombre: "Pastel de mil hojas",
    precio:55,
    estado:false
  },
  {
    id:"pastel-chocolate",
    nombre: "Pastel de chocolate",
    precio:55,
    estado:false
  },
  {
    id:"te-guayaba",
    nombre: "Té de guayaba",
    precio:13,
    estado:false
  },
  {
    id:"te-limon",
    nombre: "Té de limón",
    precio:13,
    estado:false
  },
  {
    id:"te-naranja",
    nombre: "Té de naranja",
    precio:13,
    estado:false
  },
  {
    id:"te-manzana",
    nombre: "Té de manzana",
    precio:13,
    estado:false
  },
  {
    id:"atole-avena",
    nombre: "Atole de avena",
    precio:15,
    estado:false
  },
  {
    id:"cafe-capuchino",
    nombre: "Taza de café capuchino",
    precio:15,
    estado:false
  },
  {
    id:"atole-nuez",
    nombre: "Atole de nuéz",
    precio:15,
    estado:false
  },
  {
    id:"cafe-tostado",
    nombre: "Café tostado",
    precio:18,
    estado:false
  },
  {
    id:"jugo-betabel",
    nombre: "Jugo de betabel",
    precio:20,
    estado:false
  },
  {
    id:"jugo-zanahoria",
    nombre: "Jugo de zanahoria",
    precio:20,
    estado:false
  },
  {
    id:"jugo-naranja",
    nombre: "Jugo de naranja",
    precio:20,
    estado:false
  },
  {
    id:"jugo-arandano",
    nombre: "Jugo de arándano",
    precio:20,
    estado:false
  }
];

function ordenar(){
  //Las variables que se utilizarán más adelante se declaran
  var fila, celda, celda2, textoCelda, textoCelda2;
  //cuentaTotal es una variable numérica, almacenará los precios de las comidas
  var cuentaTotal = 0;
  //Se almacena en una variable el cuerpo de la tabla
  var tablaBody = document.getElementById("tbody");

  // utilizamos un bucle for para realizar el proceso de checar cada checbox de acuerdo al numero de elementos
  // en el arreglo de objetos declarado anteriormente (donde se almacenan los platillos)
  for ( item in itemMenu){
  // para cada elemento   obtenemos el elemento del html que tiene el mismo Id que nuestro platillo 
  //almacenado en el arreglo
  // y comprobamos si el checbox esta "checked" (propiedad que nos devolvera un true o un false,
  // dependiendo si han seleccionado o no el checbox)

    if (document.getElementById(itemMenu[item].id).checked){
      //Suma en la variable cuentaTotal el valor de cuentaTotal mas el precio del producto almacenado en el arreglo
      cuentaTotal += itemMenu[item].precio;
      //comprobamos el estado del producto,  si el estado es true significa que ya fue agregado al menu anteriormente
      // y si lo agregaramos nuevamente, se repetiria en la tabla, pero si es false no ha sido agregado y 
      //hay que realizar el proceso
      // para agregarlo:
      if (itemMenu[item].estado!=true){

      //si esto es cierto entonces
      //Crea un elemento de fila
      fila = document.createElement("tr");
      //Crea una celda de la fila
      celda = document.createElement("td");
      //Inserta texto en la celda creada (el nombre del platillo que almacenamos en nuestro arreglo)
      textoCelda = document.createTextNode(itemMenu[item].nombre);
      //Realiza las mismas acciones con la otra celda, pero ahora añadiendo el precio
      celda2 = document.createElement("td");
      textoCelda2 = document.createTextNode(itemMenu[item].precio);

      //Agrega los textos a las celdas correspondientes
      celda.appendChild(textoCelda);
      celda2.appendChild(textoCelda2);
      //Agrega las celdas a las filas correspondientes
      fila.appendChild(celda);
      fila.appendChild(celda2);
      //Inserta la fila en el cuerpo de la tabla
      tablaBody.appendChild(fila);
      itemMenu[item].estado=true;
      console.log(itemMenu[item].estado);
    }
  }
}

  var divisor = document.getElementById("divTabla");
  divisor.style.display = "block";
  //Se inserta en el elemento con el id "total" la cuenta de todo lo que se ha ordenado
  document.getElementById('total').innerHTML="$"+cuentaTotal+".00";

}
