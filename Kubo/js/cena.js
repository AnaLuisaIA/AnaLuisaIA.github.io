/*
  En un arreglo de objetos se guardan las propiedades que nos interesan para mostrar la orden
  (id para identificar cual checkbox estamos marcando, el nombre del platillo, su precio
  asi como su estado, para determinar si este platillo ha sido agregado a la orden)
*/
var itemMenu=[];
itemMenu = [
  {
    id:"ce1",
    nombre: "Tiradito de Atun",
    precio:100,
    estado:false
  },
  {
    id:"ce2",
    nombre: "Rollos de queso",
    precio:120,
    estado:false
  },
  {
    id:"ce3",
    nombre: "Napoleon de Mozarella en Tomate",
    precio:85,
    estado:false
  },
  {
    id:"cp1",
    nombre: "Calabacitas rellenas de queso",
    precio:110,
    estado:false
  },
  {
    id:"cp2",
    nombre: "Canelones de atun con salsa brachamel",
    precio:150,
    estado:false
  },
  {
    id:"cp3",
    nombre: "Pan relleno queso perejil/ajo",
    precio:126,
    estado:false
  },
  {
    id:"cd1",
    nombre: "Churros",
    precio:55,
    estado:false
  },
  {
    id:"cd2",
    nombre: "Mix de galletas",
    precio:85,
    estado:false
  },
  {
    id:"cd3",
    nombre: "Hot cakes con fruta",
    precio:110,
    estado:false
  },
  {
    id:"cb1",
    nombre: "cappucino",
    precio:40,
    estado:false
  },
  {
    id:"cb2",
    nombre: "chocolate Caliente",
    precio:35,
    estado:false
  },
  {
    id:"cb3",
    nombre: "Cafe de Grano",
    precio:25,
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
// para cada elemento   obtenemos el elemento del html que tiene el mismo Id que nuestro platillo almacenado en el arreglo
// y comprobamos si el checbox esta "checked" (propiedad que nos devolvera un true o un false,
// dependiendo si han seleccionado o no el checbox)

    if (document.getElementById(itemMenu[item].id).checked){
      //Suma en la variable cuentaTotal el valor de cuentaTotal mas el precio del producto almacenado en el arreglo
      cuentaTotal += itemMenu[item].precio;
      //comprobamos el estado del producto,  si el estado es true significa que ya fue agregado al menu anteriormente
      // y si lo agregaramos nuevamente, se repetiria en la tabla, pero si es false no ha sido agregado y hay que realizar el proceso
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
