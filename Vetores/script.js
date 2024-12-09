// Vetores
const vetor = ["A", 10, "oi", 1.5, true];

const numeros = [1, 2, 3, 4, 5];
let frutas = ["maçã", "laranja", "pera", "uva"];

// Obter um valor
console.log(frutas[0]);
console.log(frutas[1]);

// Adicionar um elemento
frutas[4] = "melancia";
console.log(frutas);

// Alterar o valor de um elemento
frutas[1] = "limão";
console.log(frutas);

// Adiciona um elemento no final do vetor
frutas.push("morango");
console.log(frutas);

// Adiciona um elemento no inicio do vetor
frutas.unshift("manga");
console.log(frutas);

// Remove o último elemento do vetor, e retorna ele
const ultimoElemento = frutas.pop();
console.log(ultimoElemento);

// Remove o primeito elemento do vetor, e retorna ele
const primeiroElemento = frutas.shift();
console.log(primeiroElemento);

// Descobrir o índice de um determinado valor
console.log(frutas.indexOf("limão"));

// Pegando um valor específico, adicioando novos elementos e removendo antigos
const months = ["Jan", "March", "April", "June"]
// months.splice(1, 0, 'Feb');
// months.splice(4, 0, "May");
console.log(months.splice(-1));


// Verificando se uma variável é um vetor
console.log(Array.isArray(frutas));
