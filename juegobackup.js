var fuego = 0;

var inventario = [0, 0, 0];
var produccionFuego = [1, 5, 15];
var costoProducto = [100, 200, 400];

function hacerClicEnArbol(){
    fuego += inventario[0] > 0 ? inventario[0] : 1;
}

function adquirirPArma(producto){
    if (fuego >= costoProducto[producto]){
        inventario[producto]++;
        fuego -= costoProducto[producto];
    }
    else{
        alert("No tienes suficiente fuego");
    }
}

function generarFuego(){
    for (let i = 0; i < inventario.length; i++){
        fuego += inventario[i] * produccionFuego[i];
    }
}

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
