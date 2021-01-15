//tipos primitivos
//strings, number(int, decimal), boolean

var minhaVar = "minha string";
var var1 = 10
var minhavar2 = 'minha "string" com aspas duplas';
console.log(minhavar2);


var minhavar3 = "minha 'string' com aspas simples";
console.log(minhavar3);


var minhavar4 = "minha \"string\" com aspas duplas escapando caracter";
console.log(minhavar4);

var minhavar5 = `minha template literal`;
console.log(minhavar5);

//concatenação
var idade = 40;
var msg = "eu possuo " + idade +  " anos";
console.log(msg);

var idade = 40;
var msg = `eu possuo ${idade} anos`;
console.log(msg);

console.log ("Hello " + "World");

//verificando o tipo da variável
console.log("tipo da variável msg : ", typeof msg, "tipo da variavel idade : ",  typeof idade);

//variavel tipo number
var n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

