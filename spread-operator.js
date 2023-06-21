const notas = [7, 7, 8, 9];

// JS entende que são os mesmos arrays, com isso 'notas' tambem recebe novo parametro
 
// const novasNotas = notas;
// notas.push(5);

// SOLUÇÂO

const novasNotas = [...notas, 10]; //copia o valor do array - [7, 7, 8, 9]
// novasNotas.push(10);

console.log(`As notas originais sao: ${notas}`);
console.log(`As novas notas sao: ${novasNotas}`);
