const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "André",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinicius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo"
];

//O 10 nao esta incluso no parametro, no caso virá do indice 0 ao 9.
const sala1 = alunos.slice(0, alunos.length / 2);

// Quando nao tem segundo parametro, vai ate o final
const sala2 = alunos.slice(/* 10 */alunos.length / 2); 

console.log(sala1);
console.log(sala2);
