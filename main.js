var dancin="";
var chacha="";
var kong="";
var daftp="";


function preload(){
    dancin = loadSound("dancin.mp3");
    kong = loadSound("donk.mp3");
    chacha = loadSound("fredd.mp3");
    daftp = loadSound("instant.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
    
    if(puntDerMun >0.2)
    {    
        fill("#3A86FF");  
        stroke("#3A86FF"); 
        circle(derMunX, derMunY, 20);
        if(derMunY >0 && derMunY <=100){
            document.getElementById("velocidad").innerHTML = "Velocidad = 0.5x";
            kong.rate(0.5);
            chacha.rate(0.5);
            dancin.rate(0.5);
            daftp.rate(0.5);
        }
        else if(derMunY >100 && derMunY <=200){
            document.getElementById("velocidad").innerHTML = "Velocidad = 1x";
            dancin.rate(1);
            chacha.rate(1);
            kong.rate(1);
            daftp.rate(1);
        }
        else if(derMunY >200 && derMunY <=300){
            document.getElementById("velocidad").innerHTML = "Velocidad = 1.5x";
            dancin.rate(1.5);
            chacha.rate(1.5);
            kong.rate(1.5);
            daftp.rate(1.5);
        }
        else if(derMunY >300 && derMunY <=400){
            document.getElementById("velocidad").innerHTML = "Velocidad = 2x";
            dancin.rate(2);
            chacha.rate(2);
            kong.rate(2);
            daftp.rate(2);
        }
        else if(derMunY >400 && derMunY <=500){
            document.getElementById("velocidad").innerHTML = "Velocidad = 2.5x";
            dancin.rate(2.5);
            chacha.rate(2.5);
            kong.rate(2.5);
            daftp.rate(2.5);
        }
    }

    if(puntIzqMun > 0.2)
    {
        fill("#FB5607");  
        stroke("#FB5607"); 
        circle(izqMunX, izqMunY, 20);
        numIzqMunY=Number(izqMunY);
        sin_decimales = floor(numIzqMunY);
        volumen = 70;
        document.getElementById("volumen").innerHTML= "Volumen = " + volumen;
        imdragons.setVolume(volumen);
        maroon5.setVolume(volumen);
        brumars.setVolume(volumen);
        daftp.setVolume(volumen);
    }
}


function play(){
    var cancion = document.getElementById("cancion").value;
    if(cancion == "dancin"){
       kong.stop();
        chacha.stop();
        daftp.stop();
        dancin.setVolume(1);
        dancin.rate(1);
        dancin.play();
    }
    if(cancion == "chacha"){
        kong.stop();
        dancin.stop();
        daftp.stop();
        chacha.setVolume(1);
        chacha.rate(1);
        chacha.play();
    }
    if(cancion == "kong"){
        chacha.stop();
        dancin.stop();
        daftp.stop();
        kong.setVolume(1);
        kong.rate(1);
        kong.play();
    }
    if(cancion == "daftp"){
        chacha.stop();
        kong.stop();
        dancin.stop();
        daftp.setVolume(1);
        daftp.rate(1);
        daftp.play();
    }
}
function pause(){
    chacha.pause();
    daftp.pause();
    kong.pause();
    dancin.pause();
}
function stop(){
    chacha.stop();
    daftp.stop();
    kong.stop();
    dancin.stop();
}
