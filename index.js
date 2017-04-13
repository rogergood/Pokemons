var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
var pokemons = require("./public/pokemons");
app.listen(1234);

app.get('/home', function (req, res) {
    res.redirect('/pokemon/all');
});

app.get('/pokemon/all', function (req, res) {
    res.render('pokemonAll', { "pokemons": pokemons });
});

app.get('/pokemon', function (req, res) {
    if (req.query.nationalNo1 != null && req.query.nationalNo2 != null) {
        var pokemonResult = {
            nationalNo1: req.query.nationalNo1,
            name1: pokemons[req.query.nationalNo1 - 1].name,
            img1: pokemons[req.query.nationalNo1 - 1].img,
            HP1: pokemons[req.query.nationalNo1 - 1].HP,
            nationalNo2: req.query.nationalNo2,
            name2: pokemons[req.query.nationalNo2 - 1].name,
            img2: pokemons[req.query.nationalNo2 - 1].img,
            HP2: pokemons[req.query.nationalNo2 - 1].HP
        };
        res.render('pokemonResult', { "pokemonResult": pokemonResult });
    } else {
        res.render('pokemonQuery');
    }
});