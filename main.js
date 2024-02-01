Webcam.set({width:500,height:250,image_format:'png',png_quality:90});
camera=document.getElementById("camera");

Webcam.attach('#camera');


function take(){
    Webcam.snap(function(data_uri){
        document.getElementById("picture").innerHTML=' <img src="'+data_uri+'" id="captured_image" > ';
    })
}

console.log('version of ml5',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KSaw83kru/model.json',modelLoaded);

function modelLoaded(){
    console.log("model is loaded into this realm");
}