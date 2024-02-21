
class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
        console.log('Su nombre es:'+ this.nombre);
        }
    showStats(){
        console.log('Su nombre es: '+ this.nombre + ", la fuerza es de: "+ this.fuerza + ", la velocidad es de: "+this.velocidad +", y su salud igual a: " + this.salud);
    }
    drinkSake(){
        this.salud+=10;
    }
}
class Sensei extends Ninja{
    constructor(nombre,salud,sabiduria){
        super(nombre,salud);
        this.sabiduria=10;
        this.salud=200;
        this.velocidad=10;
        this.fuerza=10;
        
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Mientras no te rindas, siempre habrá una salvación.");
       
    }
}
  const ninja1 = new Ninja("Hyabusa");
  const sensei1 = new Sensei("GIsa");
  const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();