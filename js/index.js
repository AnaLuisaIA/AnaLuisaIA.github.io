$(document).ready(function() {
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav({
    menuWidth: 280, // Default is 240
    edge: 'left', // Choose the horizontal origin
    draggable: true // Choose whether you can drag to open on touch screens
  });
  $('.slider').slider({
    indicators: false,
    height: 300
  });
  $('.modal').modal();
  $('select').material_select();
  $('#textarea1').trigger('autoresize');
});

//Variables globales que hacer referencias a elementos del HTML
var campoLogin = document.getElementById('nombre_user');
var campoSesion = document.getElementById('sesion');
var icono = document.getElementById('icon');
var comentarioText = document.getElementById('textarea1');

//Modificación de la forma en cómo se muestra la fecha y hora
const timeStamp = () => {
  let options = {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  };
  let now = new Date().toLocaleString('es-MX', options);
  return now;
};

// Configuración de Firebase
var config = {
  apiKey: "AIzaSyCnK0SpcgtpqX1Ot6zZjRztAvOvPm0MAyo",
  authDomain: "restaurante-dcf45.firebaseapp.com",
  databaseURL: "https://restaurante-dcf45.firebaseio.com",
  projectId: "restaurante-dcf45",
  storageBucket: "restaurante-dcf45.appspot.com",
  messagingSenderId: "312243437501"
};

//Inicializa la base de datos
firebase.initializeApp(config);

// Hace referencia a la base de datos
var rootRef = firebase.database().ref();
//Almacena en una variable el usuario que esta conectado actualmente
var user = firebase.auth().currentUser;

//Función que observa si es estado de autenticación cambió
firebase.auth().onAuthStateChanged(function(user) {
  //Si hay un usuario conectado
  if (user) {
    let name, email;
    //Si el usuario no es nulo
    if (user != null) {
      //Obtener el nombre del usuario y guardar en la variable name
      name = user.displayName;
      //Si no hay un nombre en la cuenta con la que se registró
      if (name == null) {
        //Guarda el correo electrónico del usuario conectado
        email = user.email;
        //Coloca el email en el campo de nombre
        campoLogin.value = email;
        //Si usuario tiene un nombre registrado
      } else {
        //Coloca el nombre en el campo de nombre del HTML
        campoLogin.value = name;
      }
      //Deshabilita el campo de nombre y modifica el texto de inicio de sesión por
      //cerrar sesión y agrega la función de cerrarSesion()
      campoLogin.setAttribute('disabled', 'disabled');
      campoSesion.innerText = "Cerrar sesión";
      campoSesion.setAttribute('href', 'javascript:cerrarSesion()');
      //Agrega la clase al elemento icon permitiendo que pueda ser visto.
      icono.className = "fa fa-sign-out";
    }
  } //Si no hay un usuario conectado
  else {
    //Habilita el campo de nombre y modifica el texto del enlace para iniciar/cerrar
    //sesión por Iniciar sesión con Google, agregando la función sesionGoogle()
    campoLogin.removeAttribute('disabled');
    campoSesion.innerText = "Iniciar sesión con Google";
    campoSesion.setAttribute('href', 'javascript:sesionGoogle()');
    //Agrega la clase al elemento icon permitiendo que pueda ser visto.
    icono.className = "fa fa-google";
  }
});

//Guarda en una variable todo lo que esté en el apartado de comentarios de la base
//de datos, si no existe la crea.
var comentariosRef = firebase.database().ref('comentarios');

//Función para visualizar los comentarios realizados
const addCommentElement = (nombre, opcionMenu, comentario, timeStamp) => {
  //Guarda en una variable el elemento de comentarios del HTML
  let comentarioSeccion = document.getElementById('comentarios');
  //Escribe en el elemento de comentarios los elementos de quien comenta como su nombre
  //fecha que escribió el comentario, sobre qué menú hace el comentario y el texto.
  comentarioSeccion.innerHTML = `<hr>
  <h5><strong>${nombre}</strong> <span id="horaComent">${timeStamp}</span>
  <br> <span id="acercaComent">Acerca de <strong>${opcionMenu}</strong></span>
  </h5><br>
  <p id="cuadroComent">${comentario}</p>${comentarioSeccion.innerHTML}`;
}

//Función para agregar comentario a la base de datos
comentariosRef.on('child_added', function(snapshot) {
  var nComentario = snapshot.val();
  //Agrega los diferentes valores a la base de datos
  addCommentElement(nComentario.usuario, nComentario.opcionMenu, nComentario.comentario, nComentario.horaComentario);
});

//Acción cuando se da click en el botón de enviar
function ponerComentario() {
  //Guarda en variables los valores que obtiene de los elementos necesarios para
  //realizar un comentario
  var nombre = document.getElementById('nombre_user').value;
  var comentario = document.getElementById('textarea1').value;
  var opcionMenu = document.getElementById('seleccion').value;
  //Si no seleccionó una opción de menú
  if (!opcionMenu) {
    //Dispara una alerta para señalar al usuario que debe escoger una opción del menú
    alert("Escoge la opción del menú");
  }//Si hay valores tanto en nombre, comentario y opcionMenu los almacena en la base de datos
  else if (nombre && comentario && opcionMenu) {
    //Dentro de la base de datos se realiza un push() que permite agregar los datos con la
    //estructura nombre-valor
    rootRef.child('comentarios').push({
      usuario: nombre,
      comentario: comentario,
      opcionMenu: opcionMenu,
      horaComentario: timeStamp()
    });
    //Se setean el campo de nombre y comentario en blanco
    campoLogin.value = '';
    comentarioText.value = '';
  }
}

//Autenticación mediante google
function sesionGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // Esta variable da acceso al token (identificador) generado.
    var token = result.credential.accessToken;
    // La información del usuario que está ingresando
    var user = result.user;
  }).catch(function(error) {
    // Si existe algún error es obtenido y mostrado en consola
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}
//Cierra sesión actual
function cerrarSesion() {
  firebase.auth().signOut().then(function() {
    //Cambia el campo de nombre por anónimo
    campoLogin.value = 'Anónimo';
  }, //Captura el error si hay algún fallo con el cierre de sesión
  function(error) {
  });
}
