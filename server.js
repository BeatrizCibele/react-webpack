'use strict'

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

//Feito isso criamos o servidor:

//utilizamos o webpack e passamos por parametro o arquivo de configuração
//o segundo parametro, é um objeto com as configurações que vamos usar para que o webpack-dev-server funcione corretamente
// o terceriro parametro é o hot true, para fazer o hot loader de forma correta
//stats server para que a saída do webpack continue sendo colorida 
// na callback será mostrada o localhost se estiver tudo certo quando programa assistir o server
new WebpackDevServer(webpack(config),{
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true } 
}).listen(3000, (err)=>{
    if(err){
        return console.log(err)
    }
    console.log('http://localhost:3000');
}); 
