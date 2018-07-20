function vhsString(string, px, x, y, noise_px, frame, noise_line){
    textStyle(BOLD);
    textAlign(LEFT, TOP);

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