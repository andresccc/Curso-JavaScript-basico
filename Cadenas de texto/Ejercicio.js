// Crea un archivo JS que contenga las siguientes líneas

//  Una cadena de texto con tu Nombre
let nombre = "Andrés Felipe"
console.log(nombre)

//  Otra cadena de texto con tu Apellido
let apellido = "Gómez Castaño"
console.log(apellido)

//  Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`
console.log(estudiante)

//  Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = "Este texto va a convertirse en mayuscula en la consola"
console.log(estudianteMayus.toUpperCase())

//  Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = "Este texto va a CONVERTIRSE en MINUSCULA en la consola"
console.log(estudianteMinus.toLowerCase())

//  Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let estudianteNumLetras = estudiante.length
console.log(estudianteNumLetras)

//  Una variable que contenga la primera letra del Nombre
let estudiantePriLetra = estudiante.charAt(0)
console.log(estudiantePriLetra)

//  Otra variable que contenga la última letra del Apellido
let estudianteUltiLetra = estudiante.charAt(26)
console.log(estudianteUltiLetra)

//  Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudianteSinEspacio = estudiante.trim()
console.log(estudianteSinEspacio)

let estudianteSinEspacio2 = estudiante.split(" ").join("")
console.log(estudianteSinEspacio2)

//  Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(estudiante === "Andrés Felipe Gómez Castaño")
