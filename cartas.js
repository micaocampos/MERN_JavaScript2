class Carta {
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
}
class Unidad extends Carta {
    constructor(nombre, costo, power, res) {
        super(nombre, costo)
        this.power = power;
        this.res = res;
    }
    ataque(target) {
        //reduce la resolucion por el power(?)
    }
}
class Efecto extends Carta {
    constructor(nombre,costo,texto,stat,magnitud){
        super(nombre,costo);
        this.texto=texto;
        this.stat=stat;
        this.magnitud=magnitud;
    }
}
const rojo = new Unidad("Ninja Cinturon Rojo", 3, 3, 4);
const negro = new Unidad("Ninja Cinturon Negro", 4, 5, 4);
const algoritmo = new Efecto("Algoritmo Dificil", 2, "aumentar la resistencia del objetivo en 3","Resiliencia", +3);
const rechazo = new Efecto("Rechazo de promesa no manejado", 1, "reducir la resistencia del objetivo en 2","Resiliencia", -2);
const programacion = new Efecto("Programacion en pareja", 3, "aumentar el poder del objetivo en 2","poder", +2);


