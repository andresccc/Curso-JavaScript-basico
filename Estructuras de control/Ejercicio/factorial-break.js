//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let factorial = 1;
var i = 1;

while (true) {
  if (i > 10) {
    break;
  }
  factorial *= i;
  i++;
}
console.log(factorial);
