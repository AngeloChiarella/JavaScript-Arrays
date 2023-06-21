// Funcao callback - e a funcao passada no parametro de outra funcao

const nomes = ["Evaldo", "Mari", "Camis"];

//1
nomes.forEach(function(nome) {
    // console.log(nome);
})

//2
nomes.forEach((nome) => {
    // console.log(nome);
})

//3
function imprimeNome(nome) {
    console.log(nome);
}
nomes.forEach(imprimeNome); //deixar sem os (), para nao pegar o retorno da funcao