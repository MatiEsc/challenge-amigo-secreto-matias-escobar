// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
let listaAmigos = [];

function capitalizarNombre(nombre) {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

function sanitizarEntrada(input) {
  const temp = document.createElement("div");
  temp.textContent = input;
  return temp.innerHTML;
}

function validarNombre(nombre) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;
  return regex.test(nombre);
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = `<h3>Lista de amigos (${listaAmigos.length})</h3>`;
  listaAmigos.forEach((nombre) => {
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
  });
}

function agregarAmigo() {
  const input = document.getElementById("amigo");
  let nombre = input.value.trim();
  nombre = sanitizarEntrada(nombre);

  if (!validarNombre(nombre)) {
    alert("El nombre solo puede contener letras y tildes. Por favor, ingrese un nombre válido.");
    return;
  }

  nombre = capitalizarNombre(nombre);

  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  if (listaAmigos.includes(nombre)) {
    alert("Este nombre ya está en la lista.");
    return;
  }

  listaAmigos.push(nombre);
  actualizarLista();
  input.value = "";
}

function sortearAmigo() {
  if (listaAmigos.length < 2) {
    alert("Debe haber al menos dos nombres en la lista para realizar el sorteo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}

function reiniciarJuego() {
  listaAmigos = [];
  document.getElementById("listaAmigos").innerHTML = "<h3>Lista de amigos (0)</h3>";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("reiniciarBtn").disabled = true; // Deshabilitar el botón después de reiniciar
}
*/

// Array donde se almacenarán los nombres de los amigos
let listaAmigos = [];

// Función para capitalizar el primer carácter del nombre y convertir el resto a minúsculas
function capitalizarNombre(nombre) {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

// Función para sanitizar la entrada, asegurando que no se puedan insertar elementos HTML maliciosos
function sanitizarEntrada(input) {
  const temp = document.createElement("div"); // Crea un elemento temporal para almacenar el texto
  temp.textContent = input; // Asigna el texto al contenido del div (esto convierte cualquier HTML a texto plano)
  return temp.innerHTML; // Devuelve el texto sanitizado
}

// Función para validar si el nombre solo contiene letras y caracteres especiales como tildes o ñ
function validarNombre(nombre) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/; // Expresión regular que solo permite letras y tildes
  return regex.test(nombre); // Devuelve true si el nombre es válido, false si no lo es
}

// Función que actualiza la lista de amigos en la interfaz de usuario
function actualizarLista() {
  const lista = document.getElementById("listaAmigos"); // Obtiene el contenedor de la lista en el HTML
  lista.innerHTML = `<h3>Lista de amigos (${listaAmigos.length})</h3>`; // Muestra el encabezado con la cantidad de amigos en la lista
  listaAmigos.forEach((nombre) => {
    // Recorre cada amigo en la lista de amigos
    const item = document.createElement("li"); // Crea un nuevo elemento <li>
    item.textContent = nombre; // Asigna el nombre del amigo al contenido del <li>
    lista.appendChild(item); // Agrega el nuevo <li> a la lista en el HTML
  });
}

// Función que se ejecuta al hacer clic en el botón "Añadir"
function agregarAmigo() {
  const input = document.getElementById("amigo"); // Obtiene el valor del input donde se escribe el nombre
  let nombre = input.value.trim(); // Elimina los espacios en blanco al principio y al final del nombre
  nombre = sanitizarEntrada(nombre); // Sanitiza el nombre para evitar contenido HTML malicioso

  // Verifica si el nombre es válido usando la función de validación
  if (!validarNombre(nombre)) {
    alert("El nombre solo puede contener letras y tildes. Por favor, ingrese un nombre válido.");
    return; // Si el nombre no es válido, muestra un mensaje y detiene la ejecución
  }

  nombre = capitalizarNombre(nombre); // Capitaliza el nombre para que tenga la primera letra en mayúscula

  // Verifica si el nombre ingresado está vacío
  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return; // Si el nombre está vacío, muestra un mensaje y detiene la ejecución
  }

  // Verifica si el nombre ya está en la lista
  if (listaAmigos.includes(nombre)) {
    alert("Este nombre ya está en la lista.");
    return; // Si el nombre ya está en la lista, muestra un mensaje y detiene la ejecución
  }

  listaAmigos.push(nombre); // Si el nombre es válido, lo agrega a la lista de amigos
  actualizarLista(); // Actualiza la visualización de la lista de amigos en la interfaz
  input.value = ""; // Limpia el campo de entrada para que el usuario pueda escribir otro nombre
}

// Función que se ejecuta al hacer clic en el botón "Sortear"
function sortearAmigo() {
  // Verifica que haya al menos 2 amigos en la lista para poder realizar el sorteo
  if (listaAmigos.length < 2) {
    alert("Debe haber al menos dos nombres en la lista para realizar el sorteo.");
    return; // Si la lista tiene menos de 2 amigos, muestra un mensaje y detiene la ejecución
  }

  // Genera un índice aleatorio para seleccionar un amigo de la lista
  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[indiceAleatorio]; // Selecciona el amigo secreto basado en el índice aleatorio

  const resultado = document.getElementById("resultado"); // Obtiene el contenedor de los resultados en el HTML
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`; // Muestra el nombre del amigo secreto en la interfaz

  // Desactiva el botón de sortear después de realizar el sorteo
  const botonSortear = document.querySelector(".button-draw");
  botonSortear.disabled = true; // Desactiva el botón "Sortear"

  // Habilita el botón de reiniciar después de hacer el sorteo
  document.getElementById("reiniciarBtn").disabled = false;
}

// Función que reinicia el juego, vaciando la lista de amigos y los resultados
function reiniciarJuego() {
  listaAmigos = []; // Limpia la lista de amigos
  document.getElementById("listaAmigos").innerHTML = "<h3>Lista de amigos (0)</h3>"; // Actualiza la interfaz para reflejar que la lista está vacía
  document.getElementById("resultado").innerHTML = ""; // Limpia los resultados del sorteo
  document.getElementById("reiniciarBtn").disabled = true; // Deshabilita el botón de reiniciar, ya que no tiene sentido reiniciar sin amigos
  document.querySelector(".button-draw").disabled = false; // Habilita el botón de sortear nuevamente
}

// Función para habilitar el botón de "Reiniciar" cuando hay al menos 2 amigos en la lista
function verificarBotonReinicio() {
  const botonReiniciar = document.getElementById("reiniciarBtn");
  if (listaAmigos.length >= 2) {
    botonReiniciar.disabled = false; // Si hay al menos 2 amigos, habilita el botón de reiniciar
  } else {
    botonReiniciar.disabled = true; // Si no hay suficientes amigos, deshabilita el botón de reiniciar
  }
}

// Llama a esta función cada vez que se actualiza la lista de amigos
verificarBotonReinicio();
