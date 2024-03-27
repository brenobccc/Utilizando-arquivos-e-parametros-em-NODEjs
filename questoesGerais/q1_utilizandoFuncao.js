/*
Faça um servidor que some dois números definidos, 
e forneça como resposta "Acima ou igual a 100" apenas se 
o resultado da soma for maior que 100. Caso contrário, 
forneça como resposta "Abaixo de 100".
*/ 
http = require('http')

function questao1(A,B){
    SOMA = A + B
    if(SOMA >= 100){
        return "Acima ou igual a 100"
    }else{
        return "Abaixo de 100"
    }
}


http.createServer((requisicao,resposta)=>{
    A = 10
    B = 5
    respostaQ1 = questao1(A,B)
    resposta.end(respostaQ1)
}).listen(3000)

console.log("O servidor está rodando na porta 3000!!!")
