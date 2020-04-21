var nome = "Help me";
console.log(nome);
var episode = 4;
console.log("this is episode " + 4);
episode = episode + 1;
console.log("next episode is " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("my favorite droid is " + favoriteDroid);
var funcao;
funcao = function (name) { return console.log("quem foi o favorito ? " + name); };
funcao("R2");
function inclusao(speed, inc) {
    if (inc === void 0) { inc = 1; }
    var i = inc || 1;
    return speed + i;
}
console.log(inclusao(5));
