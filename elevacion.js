// GIVEN
//console.log(example);
//var example = "I'm the example!";
//console.log(example);
//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
//console.log(example);
//let example = "I'm the example!";   //cuando uso let da error pero con var no
//console.log(hello);                                   
var hello = 'world';  //prediccion=imprime undefined
//realidad=undefined
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
  //  console.log(needle);
}
//prediccion=magnet
//realidad=magnet
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
//console.log(brendan);
//predicion=only kay
//realidad=super cool
//conclusion=nunca entro a la funcion
var food = 'chicken';
//console.log(food);
//eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//prediccion chicken , half-chicken
//realidad=chicken , half-chicken
//mean();
//console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
//console.log(food);
//prediccion=chicken fish undefined undefined
//realiad=error
//conclsion=error por llamar a la funcion antes de definir(?)
//console.log(genre);
var genre = "disco";
//rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
//console.log(genre);
//prediccion=undefined rock r&b disco
dojo = "san jose";
//console.log(dojo);
//learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
//console.log(dojo);
//prediccion=san jose error(?)
//realidad=san jose  seattle burbank san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//prediccion=?
//realidad=error