const txtStatus = document.getElementById("status");
const canvasW = 900;
const canvasH = 600;

var x = 0;
var y = 0;

var shape = "";

var SpeechRecognition = webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "O sistema está ouvindo, pode falar";
    recognition.start();
}

recognition.onresult = (e) => {
    document.getElementById("status").innerHTML = "";

    console.log(e);

    const resultado = e.results[0][0].transcript;
    console.log(resultado)

    randomCoords();
    txtStatus.innerHTML = "Desenhando um ";
    txtStatus.innerHTML += resultado;
    shape = resultado;
}

function randomCoords () {
    x = Math.floor(Math.random() * canvasW);
    y = Math.floor(Math.random() * canvasH);
}

function setup() {
    createCanvas(canvasW, canvasH);
}

function draw() {
    switch (shape) {
        case "círculo":
            const raio = Math.floor(Math.random() * (100 - 10)) + 10;
            circle(x, y, raio);
            break;
        case "retângulo":
            const w = Math.floor(Math.random() * (50 - 10)) + 10;
            const h = Math.floor(Math.random() * (50 - 10)) + 10;;
            rect(x, y, w, h);
            break;
        }
        shape = ""
}