// Parte central
let NumeroSecreto = GenerarNumeroSecreto(); // Generar número secreto al inicio del juego
console.log(NumeroSecreto); // Mostrar el número secreto en la consola para propósitos de prueba
let Intentos = 1; // Contador de intentos inicializado a 1
let ListaNumerosSorteados = [];
let NumeroMaximo = 10; 

// Llamada a MensajesInicio() al cargar el DOM
document.addEventListener("DOMContentLoaded", MensajesInicio);
/*
document.addEventListener('DOMContentLoaded', function() {
    MensajesInicio(); // Llamar a la función de mensajes iniciales cuando el DOM esté completamente cargado
});*/

function AsignarTextoElemento(Elementos, Texto){
    // Función para asignar texto a elementos HTML
    let ElementoHTML = document.querySelector(Elementos);
    ElementoHTML.innerHTML = Texto; // Asignar el texto proporcionado al elemento HTML especificado
    return;
}

function VerificarIntento(){
    let NumeroUsuario = parseInt(document.getElementById("valorUsuario").value); // Obtener número ingresado por el usuario y convertirlo a entero

    if(NumeroUsuario === NumeroSecreto){
        // Si el número del usuario es igual al número secreto
        AsignarTextoElemento(".p", "¡Felicidades! Has adivinado, después de: "+ Intentos + " intento/s.");
        document.getElementById("reiniciar").removeAttribute("disabled"); // Habilitar el botón de nuevo juego
    }
    else{
        // Si el número del usuario no es igual al número secreto
        if(NumeroUsuario > NumeroSecreto){
            AsignarTextoElemento(".p", "El número secreto es menor."); // Indicar que el número secreto es menor
        }
        else{
            AsignarTextoElemento(".p", "El número secreto es mayor."); // Indicar que el número secreto es mayor
        }
        Intentos++; // Incrementar el contador de intentos
        LimpiarCaja(); // Limpiar la caja de entrada del usuario para un nuevo intento
    }
    return;
}

function GenerarNumeroSecreto() {
    let NumeroMaximo=10;
    let ListaNumerosSorteados = [];
    // Función para generar un número aleatorio entre 1 y 10
    let NumeroGenerado =  Math.floor(Math.random()*NumeroMaximo)+1;

    console.log(NumeroGenerado);
    console.log(ListaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (ListaNumerosSorteados.length == NumeroMaximo) {
        AsignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } 
    else{
        //Si el numero generado está incluido en la lista 
        if (ListaNumerosSorteados.includes(NumeroGenerado)) {
            return GenerarNumeroSecreto(); 
        } 
        else {
            ListaNumerosSorteados.push(NumeroGenerado);
            return NumeroGenerado;
        }
    }
}

function LimpiarCaja() {
    // Función para limpiar el valor de la caja de entrada del usuario
    let ValorCaja = document.getElementById("valorUsuario");
    ValorCaja.value = ""; // Reiniciar el valor de la caja de entrada
    return;
}

function MensajesInicio(){
    // Función para establecer los mensajes iniciales del juego
    console.log("MensajesInicio se está ejecutando"); // Añadir mensaje de consola
    AsignarTextoElemento("h1","Juego del número secreto"); // Establecer título del juego
    AsignarTextoElemento(".p","Intenta adivinar el número secreto, escribiendo un número del 1 al 10."); // Indicar al usuario cómo jugar
}

function ReiniciarJuego(){
    // Función para reiniciar el juego
    LimpiarCaja(); // Limpiar la caja de entrada del usuario
    MensajesInicio(); // Restablecer los mensajes iniciales del juego
    NumeroSecreto = GenerarNumeroSecreto(); // Generar un nuevo número secreto
    document.getElementById("reiniciar").setAttribute("disabled", true); // Deshabilitar el botón de nuevo juego
    Intentos = 1; // Reiniciar el contador de intentos
}

MensajesInicio();

