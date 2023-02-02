// Principales operaciones aritmetricas
let a = 3.5
let b = 4.8

//suma
console.log(a + b)
//resta
console.log(a - b)
//Multiplicación
console.log(a*b)
//División
console.log(a/b)

// Representacion de los números en cadenas de texto
let c = 3.42
console.log(c)
console.log(c.toString())
console.log(typeof c)
console.log(typeof c.toString())

let a_s = a.toString()
console.log(typeof a_s)

// Redondeo de números decimales
let e = 3.3
let d = e * 3

console.log(d)
console.log(typeof d)

//toFixed() - Limitar el número en decimales
console.log(d.toFixed(2))
console.log(typeof d.toFixed(2))

//toPrecision(x)
console.log(e.toPrecision(3))
console.log(typeof e.toPrecision(3))
