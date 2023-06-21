const nomes = ['ana Julia', "Caio vinicius", "BIA silva"];

//1
const nomesPadronizados = nomes.map((nome) => { // Rescrevendo para tudo maiusculo
    return nome.toUpperCase();
})

//2
const nomesPadronizados2 = nomes.map((nome) =>  nome.toUpperCase()); // mesmo resultado

console.log(nomesPadronizados);
console.log(nomesPadronizados2);