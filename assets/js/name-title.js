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
    
    //title
    vhsString('Hiroki', widthEm(WIDTH, 10), widthEm(WIDTH, 5), heightEm(HEIGHT, 20), 10, 2, 3);
    vhsString('Takemura', widthEm(WIDTH, 10), widthEm(WIDTH, 5), heightEm(HEIGHT, 20)+widthEm(WIDTH, 10)+10, 10, 2, 0);
    vhsString('ヒロキ タケムラについて知る', widthEm(WIDTH, 3), widthEm(WIDTH, 5), heightEm(HEIGHT, 20)+widthEm(WIDTH, 20)+40, 10, 2, 0);
    
    arrow(WIDTH/2, heightEm(HEIGHT, 90), widthEm(WIDTH, 5), heightEm(HEIGHT, 1));
}

function counterUpdate(){
    if(counter >= Number.MAX_SAFE_INTEGER){
        counter = 0
    } else {
        counter++;
    }
}