const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// DESPUÉS DE ES6
//const { email } = person;
//const [firstAnimal] = animals;
//console.log(email);
// => bob@marley.com
//console.log(firstAnimal);
// => horse
const { email, password } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;