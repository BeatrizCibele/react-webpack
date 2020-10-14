"use strict";

const path = require("path");
const validate = require("webpack-validator");

//usamos um módulo do webpack pois ele tem um plugin necessário pra usar
const webpack = require("webpack");

//exportar o objeto que o webpack precisa pra fazer a leitura do nosso arquivo
// e gerar o bundler
//dirname é variável global do node
//src e index é o caminho do nosso arquivo principal
//path coloca a barra certa conforme o sistema operacional. O join vai juntar tudo numa string pra fazer o caminho
//output é o local onde vai salvar o arquivo configurado
//publicPath é o local onde o webpack server assiste nosso arquivo de desenvolvimento
//quando executamos o webpack server ele não gera um arquivo físico, mas um virtual na memória
// e o publicPath diz onde esse arquivo virtual vai se servir
module.exports = {
  devtool: "source-map",
  //webpack-dev-server precisa ser executado somente no client, e trocar a porta que ele executa por padrão(8080) para a 3000
  //colocamos o webpack pois a partir dele conseguiremos iniciar o dev server
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    path.join(__dirname, "src", "index"),
  ],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundler.js",
    publicPath: "/static/",
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
  //cada objeto de loaders vai dizer o webpack oq ele tem q fazer com cada arquivo
  //precisamos primeiro de uma propriedade test que recebe um regex que vai dizer q todo arquivo que termina em js vai:
  //procurar arquivos, a príncípio ignorando node_module na propriedade exlclude, pois o babel não usará nada de node_modules, td que precisamos está em src
  // e por questões de performance vamos incluir o src, que é de onde serão lidos nossos arquivos
  // teremos a propriedade loader que dirá qual loader vamos usar, o loader entra em ação para compilar todos os arquivos que terminam com .js
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exlude: /node_module/,
        include: /src/,
        loader: "standard",
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exlude: /node_module/,
        include: /src/,
        loader: "babel",
      },
    ],
  },
};
