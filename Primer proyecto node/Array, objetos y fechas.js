//Listas, array o arreglo
const lista = [1, "Hola", true, undefined, null];
const lista2 = new Array(2, "Hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "Soy index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {
  altura: 10,
  anchura: 5,
  marca: "Xiaomi",
  isWhite: false,
  contactos: ["Andrés", "Salomé", "Raúl"],
  targeta: {
    marca: "Sandisk",
    almacenamiento: 64,
    "origen-targeta": "Japón",
  },
};
movil.anyo = 2019;
movil.marca = "Samsung";

console.log(movil.targeta.marca);
console.log(movil.anyo);
console.log(movil.marca);
console.log(movil.targeta["origen-targeta"]);

//Fechas
//Librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //Utilizando 10 milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const ano = ahora.getFullYear();
console.log(dia, mes, ano);
