// 1. Creamos un array para almacenar los nombres de los amigos

let nombresAmigos = [];

// funcion para agregar amigo
function agregarAmigo() {

    let nombreAmigo = document.getElementById('amigo').value;

    let isIqualName = false;

    // verificamos que se haya introducido los datos y no es un campo vacio
    if (nombreAmigo.length === 0) {
        alert("Por favor, inserte un nombre.")
    } else {

        for (i = 0; i < nombresAmigos.length; i++) {

            if (nombreAmigo == nombresAmigos[i]) {
                isIqualName = true;
            }
        }
    }

    // verificamos si es verdadero mostramos un mensaje
    if (isIqualName == true) {
        alert("El nombre ya está registrado.")
    } 
    else {

        // almacenamos el nuevo nombre a la lista
        nombresAmigos.push(nombreAmigo);

        // restablecemos el campo de a vacio para un nuevo ingreso de dato
        document.getElementById('amigo').value = '';

        // debemos llamar el recorrido para mostrar los nuevos valores
        recorrerAmigos(nombresAmigos);

        limpiarListaResultado();
    }
}

// 2. funcion que reccore la lista, crear elemento li para cada amigo y lo muestra 
function recorrerAmigos(lista) {

    // estamos referenciando y seleccioando donde se guardaran las listas
    let listaAmigos = document.getElementById('listaAmigos');

    limpiarListaAmigos();

    // recorriendo la listas de amigos
    for (i = 0; i < lista.length; i++) {
        
        // creamos elemento li para cada amigo
        const li = document.createElement("li");
        // insertamos valor
        li.innerHTML = lista[i];
        // agregamos li dentro de ul
        listaAmigos.appendChild(li);
    }
}

// 3. funcion para sortear los amigos
function sortearAmigo() {
    let cantidadAmigos = nombresAmigos.length;
    let amigoSorteado = 0;

    if (cantidadAmigos == 0) {
        alert("Agregue amigos para sortear.")
    } else {
        amigoSorteado = Math.floor(Math.random()*cantidadAmigos);
        
        let lista = document.getElementById('resultado');
        const li = document.createElement("li");

        li.innerHTML = "Obteniendo resultados...";
        lista.appendChild(li);

        // despues de 1 segundo y medio recien mostraamos el amigo sorteado
        setTimeout(() => {
            let contenido = `El amigo sorteado es: ${nombresAmigos[amigoSorteado]}`;
            li.innerHTML = contenido;
        }, 1500)

        limpiarListaAmigos(); 
    }
}

// function de limpiar lista y resultado
function limpiarListaAmigos() {
    document.getElementById('listaAmigos').innerHTML = '';
}

// 
function limpiarListaResultado() {
    document.getElementById('resultado').innerHTML = '';
}

function listarAmigo() {
    if (nombresAmigos.length > 0) {
        recorrerAmigos(nombresAmigos);
    } else {
        alert("Aún no tiene nada registrado en la lista.")
    }
}

function reinciarJuego() {
    limpiarListaAmigos();
    limpiarListaResultado();
    nombresAmigos = [];
}