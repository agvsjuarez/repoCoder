// PEDIR UN NUMERO INGRESADO POR TECLADO E IMPRIMIR LA PALABRA "CABLE" LA CANTIDAD DE VECES EQUIVALENTE AL NUMERO PREVIAMENTE INGRESADO

/*
var numero = parseInt(prompt("Ingrese el numero de veces que desea imprimir la palabra: "));

for(let i=0; i<numero; i++){
	alert("CABLE");
} 
*/

//Aqui se solicita el ingreso del nombre del cliente y la cantidad a comprar de cable. 
//Luego se suma la cantidad de cable total a fabricar para la empresa y se lo muestra por pantalla.

function ingresarCantidad(){
	
	let cantidad = parseInt(prompt("Ingrese la cantidad de metros de cable que desea: "));

	return cantidad;

}

let nombre = prompt("Ingresa tu nombre o ESC para salir: ");
let cantidadCable = 0;
let cantidadTotal = 0;

while(nombre != "ESC"){
	alert("Hola " + nombre);

	cantidadCable = ingresarCantidad();

	cantidadTotal = cantidadCable + cantidadTotal;

	nombre = prompt("Ingresa tu nombre o ESC para salir: ");
}

alert("La cantidad total de cable para fabricar es de: " + cantidadTotal);