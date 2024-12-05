// Operadores com Javascript
const x = 5;
const y = 4;

// Operadores Aritiméticos
const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;
const restoDeDivisao = x % y;

// Operadores de atribuição
let z = 1;
z = z + 1;
z += 1;
z -= 1;

// Operadores de Incremento e Decremento
z++;
z--;
--z;
++z;

let c = 10;
c *= 10;
c /= 10;
c %= 10;

// Operadores de Comparação
const a = 1;
const b = 2;

// console.log(a > b); // false
// console.log(a < b); // true
// console.log(a >= b); // false
// console.log(a <= b); // true
// console.log(a == b); // false
// console.log(a != b); // true

// Operadores Lógicos AND, OR, NOT

// Operador AND
console.log(a < b && a != b); // true -> true;
console.log(a != b && a > b); // true && false -> false;
console.log(a == b && a < b); // false && true -> false;
console.log(a > b && a == b); // fasle && false -> false;

// Operador OR
console.log(a < b || a != b); // true -> true
console.log(a != b || a > b); // true || false -> true;
console.log(a == b || a < b); // false || true -> true;
console.log(a == b || a > b); // false || false -> false; false

// Operador Not
console.log(!(a == b)); // false -> true;
console.log(!(a < b)); // true -> false;
