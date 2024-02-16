var sayHello = function(name) {
    console.log('Hello ' + name);
  };
  const sayHello2 = (name) => {
    console.log(`Hello ${name}`);
  };
  sayHello;
  sayHello;
  const sayHello3 = name => console.log(`Hello ${name}`);
  var square = function(n) {
    return n * n;
  };
  const square2 = n => n * n;
  // notación a mano para devolver un objeto
// NOTA: el primer conjunto de corchetes define el cuerpo de la función
// y el segundo conjunto de corchetes son para crear el objeto literal
const returnObjLonghand = () => {
    return { 
        firstName: 'John',
        lastName: 'Wick'
    }
};
/**
  *  
  * los corchetes se interpretan como la apertura del cuerpo de 
  * la función en lugar de corchetes para crear un objeto literal 
  */
//const returnObj = () => { firstName: 'John', lastName: 'Wick' };
// rodear el retorno implícito entre parentesis resuelve el problema
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });
