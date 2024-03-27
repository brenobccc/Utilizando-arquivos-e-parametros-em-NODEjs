/*Faça um servidor de uma calculadora, que tenha as seguintes rotas:
Rota 1 = “/soma”
Rota 2 = “/subtracao”
Rota 3 = “/divisao”
Rota 4 = “/multiplicacao”
Rota 5 = “/elevar_ao_quadrado”*/

http = require('http')

http.createServer((requisicao, resposta)=>{
  
    variavel_url = requisicao.url 
    A = 5
    B = 4

    if(variavel_url == '/soma'){
        resposta.end("O valor da soma e: " + (A+B))
    }else if(variavel_url == '/subtracao'){
        resposta.end("O valor da subtracao e: " + (A-B))
    }else if(variavel_url == '/divisao'){
        resposta.end("O valor da divisao e: " + (A/B))
    }else if(variavel_url == '/multiplicacao'){
        resposta.end("O valor da multiplicacao e: " + (A*B))
    }else if(variavel_url == '/elevar_quadrado'){
        resposta.end("O valor do valor elevado ao quadrado e:"+ (A**2))
    }else{
        resposta.end("Rota indefinida!!")
    }
}).listen(3000)

console.log("O servidor está rodando no localhost:3000/")
