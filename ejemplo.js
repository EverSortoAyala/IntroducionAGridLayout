alert("Hola, mundo!");

console.log("Este es un mensaje en la consola.");

// Pedir datos al usuario
let nombre = prompt("¿Cuál es tu nombre?") || "Invitado";
let edadInput = prompt("¿Cuántos años tienes?");
const edad = parseInt(edadInput);

// Validar si el usuario ingresó un número válido
if (isNaN(edad)) {
    alert("No ingresaste una edad válida.");
} else {
    // Evaluación condicional (usando el operador ternario de forma limpia)
    const mensajeEdad = edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
    alert(mensajeEdad);
}

// Inserción en el DOM
let datos = document.querySelector("#datos");

// Verificamos que el contenedor exista antes de modificarlo
if (datos) {
    datos.innerHTML = `
        <h1>Información del Usuario</h1>
        <p>Nombre: ${nombre}</p>
        <p>Edad: ${isNaN(edad) ? "No especificada" : edad}</p>
    `;
}

for (let i = 0; i < 5; i++) {
    datos.innerHTML += `<p>Este es el mensaje número ${i + 1}</p>`;
}

let lista = ["Papas", "Galletas", "Refresco", "Dulces"];
let divLista = document.querySelector("#lista");
divLista.innerHTML = lista.map((item) => `<p>${item}</p>`).join('');
let mensaje = "¡Bienvenido a la página!";
const imprimirMensaje = (mensaje) => {
    console.log(mensaje);
}