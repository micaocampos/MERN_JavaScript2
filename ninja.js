
class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
        //let nombre = prompt("DIME EL NOMBRE DEL NINJA");
        console.log('Su nombre es:'+ this.nombre);
        //console.log('Su nombre es: $'+{ this.nombre} );
    }
    showStats(){
        console.log('Su nombre es: '+ this.nombre + ", la fuerza es de: "+ this.fuerza + ", la velocidad es de: "+this.velocidad +", y su salud igual a: " + this.salud);
    }
    drinkSake(){
        this.salud=+10;
    }
}
  const ninja1 = new Ninja("Hyabusa");
  ninja1.sayName();
  ninja1.showStats();
  ninja1.drinkSake();
  ninja1.showStats();