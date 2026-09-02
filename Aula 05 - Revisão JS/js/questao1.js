// Crie um código JavaScript que: Declare a senhaCorreta como 1234 (Number) e a senhaDigitada 
// como 1235 (Number). Use uma estrutura condicional (if/else) para verificar se a 
// senhaDigitada é estritamente igual (===) à senhaCorreta. Se a condição for verdadeira, 
// exiba a mensagem: "Login efetuado com sucesso!". Se a condição for falsa, exiba a 
// mensagem: "Erro: Senha incorreta."

let senhaCorreta= 1234;
let senhaDigitada = 1235;

if(senhaCorreta === senhaDigitada){
    console.log("Login efetuado com sucesso!");
}else{
    console.log("Erro : Senha incorreta");
}