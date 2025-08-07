// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para almacenar los nombres
let listaAmigos = []; 

// Deshabilitar botones después del sorteo
const botonAgregar = document.querySelector('.button-add');
const botonSortear = document.querySelector('.button-draw');

// Referencias a elementos
const inputAmigo = document.getElementById('amigo');
const listaAmigosUl = document.getElementById('listaAmigos');
const resultadoUl = document.getElementById('resultado');


function agregarAmigo() { // Función para agregar un amigo
    let nombreAmigo = document.getElementById('amigo').value;
      if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
      }
        if (listaAmigos.includes(nombreAmigo)) {
        alert('Este nombre ya fue agregado.');
        return;
    }
    listaAmigos.push (nombreAmigo)
    actualizarLista()
    console.log(listaAmigos)
    limpiarCaja();
    return
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        resultadoUl.textContent = 'Agrega al menos dos amigos para realizar el sorteo.';
        return;
    }
    if (listaAmigos.length === 0) {
        console.log("No quedan elementos en la lista.");
        alert("No quedan amigos por sortear :c")
        return;
    }
    const amigoAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[amigoAleatorio];
    console.log(amigoSeleccionado);
    console.log(amigoAleatorio);
    listaAmigos.splice(amigoAleatorio, 1); // Elimina el elemento seleccionado
    // Mostrar el resultado en pantalla
    resultado.innerHTML = `<li>🎉 El amigo sorteado es: <strong>${amigoSeleccionado}</strong></li>`;
    botonAgregar.disabled = true;
    botonSortear.disabled = true;
    return amigoSeleccionado;
    
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = "";
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    listaAmigosUl.innerHTML = '';

    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
}
//
function mostrarListaAmigos() {
    const lista = document.getElementById('lista-amigos');

    // Limpia la lista para evitar duplicados
    lista.innerHTML = '';

    // Recorre el arreglo y agregar cada amigo como <li>
    for (let i = 0; i < listaAmigos.length; i++) {
        const amigo = listaAmigos[i];
        lista.innerHTML += `<li>${amigo}</li>`;
    }
}