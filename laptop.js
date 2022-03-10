Status = "";
laptop_image = "";

function preload(){
    laptop_image = loadImage("Laptop.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(450,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(laptop_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(laptop_image,0,0,640,350);
}