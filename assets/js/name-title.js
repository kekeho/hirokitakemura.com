let counter = 0;
let WIDTH = 0;
let HEIGHT = 0;
let scroll_text_counter = 0;

function setup(){
    WIDTH = window.innerWidth
    HEIGHT = window.innerHeight
    let canvas = createCanvas(WIDTH , HEIGHT)
    canvas.parent('name-title')
    background(0);
}


function draw(){
    counterUpdate();
    if(counter % 40 == 0){
        if(scroll_text_counter == 4){
            scroll_text_counter = 0;
        } else {
            scroll_text_counter++; 
        }
    }
    background(0);
    
    //title
    vhsString('Hiroki', widthEm(WIDTH, 10), widthEm(WIDTH, 7), heightEm(HEIGHT, 20), 10, 2, 3);
    vhsString('Takemura', widthEm(WIDTH, 10), widthEm(WIDTH, 7), heightEm(HEIGHT, 20)+widthEm(WIDTH, 10)+10, 10, 2, 0);
    vhsString('ヒロキ タケムラについて知る', widthEm(WIDTH, 3), widthEm(WIDTH, 7), heightEm(HEIGHT, 20)+widthEm(WIDTH, 20)+40, 10, 2, 0);
    
    //scroll text
    base_string = 'ヒロキタケムラ as a'
    scroll_text = ['Programmer', 'Photographer', 'Designer', 'ｲｯﾇ🐶', 'IT Student']
    fill(0, 0);
    stroke(255);
    
    if(getDevice() == 'sp'){
        textSize(24);
        text(scroll_text[scroll_text_counter], widthEm(WIDTH, 7), heightEm(HEIGHT, 80)+24+3);
    } else if(getDevice() == 'tab'){
        textSize(28);
        text(scroll_text[scroll_text_counter], widthEm(WIDTH, 7)+textWidth(base_string+' '), heightEm(HEIGHT, 80));
    } else {
        textSize(widthEm(WIDTH, 2));   
        text(scroll_text[scroll_text_counter], widthEm(WIDTH, 7)+textWidth(base_string+' '), heightEm(HEIGHT, 80));
    }
    text(base_string, widthEm(WIDTH, 7), heightEm(HEIGHT, 80));
    
    arrow(WIDTH/2, heightEm(HEIGHT, 90), widthEm(WIDTH, 5), heightEm(HEIGHT, 1));
}


function counterUpdate(){
    if(counter >= Number.MAX_SAFE_INTEGER){
        counter = 0
    } else {
        counter++;
    }
}