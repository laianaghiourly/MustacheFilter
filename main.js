nosex= 0;
nosey= 0;
function preload(){
mustache= loadImage("https://i.postimg.cc/FFfzK0TS/mustache2-removebg-preview.png");
}
function setup(){
canvas= createCanvas(400, 400);
canvas.center();
video= createCapture(VIDEO);
video.size(400, 400);
video.hide();
poseNet= ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotposes);
}
function draw(){
image(video, 0, 0, 400, 400);
image(mustache, nosex-60, nosey, 120, 60);
}
function take_snapshot(){
save("Image.png");
}
function modelloaded(){
console.log("PoseNet Is Initialized");
}
function gotposes(results){
console.log(results);
nosex= results[0].pose.nose.x;
nosey= results[0].pose.nose.y;
console.log("nosex= "+ nosex);
console.log("nosey= "+ nosey);
}