// Use a estrutura if/else if/else para classificar a velocidade de um veículo, em km/h, em três categorias: 
// Velocidade > 100: "Acima do Limite" Velocidade >= 60 e <= 100: "Velocidade Permitida" Velocidade < 60: "Muito Lento"
let vel = 40
if(vel>100){
    console.log("Acima do limite de velocidade")
}else if(vel >= 60){
    console.log("Velocidade permitida")
}else{
    console.log("Muito lento")
}