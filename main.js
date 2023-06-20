const canvas = new fabric.Canvas('myCanvas');

var blockImageWidth = 30;
var blockImageHeight = 30;

var playerX = 10;
var playerY = 10;

const playerWidth = 150;
const playerHeight = 140;

var playerObject = "";
var blockImageObject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(playerWidth);
        playerObject.scaleToHeight(playerHeight);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img) {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObject)
    });
}

window.addEventListener("keydown", keyDown);

function keyDown(e) {
    const keyPressed = e.keyCode;
    const passo = 10;
    if (e.shiftKey) {
        
        if (keyPressed == 189 && (blockImageHeight > 10)) {
            console.log("Diminui o tamanho do bloco");
            //diminuir
        }

        if (keyPressed == 187) {
            console.log("Aumenta o tamanho do bloco");
           //aumentar
        }
    }

    if (keyPressed == ) { //B
        console.log(e.key);

        
    } else if (keyPressed == ) { //Y
        console.log(e.key);
        
    } else if (keyPressed == ) { //D
        console.log(e.key);

        
    } else if (keyPressed == ) { //K
        console.log(e.key);

        newImage("darkGrass.png");
    } else if (keyPressed == ) { //L
        console.log(e.key);
        

    } else if (keyPressed == ) { //G
        console.log(e.key);
        

    } else if (keyPressed ==) { //N
        console.log(e.key);
     


    } else if (keyPressed == ) { //S
        console.log(e.key);
       

    } else if (keyPressed == ) { //W
        console.log(e.key);
        

    }
}

function changeSize(size) {
    //mudar tamanho do bloco
}
