status1 = "";
text_input_value = "";
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    classifier = ml5.objectDetector('cocssd', modelLoaded);
    document.getElementById('status').innerHTML = "Status = detecting objects";
    text_input_value =  document.getElementById('input1').value;
}

function modelLoaded(){
    console.log('model loaded');
    status1 = true;
}

function draw(){
    image(video, 0, 0, 480, 380);
}