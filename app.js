//---------------------------validator------------------------
// var validator = require('validator');
 
// console.log(validator.isEmail('foo@bar.com'));

// console.log(validator.isURL("https://www.npmjs.com/package/validator"));

//----------------------------chalk-----------------------------


// const chalk = require('chalk');

// console.log(chalk.white.inverse.bold('app is going to sucess!!'));

//--------------------------process.argv-------------------------

const num1 = process.argv[2]
const num2 = process.argv[3]

if(command === "add"){
    console.log("ok i will add")
}else{
    console.log("What can i do")
}
console.log(num1 + num2)
console.log(process.argv);
//-----------------------------------------yargs------------------------------
