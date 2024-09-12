console.log('Welcome To Node Js Tutorials');

var firstname="Anky singh";
var lastname=' Humraj';
var name=firstname+lastname;
console.log(name);

//if condition
var     a=100;
var b='100';
console.log(a==b); //true
console.log(a===b); //false


//for loop 
for(let a=0; a<=10; a++){

    console.log(a,' ');
}

//array 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(element => {
    console.log(element);
});

//create http on server
// const http=require(('http'));

// http.createServer((req,res)=>{
//     res.write('Hello anky Singh humraj');
//     res.end();
// }).listen(4500);

//i can pass in a functio as the parameter


//create functioon which i want to pass in parameter
// const dataPass=(req,res)=>{
//     res.write('Hello anky Singh humraj data pass');
//     res.end();
// }

// http.createServer(dataPass).listen(4500); 

const colors = require('colors');
// use colors packages
console.log("Anky sing humraj".green);
console.log("Anky sing humraj".underline.red);
console.log("Anky sing humraj".inverse);
console.log("Anky sing humraj".rainbow);
console.log("Anky sing humraj".trap);
//change backgroun red
console.log("Anky sing humraj".green.bgRed);
console.log("Anky sing humraj".green.bgBrightGreen);
//with bold
console.log("Anky sing humraj".green.bgRed.bold.italic);
console.log("Anky sing humraj".green.bgRed);
console.log("Anky sing humraj".green.bgRed);
