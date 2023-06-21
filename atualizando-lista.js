const nomes = ["Joao", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// primeiro parametro marca o inicio da remocao e o segundo, numero de elementos
// terceiro parametro e inserido no lugar do que foi removido
nomes.splice(1, 2, "Rodrigo");

console.log(nomes);