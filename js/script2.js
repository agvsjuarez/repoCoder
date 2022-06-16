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

/*
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
*/

//DESAFIO PRE-ENTREGA N1 PROYECTO FINAL
//Se solicita el ingreso de clientes que compren articulos de la empresa de cables, con sus respectivos datos (NOMBRE, EDAD, TELOFONO Y DIRECCION).
//Luego se imprimen estos datos por pantalla y se realiza un listado de ellos con todos sus datos por separado.
//Tambien se le asigna un numero de cliente a cada quien que ingrese, comenzando del 0 en adelante.


function Persona(nombre, edad, tel, direc){

	this.nombre = nombre;
	this.edad = edad;
	this.tel = tel;
	this.direc = direc;

} 

let nombre = prompt("Ingresa tu nombre o ESC para salir: ");
let numeroCliente = 0;
const nombres = [];
const edades = [];
const telefonos = [];
const direcciones = [];

while(nombre != "ESC"){

	console.log("Hola " + nombre.toUpperCase() + "! , usted es el cliente: " + numeroCliente);

	nombres.push(nombre);

	let edad = parseInt(prompt("Ingrese su edad: "));

	edades.push(edad);

	let tel = prompt("Ingresa tu telefono: ");

	telefonos.push(tel);

	let direc = prompt("Ingresa tu direccion: ");

	direcciones.push(direc);

	const personaVariable = new Persona(nombre, edad, tel, direc); 

	for(const propiedad in personaVariable){
		console.log(propiedad + ": " + personaVariable[propiedad]);
	}

	numeroCliente = numeroCliente + 1;

	nombre = prompt("Ingresa tu nombre o ESC para salir: ");
}

console.log("La cantidad de clientes totales ingresados fue de: " + nombres.length);

for(let index=0; index < nombres.length; index++){
	console.log("Nombre del cliente " + index + " : " + nombres[index]);
}

for(let index=0; index < edades.length; index++){
	console.log("Edad del cliente " + index + " : " + edades[index]);
}

for(let index=0; index < telefonos.length; index++){
	console.log("Telefono del cliente " + index + " : " + telefonos[index]);
}

for(let index=0; index < direcciones.length; index++){
	console.log("Direccion del cliente " + index + " : " + direcciones[index]);
}
