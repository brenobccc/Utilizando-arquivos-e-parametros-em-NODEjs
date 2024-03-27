/*
Faça um servidor que some dois números definidos, 
e forneça como resposta "Acima ou igual a 100" apenas se 
o resultado da soma for maior que 100. Caso contrário, 
forneça como resposta "Abaixo de 100".
*/ 
http = require('http')

http.createServer((requisicao,resposta)=>{
    A = 50
    B = 100
    SOMA = A + B
    if(SOMA >= 100){
        resposta.end("Acima ou igual a 100")
    }else{
        resposta.end("Abaixo de 100")
    }
}).listen(3000)

console.log("O servidor está rodando na porta 3000!!!")
