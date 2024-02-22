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
        this.res-=target.power;
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

//jugador uno convoca a Ninja cinturon rojo
console.log("El jugador1 convoca a "+ rojo.nombre + " con un costo de " 
+ rojo.costo +" con un poder de " + rojo.power + " y una resiliencia de " + rojo.res);
//eljugador uno juega algoritmo duro en ninja cinturon rojo por lo panto la resistencia aumenta en 3 o sea pasa a ser 7
rojo.res=(rojo.res+algoritmo.magnitud);
console.log("El jugador1 juega a "+ algoritmo.nombre + " en " 
+ rojo.nombre +" aumentando asi la resilencia en " + algoritmo.magnitud + " quedando la resilencia de " + rojo.nombre +" en "+rojo.res);
//jugador dos convoca a ninja cinturon negro
console.log("El jugadorw convoca a "+ negro.nombre + " con un costo de " 
+ negro.costo +" con un poder de " + negro.power + " y una resiliencia de " + negro.res);
////juegador2 juega rechazo de promesa no controlada en ninja cinturon rojo o sea baja la resistencia en 2 
//ahora es 5
rojo.res=rojo.res+rechazo.magnitud;
console.log("El jugador2 juega a "+ rechazo.nombre + " en " 
+ rojo.nombre +" disminuyendo asi la resilencia en " + rechazo.magnitud + " quedando la resilencia de " + rojo.nombre +" en "+rojo.res);
//el jugador 1 juega programacion en pareja en ninja cinturon rojoo ose su power aumenta a 5
rojo.power=rojo.power+programacion.magnitud;
console.log("El jugador1 juega a "+ programacion.nombre + " en " 
+ rojo.nombre +" aumentando su power en " + programacion.magnitud + " quedando el power en " + rojo.power);
//el jugador 1 tiene el ataque ninja cinturon rojo a ninja cinturon negro
//por lo tanto cinturon negro queda en 0

