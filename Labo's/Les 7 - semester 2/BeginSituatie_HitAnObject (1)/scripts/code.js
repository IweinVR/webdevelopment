let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000,
    score: 0,
    timeoutId: 0
};

const setup = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click",startGame);

    let img = document.getElementById("img");
    img.addEventListener("click", gekliktImg);
};



const startGame = () => {
    let knop =document.getElementById("btnStart")

    knop.style.display = "none";
    veranderImg();
    beweeg()

};

const beweeg = () => {
    veranderImg();

    let afbeelding = document.getElementById("img");
    let playField = document.getElementById("playField");
    let maxWidth = playField.clientWidth - global.IMAGE_SIZE;
    let maxHeight = playField.clientHeight - global.IMAGE_SIZE;

    let newWidth = Math.floor(Math.random() * maxWidth);
    let newHeight = Math.floor(Math.random() * maxHeight);
    afbeelding.style.left = newWidth + "px";
    afbeelding.style.top = newHeight + "px";



    clearTimeout(global.timeoutid);
    global.timeoutid = setTimeout(beweeg,global.MOVE_DELAY);

}
const veranderImg = () => {
    let afbeelding = document.getElementById("img");
    let randomImg = Math.floor(Math.random() * global.IMAGE_COUNT);
    afbeelding.src = global.IMAGE_PATH_PREFIX + randomImg + global.IMAGE_PATH_SUFFIX;

}

const gekliktImg = () => {
    let output = document.getElementById("output");
    let img = document.getElementById("img");

    let source = img.src;
    let naamImg = source.substring(source.lastIndexOf("/") + 1);

    if(naamImg === "0.png"){
        stop();
    }else{
        global.score++;
        output.textContent = global.score;
        veranderImg();
        beweeg();
    }
    
}
const stop = () => {
    clearTimeout(global.timeoutId);
    window.alert("Game over! jouw score is: " + global.score);
}
window.addEventListener("load", setup);

