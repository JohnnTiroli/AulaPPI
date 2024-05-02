import express from 'express';
const host = '0.0.0.0';
const porta = 3000;


const app = express();

function retornapaginaini(requisicao, resposta){
    const dados = new URLSearchParams(url.parse(requisicao.url).query);
    const numero = dados.get('numero');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="UTF-8"/>');
    resposta.write('<title>Pag INI</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Inicio</h1>');
    resposta.write("<p>Tabuada do numero = " + numero+"</p>");
    if(!isNaN(numero)){
        resposta.write("<ul>");
        for(let i=1; i<11;i++){
            resposta.write("<li>" + numero*i + "</li>");
        }
        resposta.write("</ul>");
    }
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
}    


app.get("/", retornapaginaini);

app.listen(porta, host, ( ) => {
    console.log("server esta executando em htpp://" + host + ":" + porta );
});
