var express = require('express'),
    app = express();
let fs = require('fs');
let http = require('http');

// carregar "banco de dados" (data/jogadores.json e data/jogosPorJogador.json)
// você pode colocar o conteúdo dos arquivos json no objeto "db" logo abaixo
// dica: 3-4 linhas de código (você deve usar o módulo de filesystem (fs))
var db = {
	players: JSON.parse(fs.readFileSync('server/data/jogadores.json')),
	gamesplayers: JSON.parse(fs.readFileSync('server/data/jogosPorJogador.json'))
};


// configurar qual templating engine usar. Sugestão: hbs (handlebars)
app.set('view engine', 'hbs');

// EXERCÍCIO 2
app.set('views', 'server/views');
app.get('/', function(request, response) {
  response.render('index.hbs', db.players);
});
// definir rota para página inicial --> renderizar a view index, usando os
// dados do banco de dados "data/jogadores.json" com a lista de jogadores
// dica: o handler desta função é bem simples - basta passar para o template
//       os dados do arquivo data/jogadores.json

// EXERCÍCIO 3
// definir rota para página de detalhes de um jogador --> renderizar a view
// jogador, usando os dados do banco de dados "data/jogadores.json" e
// "data/jogosPorJogador.json", assim como alguns campos calculados
// dica: o handler desta função pode chegar a ter umas 15 linhas de código


// EXERCÍCIO 1
app.use(express.static('/home/aluno/Área de Trabalho/cefet-web-geiser/client'));
// configurar para servir os arquivos estáticos da pasta "client"
// dica: 1 linha de código

let server = app.listen(3000, function(){
	let host = server.address().address;
  	let port = server.address().port;
});
// abrir servidor na porta 3000
// dica: 1-3 linhas de código