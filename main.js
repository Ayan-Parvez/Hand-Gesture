Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_format: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_Snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="res_img" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version: ',ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6CSUvihHn/model.json", modelLoaded);