const myPresentation = require('./information');
console.log(`Hi, my name is ${myPresentation.name} and I'm in ${myPresentation.campus} campus`);

const  sayHello = `Hi, my name is ${myPresentation.name} and I'm in ${myPresentation.campus} campus`;


let cowsay = require("cowsay");

console.log(cowsay.say({
    text : sayHello,
    e : "oO",
    T : "U "
}));