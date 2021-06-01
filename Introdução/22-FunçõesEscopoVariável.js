var n = "global";

function mostarNGlobal(){
    console.log("Valor de n : " + n);
    n="oba oba";
}

function mostarNlocal(){
    var n="local";
    console.log("Valor de n : " + n);

}

mostarNGlobal();

mostarNlocal();

console.log("Valor de n : " + n);





