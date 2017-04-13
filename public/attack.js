function Pokemon(HP, nationalNo) {
    this.HP = HP;
    this.nationalNo = nationalNo;
    this.attack = function (other) {
        other.HP -= 20;
    };
} 
var No1 = new Pokemon(
    1200,
    "No1"
);
var Hitokage = new Pokemon(
    2000,
    "Hitokage"
);
$(function () {
    function Render() {
        $("#fushigidane-name").text(Fushigidane.japanese);
        $("#fushigidane-hp").text(Fushigidane.hp);
        $("#hitokage-name").text(Hitokage.japanese);
        $("#hitokage-hp").text(Hitokage.hp);
    }
    Render(); 

    $("#ball1").click(function () {
        Fushigidane.attack(Hitokage);
        Render(); 
    });

    $("#ball2").click(function () {
        Hitokage.attack(Fushigidane);
        Render();
    });
});