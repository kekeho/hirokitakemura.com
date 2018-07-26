function vhsString(string, px, x, y, noise_px, frame, noise_line){
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    noStroke();

    pink_x = blue_x = green_x = x
    pink_y = blue_y = green_y = y;

    if(!(counter % frame)){
        pink_x += random(-1*noise_px, noise_px)
        blue_x += random(-1*noise_px, noise_px)
        green_x += random(-1*noise_px, noise_px)
        pink_y += random(-1, 1)
        blue_y += random(-1, 1)
        green_y += random(-1, 1)
    }
    textSize(px);

    //pink
    fill(238, 85, 225);
    text(string, pink_x, pink_y);

    //blue
    fill(14, 225, 255);
    text(string, blue_x, blue_y);

    // white
    fill(255);
    text(string, x, y);


    for (let i = 0; i < noise_line; i++) {
        stroke(random(127, 255), random(127, 255), random(127, 255))
        line(w = random(0, WIDTH), h = random(0, HEIGHT), w+random(300), h)
    }

    textStyle(NORMAL);
    textAlign(LEFT, CENTER);
}

function arrow(x, y, w, h){
    //draw arrow center position
    push();
    translate(x - w/2, y + w/2);
    noFill();
    stroke(255)
    strokeWeight(3);
    beginShape();
    vertex(0, 0);
    vertex(w/2, h);
    vertex(w, 0)
    endShape();
    pop();
}


function widthEm(canvas_width, parcent){
    return canvas_width * parcent/100
}

function heightEm(canvas_height, parcent){
    return canvas_height * parcent/100
}

function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}

function getDevice(){
    let ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        return 'sp';
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        return 'tab';
    }else{
        return 'other';
    }
};