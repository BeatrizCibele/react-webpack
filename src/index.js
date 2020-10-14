'use strict'
import React from 'react';
import { render } from 'react-dom';
import App from "./app";
import {AppContainer} from 'react-hot-loader';

//var Title = require('./app');

const renderApp = (NextApp) => {
    render(
        <AppContainer>
            <NextApp />
        </AppContainer>,
        document.querySelector('[data-js=app]')
    );
}
renderApp(App);
//Se o module.hot existir ele vai acessar a entrada da nossa aplicação
//Sempre que algum arquivo de app for alterado, vamos chamar o app com require
// e colocá-lo dentro de const NextApp, pois NextApp será a próxima atualizaçao do nosso app;
//Quando tivermos esse NextApp significa q aconteceu uma atualização q o hot loader pode intevir e ao invés de 
//atualizar nossa tela toda ele atualiza soemente o que for necessário;
//depois que atualizar será necessário rendereizar o novo app
//Quando vc exporta qualquer component usando default é como se usasse = exports.default = App, então
//Quando for importar usando o módulo do command JS pra um modo do ES6 precisamos adicionar um default no final, caso contrário ele importa o default no lugar do app
if(module.hot){
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default
        renderApp(NextApp);
    })
}

