// Bifurcaciones if...else

if (true) {
  console.log("Es verdadero");
}

if (false) {
  console.log("Es verdadero");
} else {
  console.log("Es falso");
}

let saldo = 50;
let saldoAsacar = 35;

if (saldo > saldoAsacar) {
  console.log("Puedes sacarlo");
} else if (saldoAsacar > saldo) {
  console.log("No tienes tanto efectivo");
}

// Sentencias Switch

let nota = 2;

switch (nota) {
  case 5:
    console.log("5, buen trabajo!");
    break;

  case 4:
    console.log("4, bien hecho!");
    break;
  case 3:
    console.log("3, pasaste por los pelos");
    break;

  case 2:
    console.log("2, buen intento!");
    break;

  case 1:
    console.log("1, Estudia más para la proxima");
    break;

  default:
    console.log("La nota no es valida, revisar");
    break;
}
