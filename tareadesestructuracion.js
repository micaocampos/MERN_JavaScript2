//EJERCICIO UNO
/*const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
const [ ,,prueba ] = cars
//cualquiera de los 3
//cualquiera de los 3(?)
console.log(randomCar)
console.log(otherRandomCar)
//tesla 
//mercedes
//imprime el primero, en el segundo como hay una coma imprime el segundo, SE VERIFICA AGREGANDO UNO MAS
console.log(prueba);
*/


//EJERCICIO 2 
/*const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

//Predict the output
//va dar error porque el name esta tachado(?)
//Elon
console.log(name);
console.log(otherName);
//me dice que name no esta definido porque lo que se definio es othername si queremos definirlo 
//agregamos const { name } = employee;*/


//Ejercicio 3
/*const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
const { age: hashedPassword2 } = person;  
//12345
//Phil Smith
console.log(password);
console.log(hashedPassword);
console.log(hashedPassword2);
//debido a que hashedPassword no existe en nuestro objeto person, el valor será undefined.*/


//Ejercicio 4
/*
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//5
//2
console.log(first == second);//2 es igual a 5 false
console.log(first == third);//2 es igual a 2 true
*/


//Ejercicio 5
/*const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//value
//[1,5,1,8,3,3]
//1
//5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
*/