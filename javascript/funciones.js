//autoejecutables, anonimas y funciones variables


//
//function saludar(mensaje){
//console.log(mensaje);
//};
//
//saludar("HOLA A TODOS, PUTOS.");


////FUNCIONES ANONIMAS
//var sumar = function(numero1,numero2){
//console.log(numero1+numero2);
//};
//
//sumar(20,10);


//FUNCIONES AUTOEJECUTABLES(iife) inmediatly invoke function expresion
//(function(){document.write("que bien me siento");})();
//NORMALMENTE LAS FUNCIONES QUE SE AUTOEJECUTAN NO QUIERES PEDIRLE NADA AL USUARIO 


var imprimeUbicacion =function(){
    var calle = prompt("dime tu calle puto");
    var colonia= prompt("caite con la colonia esee");
    var numero = prompt("y el numero tambien !");
    
    return calle+" "+colonia+" "+numero;
} 

var direccion= imprimeUbicacion();
//document.write(direccion);

var parrafo=document.getElementById("texto");
parrafo.textContent= direccion;


