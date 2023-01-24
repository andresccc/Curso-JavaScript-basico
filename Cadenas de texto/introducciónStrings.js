// Trabajar con Strings (Cadenas de caracteres)
let str_smp = "Hola soly un texto con comillas simples";
let str_dbl = "Hola soly un texto con comillas dobles";

console.log(str_smp);
console.log(str_dbl);

let str_comillas = "El otro dia me dijo literalmente 'Ve a sacar la basura' ";
let str_comillas2 = 'El otro dia me dijo literalmente "Ve a sacar la basura" ';
let str_comillas3 = 'El otro dia me dijo literalmente "Ve a sacar la basura" ';
let str_comillas4 = "El otro dia me dijo literalmente 'Ve a sacar la basura' ";

console.log(str_comillas);
console.log(str_comillas2);
console.log(str_comillas3);
console.log(str_comillas4);

// Comillas invertidas (backticks)``

let str_backticks = `Hola esto es un string con backicks`;

console.log(str_backticks);

let nombre = "Andrés";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo);

//Plantilla HTML
let Plantilla = `
<html> 
    <h1>Titulo</h1>
    <h3>Pagina de ${nombre}</h3>
    <p>Este es un parrafo</p>
</html>
`;

console.log(Plantilla);

// Introducción de variables en HTML
let libros = [
  "Empieza por el por qué",
  "El monje que vendió su Ferrari",
  "El poder del ahora",
];
