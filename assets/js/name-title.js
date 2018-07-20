var counter = 0;
var WIDTH = 0
var HEIGHT = 0
function setup(){
    WIDTH = window.innerWidth
    HEIGHT = window.innerHeight
    var canvas = createCanvas(WIDTH , HEIGHT)
    canvas.parent('name-title')
    background(0);
}

function draw(){
    counterUpdate();
    background(0);
    vhsString('Hiroki', WidthEm(10), WidthEm(5), heightEm(20), 10, 2, 3);
    vhsString('Takemura', WidthEm(10), WidthEm(5), heightEm(20)+WidthEm(10)+10, 10, 2, 0);
    vhsString('マイ ポートフォリオ サイト', WidthEm(3), WidthEm(5), heightEm(20)+WidthEm(20)+40, 10, 2, 0);
}

function counterUpdate(){
    if(counter >= Number.MAX_SAFE_INTEGER){
        counter = 0
    } else {
        counter++;
    }
}

function WidthEm(parcent){
    return WIDTH * parcent/100
}

function heightEm(parcent){
    return HEIGHT * parcent/100
}