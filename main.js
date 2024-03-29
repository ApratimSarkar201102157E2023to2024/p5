function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    fill(0,128,0);
    circle(50,50,70);
    fill('#FF0000');
    rect(90,35,450,30);
    fill(0,128,0);
    circle(50,430,70);
    fill('#FF0000');
    rect(38,88,30,300);
    rect(570,88,30,300);
    fill(0,128,0);
    circle(580,50,70);
    fill('#FF0000');
    rect(90,420,450,30);
    fill(0,128,0);
    circle(580,430,70);

}

function take_snapshot() {
    save('student_nane.png');
}

function filter_tint() 
{
    tint_color = document.getElementById("color_name").value;
}