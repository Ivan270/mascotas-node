const mascotasJson = require('./animales.json');

const getData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let mascotas = mascotasJson.mascotas;
			resolve(mascotas);
		}, 1000);
	});
};

const crearMascota = (nombre, mascota, animal, edadHumana) => {
	return new Promise((resolve, reject) => {
		let nuevaMascota = {
			nombre,
			mascota,
			animal,
			edadHumana,
		};
		setTimeout(() => {
			resolve(nuevaMascota);
		}, 500);
	});
};

const mostrarDatos = async () => {
	let animales = await getData();
	console.table(animales);
	console.log('Cantidad de elementos: ', animales.length);
	console.log('*****************************************');
	console.log('Creando mascota . . .');
	let nuevaMascota = await crearMascota('Kiko', 'true', 'cuy', 1);
	animales.push(nuevaMascota);
	console.log('Se ha creado la siguiente mascota:');
	console.table(nuevaMascota);
	console.log('*****************************************');
	console.log('Array animales modificado. . .');
	console.table(animales);
	console.log('Cantidad de elementos: ', animales.length);
};
mostrarDatos();
