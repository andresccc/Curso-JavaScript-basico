// Ejercicio numeros en JS
// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)
let alturaInt = 170

// - Una variable que contenga tu altura en metros (número de coma flotante)
let alturaFloat = 1.70

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoFloat = 73.5

// - Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaMax = alturaFloat.toFixed()
console.log(alturaMax)

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoMin = Math.floor(pesoFloat)
console.log(pesoMin)

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let valorMaxJS = Number.MAX_VALUE
console.log(valorMaxJS + Number(1))