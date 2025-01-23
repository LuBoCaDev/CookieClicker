class Juego {
    constructor() {
        this.fuego = 0;
        this.inventario = [0, 0, 0];
        this.produccionFuego = [1, 2, 6];
        this.costoProducto = [100, 200, 400];
        this.FPSProduce = 1;
        this.FPS = 30;
        }
    
        hacerClicEnArbol() {

        this.fuego += this.inventario[0] + 1;
        }
    
        adquirirProducto(indiceProducto) {
        if (this.fuego >= this.costoProducto[indiceProducto]) {
            this.inventario[indiceProducto]++;
            this.fuego -= this.costoProducto[indiceProducto];
        } else {
            alert("No tienes suficiente fuego");
        }
        }
    
        generarFuego() {

            for (let i = 1; i < this.inventario.length; i++) {
            this.fuego += this.inventario[i] * this.produccionFuego[i];
        }
        }
    
        actualizarPantalla() {

            let llamasPorFlecha = this.inventario[0] + 1;

            let llamasPorCohetesGoblin = this.inventario[1] * this.produccionFuego[1];
            let llamasPorCatapulta = this.inventario[2] * this.produccionFuego[2];

            document.getElementById("contador").innerText = this.fuego;
            document.getElementById("inventario").innerHTML = `
                Flechas de fuego: ${this.inventario[0]} (Generando ${llamasPorFlecha} llamas por clic)<br>
                Cohetes Goblin: ${this.inventario[1]} (Generando ${llamasPorCohetesGoblin} llamas por segundo)<br>
                Catapultas: ${this.inventario[2]} (Generando ${llamasPorCatapulta} llamas por segundo)
    `;
}
        iniciarJuego() {
        setInterval(() => this.generarFuego(), 1000 / this.FPSProduce);
        setInterval(() => this.actualizarPantalla(), 1000 / this.FPS);
        }
    }
    
    const juego = new Juego();
    juego.iniciarJuego();