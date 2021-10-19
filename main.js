prediction_1 = "";

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

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-l_EWMyOV/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded");
}

function speak(){
    synth = window.speechSynthesis;
    speakdata1 = "The First Prediction is "+prediction_1;
    let utterthis = new SpeechSynthesisUtterance(speakdata1);
    synth.speak(utterthis);
}

function check(){
    img = document.getElementById("res_img");
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak();

        if (results[0].label == "Amazing") {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if (results[0].label == "Best") {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if (results[0].label == "Victory") {
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }

    }
}