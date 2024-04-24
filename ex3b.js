/**
 * Contesta a todas las preguntas al lado
 */

function isPositive(num) {
  return num > 0;
}

/**
 * 1. ¿Que nombre tiene esta función? isPositive
 * 2. ¿Que deberíamos escribir para ejecutar esta función? let x = isPositive(-4)
 * 3. ¿Qué tipo de datos devuelve esta función? ¿Un string, un number o un boolean? boolean
 * 4. El código de abajo usa la función isPositve. ¿La usa adecuadamente? ¿Por qué? no. return deberia ensenar el primer caso.
 */

let x = 4;
if (!isPositive(x)) {
  console.log("El número es negativo");
} else {
  console.log("El número es positivo");
}
