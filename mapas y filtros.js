const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
//["<li>pearl onions</li>", "<li>cremini mushrooms</li>", "<li>thyme</li>"]
const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
//[1, 8, 27, 64, 125]
//.filter()

const evens = values.filter( val => val % 2 === 0 );
//Esto creará una lista solo de los valores pares ... [2, 4]
//Si solo queremos los alimentos que tienen la letra "o" en ellos, podríamos escribir lo siguiente


const oFoods = groceries.filter( item => item.includes("o") );

const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );

//Esto filtrará los números pares y elevará al cubo los que quedan. [1, 27, 125]