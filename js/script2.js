// PEDIR UN NUMERO INGRESADO POR TECLADO E IMPRIMIR LA PALABRA "CABLE" LA CANTIDAD DE VECES EQUIVALENTE AL NUMERO PREVIAMENTE INGRESADO

/*
var numero = parseInt(prompt("Ingrese el numero de veces que desea imprimir la palabra: "));

for(let i=0; i<numero; i++){
	alert("CABLE");
} 
*/

//Aqui se solicita el ingreso del nombre del cliente y la cantidad a comprar de cable. 
//Luego se suma la cantidad de cable total a fabricar para la empresa y se lo muestra por pantalla.

/*
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
*/

//Aqui se solicita el ingreso de los nombres de los empleados que trabajan en la fábrica
//Y luego imprime el listado de ellos y la cantidad para obtener un control

const arrayNombres = [];
let cantidadEmpleados = 0;

let nombre = prompt("Ingresa tu nombre o 1 para salir: ");

while(nombre != "1"){

	arrayNombres.push(nombre);

	nombre = prompt("Ingresa tu nombre o 1 para salir: ");
}

cantidadEmpleados = arrayNombres.length - 1;
console.log("La cantidad de empleados que ingresaron fue: " + cantidadEmpleados);
console.log("Los empleados que ingresaron fueron: " + arrayNombres.join(';'))


