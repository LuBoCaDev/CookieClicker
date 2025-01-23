var fuego = 0;

var inventario = [0, 0, 0]; // Cuantos flechas en llamas, chamanes de fuego y catapultas tenemos
var produccionFuego = [1, 5, 15]; // Cuantos fuegos produce cada uno
var costoProducto = [100, 200, 400]; // Cuanto cuesta cada uno

// Función para hacer clic en el árbol y ganar fuego
function hacerClicEnArbol(){
    fuego += inventario[0] > 0 ? inventario[0] : 1;
}

// Comprar armas de fuego
function adquirirPArma(producto){
    if (fuego >= costoProducto[producto]){
        inventario[producto]++;
        fuego -= costoProducto[producto];
    }
    else{
        alert("No tienes suficiente fuego");
    }
}

// Calcular cuántos fuego se producen por segundo
function generarFuego(){
    for (let i = 0; i < inventario.length; i++){
        fuego += inventario[i] * produccionFuego[i];
    }
}

// Actualizar la pantalla para ver el número de fuego y el inventario
function actualizarPantalla(){
    document.getElementById("contador").innerHTML = fuego;
    document.getElementById("inventario").innerHTML =
        `Flechas en llamas: ${inventario[0]}<br>
        Chamanes de fuego: ${inventario[1]}<br>
        Catapultas: ${inventario[2]}
        `;
}

// -------------    
var FPSProduce = 1;

setInterval(function(){
    generarFuego();
}, 1000 / FPSProduce);

var FPS = 30;

setInterval(function(){
    actualizarPantalla();
}, 1000 / FPS);
