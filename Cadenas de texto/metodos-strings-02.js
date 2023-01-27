//Métodos de cadenas de texto (Parte 2)
let input = "Escorpio"
let db = "escorpio"

//toLowerCase() - toUpperCase()
console.log(input.toLowerCase())
console.log(db.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())

//Formas de concatenar dos cadenas de caracteres
let str_1 = "Soy la primera parte"
let str_2 = " Y yo soy la segunda cadena"

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

//Eliminar espacios al inicio y al final
let str_3 = "   Hola soyun string con espacios al final.    ";
console.log(str_3.length)
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

//Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string número 4" // ["H", "o", "l", ...]

console.log(str_4.charAt(5))
console.log(str_4[5])

//Obtener posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Andrés y me gusta el surf";
console.log(str_5.toLowerCase().indexOf("andrés"))
console.log(str_5.charAt(9))