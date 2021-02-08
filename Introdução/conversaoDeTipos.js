var n1 = 10;
var n2 = "2";



console.log(n1 * n2, typeof n1, typeof n2); //vai dar ok//

console.log(n1 / n2, typeof n1, typeof n2); //vai dar ok //

console.log(n1 + n2, typeof n1, typeof n2); //vai concatenar em vez de somar - da erro //

console.log(n1 - n2, typeof n1, typeof n2); //vai dar ok //

// pra não dar erro precisa converter -- to not error is need converter the type of the variable

// 3 formas para converter string em número : parseInt(), parseFloat(), Number()

n2 = parseInt(n2);
console.log(n1 + n2, typeof n1, typeof n2); //vai dar ok //

var n3 = "10.9999";
n3 =  parseInt(n3); //parseInt sempre converte para inteiro
console.log(n3, typeof n3);


