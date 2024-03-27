http = require('http')
questao1 = require('./funcoes.js')

http.createServer((requisicao,resposta)=>{
    A = 10
    B = 5
    respostaQ1 = questao1(A,B)
    resposta.end(respostaQ1)
}).listen(3000)

console.log("O servidor está rodando na porta 3000!!!")