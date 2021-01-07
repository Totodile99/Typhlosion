function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(100, 225);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);

    fill(0, 0, 250);
    stroke(0, 0, 244);
    circle(30, 25, 50)

    fill(0, 0, 250);
    stroke(0, 0, 244);
    circle(610, 25, 50)

    fill(0, 0, 250);
    stroke(0, 0, 244);
    circle(30, 455, 50)

    fill(0, 0, 250);
    stroke(0, 0, 244);
    circle(610, 455, 50)

    fill(0,  250, 0);
    stroke(0, 0, 244);
    square(5, 50, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(585, 50, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(5, 380, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(585, 380, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(585, 330, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(585, 280, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(585, 230, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(585, 180, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(585, 130, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(585, 100, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(5, 330, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(5, 280, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(5, 230, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(5, 180, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(5, 130, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(5, 100, 50)

    fill(0,  250, 0);
    stroke(0, 0, 244);
    square(55, 0, 50)

    fill(0,  250, 0);
    stroke(0, 0, 244);
    square(105, 0, 50)

    fill(0,  250, 0);
    stroke(0, 0, 244);
    square(155, 0, 50)

    fill(0,  250, 0);
    stroke(0, 0, 244);
    square(205, 0, 50)

    fill(0,  250, 0);
    stroke(0, 0, 244);
    square(255, 0, 50)

    fill(0,  250, 0);
    stroke(0, 0, 244);
    square(305, 0, 50)

    fill(0,  250, 0);
    stroke(0, 0, 244);
    square(355, 0, 50)

    fill(0,  250, 0);
    stroke(0, 0, 244);
    square(405, 0, 50)

    fill(0,  250, 0);
    stroke(0, 0, 244);
    square(455, 0, 50)

    fill(0,  250, 0);
    stroke(0, 0, 244);
    square(505, 0, 50)

    fill(0,  250, 0);
    stroke(0, 0, 244);
    square(535, 0, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(55, 430, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(105, 430, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(155, 430, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(205, 430, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(255, 430, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(305, 430, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(355, 430, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(405, 430, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(455, 430, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(505, 430, 50)

    fill(0, 250, 0);
    stroke(0, 0, 244);
    square(535, 430, 50)
}

function take_snapshot(){
    save('otters.png');
}