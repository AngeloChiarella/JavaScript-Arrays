const alunos = ["Joao", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
                            //  0       1
const listaDeAlunosEMedias = [alunos, medias];

console.log(`O Aluno da posicao 1 da lista de alunos é: ${
    // 0 e a lista de alunos e 1 e o nome do aluno
    listaDeAlunosEMedias[0][1]
}, 
A nota desse(a) aluno(a) é: ${
    listaDeAlunosEMedias[1][1]
}`);