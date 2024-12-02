## Variáveis, Constantes e Tipos de Dados

Variáveis e  Constantes servem para guardar um tipo de dado para que ele possa ser reutilizado;

É um espaço na memória onde nós podemos armazenar valores;

Já os tipos de dados são os valores que são armazenados dentro dessas variáveis;

**string**: para a representação de caracteres;

**number**: que representa números inteiros e decimais;

**boolean**: que são os valores true e false, verdadeiro ou falso;

**null**: representa um valor nulo;

**undefined**: um valor que não foi definido;

Esses são os tipos primitivos;

## Const:

Uma vez que criamos constantes no nosso progama elas vão ter esse valor para sempre pois uma constante não pode ter o seu valor alterado, ela possui escopo de bloco e não pode ser alterada;

## Let:

Quando vamos declarar uma variável que vai ter o seu valor alterado nós definimos ela com let, ela possui escopo de  bloco e pode ser alterada;

## Var:

A declaração de variáveis com var, não é recomendada pois ela possui um escopo global, e pode ser acessada em qualquer parte do nosso código, ela possui escopo global e pode ser alterada;

## Regras para Indentificadores

- Indentificadores devem começar com uma letra, um sinal de cifrão ($), ou um sinal de sublinhado (_);
- Indentificadores devem ser compostos de letras, números, sinal de cifrão ($), ou sinal de sublinhado (_);
- Caracteres unicode são permitidos;
- Indentificadores não podem ser palavras reservadas, ou seja comandos do Javascript.

## Null vs Undefined

**undefined**: Quando nós criamos uma variável e não definimos um valor para ela ela recebe undefined;

**null**: ele é usado para definir um valor como nulo;

A diferença de null para undefined é que o valor nulo ele é definido pelo progamador já o valor undefined é quando não existe um valor por exemplo o usuário não preencheu um campo e esse valor ficou undefined;