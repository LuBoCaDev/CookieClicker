// Definimos una clase Juego que maneja toda la lógica
class Juego {
    constructor() {
        this.fuego = 0;
        this.inventario = [0, 0, 0]; // Flechas en llamas, Chamanes de fuego, Catapultas
        this.produccionFuego = [1, 2, 6]; // Producción de fuego por cada uno
        this.costoProducto = [100, 200, 400]; // Costos de cada producto
        this.FPSProduce = 1;
        this.FPS = 30;
        }
    
        // Método para hacer clic en el árbol y ganar fuego
        hacerClicEnArbol() {
        // Si tienes flechas en llamas, añade la cantidad correspondiente al número de fuegos.
        // Si tienes una flecha, sumas 2 fuegos, si tienes 2 sumas 3, etc.
        this.fuego += this.inventario[0] + 1;  // Sumamos el número de flechas más 1
        }
    
        // Método para adquirir un producto
        adquirirProducto(indiceProducto) {
        if (this.fuego >= this.costoProducto[indiceProducto]) {
            this.inventario[indiceProducto]++;
            this.fuego -= this.costoProducto[indiceProducto];
        } else {
            alert("No tienes suficiente fuego");
        }
        }
    
        // Método para generar fuego automáticamente según el inventario
        generarFuego() {
        // Solo generar fuego de cohetes goblin y catapultas, no de flechas
        for (let i = 1; i < this.inventario.length; i++) {
            this.fuego += this.inventario[i] * this.produccionFuego[i];
        }
        }
    
        // Método para actualizar la pantalla
        actualizarPantalla() {
            // Mostrar las flechas de fuego, y cuántas llamas se generan por cada una
            let llamasPorFlecha = this.inventario[0] + 1; // +1 por el fuego base que da cada flecha

            // Mostrar cuántas llamas por segundo se generan con los cohetes goblin y catapultas
            let llamasPorCohetesGoblin = this.inventario[1] * this.produccionFuego[1]; // Llamas por segundo por cada chamán
            let llamasPorCatapulta = this.inventario[2] * this.produccionFuego[2]; // Llamas por segundo por cada catapulta

            // Actualizar el contador de fuego y el inventario con la nueva información
            document.getElementById("contador").innerText = this.fuego;
            document.getElementById("inventario").innerHTML = `
                Flechas de fuego: ${this.inventario[0]} (Generando ${llamasPorFlecha} llamas por clic)<br>
                Cohetes Goblin: ${this.inventario[1]} (Generando ${llamasPorCohetesGoblin} llamas por segundo)<br>
                Catapultas: ${this.inventario[2]} (Generando ${llamasPorCatapulta} llamas por segundo)
    `;
}

    
        // Método para iniciar el juego
        iniciarJuego() {
        setInterval(() => this.generarFuego(), 1000 / this.FPSProduce);
        setInterval(() => this.actualizarPantalla(), 1000 / this.FPS);
        }
    }
    
    // Crear una instancia del juego y asignarla a la variable global `juego`
    const juego = new Juego();
    juego.iniciarJuego();