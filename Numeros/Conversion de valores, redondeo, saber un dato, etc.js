// Operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2
let b = new Number(3)

console.log(a)
console.log(b)
console.log(a + b)
console.log(a.valueOf() + b.valueOf())

console.log(b.valueOf())

//Ejemplo string
let str = new String("Hola soy un string")
console.log(str)
console.log(str.valueOf())

// NaN - Infinity
let n = Number('adios');
console.log(n)
console.log(isNaN(n))

let numerador = 19;
let divisor = 0;

let divisor2 = null;
let divisor3 = "Hola"
    
console.log(numerador / divisor);
console.log(numerador / divisor2);
console.log(numerador / divisor3);


//Como convertir los string a valores numericos con Number, parseInt y parseFloat
let numero = '5.89'
let numero2 = '4'
let num2 = 17.2

console.log(numero)
console.log(typeof numero)
console.log(numero + num2) //Solo concatena cadenas de texto

console.log(Number(numero) + num2)
console.log(parseInt(numero))
console.log(parseFloat(numero2))


//Numeros hexadecimales
let numHex = '0x3a5b7'
console.log(parseInt(numHex))

//Obtener maximo y minimo en JS
let min_precision = Number.EPSILON
let min_valor_JS = Number.MIN_VALUE
let max_valor_JS = Number.MAX_VALUE

console.log(min_precision)
console.log(min_valor_JS)
console.log(max_valor_JS)