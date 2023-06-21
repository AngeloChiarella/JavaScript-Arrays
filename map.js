const notas = [10, 9.5, 8, 7, 6];

//Atribuindo valor para os elementos
const notasAtualizadas = notas.map((nota) => { //.map nao altera a lista original
    return nota + 1 >= 10 ? 10 : nota + 1; // if ternario
})

console.log(notasAtualizadas);