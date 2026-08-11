// Crie um mini projeto que usa prompt() para perguntar a idade do usuário. 
// O programa deve primeiro validar se o input é um número válido e positivo. 
// Se for válido, deve usar um if/else para informar se o usuário tem 18 anos ou mais (Acesso Liberado) ou menos (Acesso Negado).
let idade = parseInt(prompt("Digite sua idade:"))

if (idade != "" && idade > 0){
    if(idade >= 18){
        console.log("Acesso liberado")
    }else{
        console.log("Acesso negado")
    }
}else{
    console.log("Erro")
}