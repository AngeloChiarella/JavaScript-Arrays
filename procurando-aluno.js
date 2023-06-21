const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) { //Verificando se o aluno esta na lista unificada
        
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];
        const [alunos, medias] = listaDeAlunosEMedias; //mesma coisa que acima


        const indice = alunos.indexOf(aluno); // Pesquisa o indice do aluno
        
        const mediaDoAluno = medias[indice];// Pesquisando a media do aluno usando o indice
    
        console.log(`${aluno} tem a média ${mediaDoAluno}`)
    } else {
        console.log("Aluno não encontrado!")
    }
}

exibeNomeENota("Juliana");