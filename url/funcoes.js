url = require('url');
querystring = require('querystring');

function getParamURL(query){
    urlObj = url.parse(query);
    queryParams = querystring.parse(urlObj.query);

    const parametro1 = queryParams.A;
    const parametro2 = queryParams.B;
    parametros = [parametro1, parametro2]
    
    return parametros
}

module.exports = getParamURL