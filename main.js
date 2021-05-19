noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,ModelLoaded);
    posenet.on('pose',gotPoses);
}
x=Math.floor(Math.random()*2);
y=Math.floor(Math.random()*5);
function draw(){
    if(x==0){
    background('#696969');
    document.getElementById("h").innerHTML="Welcome to fontinator!";
    }
    if(x==1){
    background('#FFFFFF');
    document.getElementById("h").innerHTML="Welcome to font mainpulator!";
    }
    fill('#FF0000');
    stroke('#FF0000');
    textSize(difference);
    text("Welcome!",noseX,noseY);
    document.getElementById("textside").innerHTML="Width and Height of square is "+difference+"px";
}
function ModelLoaded(){
    console.log("Posenet is working!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X= "+noseX+" and Nose Y= "+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("Left wrist= "+leftWristX+" Right wrist= "+rightWristX+" And difference= "+difference);
    }
}