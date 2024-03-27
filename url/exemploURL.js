http = require('http')
getParamURL = require('./funcoes')

/*Receba dois valores e some eles, 
retornando a soma dos dois*/
/*
    1. Receber os parametros da URL
    2. Processar e retornar o resultado esperado
*/

http.createServer((req,res)=>{
    caminho_url = req.url
    valoresRetorno = getParamURL(caminho_url)

    A = parseInt(valoresRetorno[0])
    B = parseInt(valoresRetorno[1])
    SOMA = A + B
    res.end("Soma dos valores: " + SOMA)
}).listen(3000)

console.log('O servidor está rodando')