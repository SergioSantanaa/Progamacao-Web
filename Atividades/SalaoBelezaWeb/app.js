var express = require('express');
var ehb = require('express-handlebars');
var app = express();

var disponibilidade = false;

var profissionais = [
{"nome": "Paulo", "categoria": "Cabelereiro", "disponibilidade": true},
    {"nome": "Ana", "categoria": "Manicure", "disponibilidade": true},
    {"nome": "Roberto", "categoria": "Design de Sobrancelha", "disponibilidade": false}
]

app.use(express.static('public'));
app.engine('handlebars', ehb({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res){
    res.render('index',{disponibilidade});
})

app.get('/agendamento', function (req, res){
    res.('agendamento', {profissionais});
})

app.listen(8080);



