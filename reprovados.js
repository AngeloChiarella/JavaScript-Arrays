// Mostrar os alunos reprovados com Filter

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, i) => { // o _ indica que nao utiliza o parametro
    return medias[i] < 7;
})

// const aprovados = alunos.filter((aluno, i) => {
//     return medias[i] >= 7;
// })

console.log(reprovados);
// console.log(aprovados);