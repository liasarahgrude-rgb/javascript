// Crie um mini-projeto que simule um sistema de atendimento. 
// O laço while deve representar o sistema em funcionamento, começando a atender do cliente 1.
// O sistema deve parar, utilizando o comando break, quando o cliente de número 5 for atendido, 
// pois ele é o último da fila e precisa de um atendimento especial (interrompe a rotina). 
// O projeto deve incluir: Um laço while infinito (a condição inicial é sempre true). 
// Uma variável cliente que começa em 1. 
// O comando break dentro de uma condição if para parar o laço no cliente 5.
let cliente = 1;
let sistema = true;
while (sistema){
    console.log(`Atendimento ao cliente ${cliente}`);
    if (cliente == 5){
        console.log("Último da fila, atendimento especial!");
        break;
    }
    cliente++;
}
