// Strings
const nome = "Davi";
const sobrenome = "Fernandes";
const idade = 24;

// Concatenação
console.log(
  "Menu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos."
);

// Template de Strings
console.log(`Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`);

// Propiedades e Métodos de String
const s = "Hello World";
console.log(s.length); // 11
console.log(s.toUpperCase()); // HELLO WORLD
console.log(s.toLowerCase()); // hello world
console.log(s.substring(0, 5)); // Hello
console.log(s.split(" ")) // ["Hello, World"]

