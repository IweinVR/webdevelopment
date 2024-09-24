
let global = {
    lijst: ["hotel", "stoel", "tafel", "katje", "vives"],
    teRadenWoord: "",
    idTimeout:""
}
const setup = () => {

    let goButton = document.querySelector('#go');
    goButton.addEventListener('click', voerAllesUit);
    let nieuwSpelButton = document.querySelector('#nieuw');
    nieuwSpelButton.addEventListener('click', resetSpel);


}
window.addEventListener("load", setup);
const voerAllesUit = () => {
    controleerOpegegevenWoord();
}
const clickLetter = (event) =>{
    clearTimeout(global.idTimeout);
    let pElement = document.getElementsByClassName("help")
    if (event.target.className.localeCompare("juist") === 0) {
        pElement[0].textContent = "De letter " + event.target.value + " staat op de juiste plaats.";
        pElement[0].classList.remove("hidden")

    } else if (event.target.className.localeCompare("bevat") === 0) {
        pElement[0].textContent = "De letter " + event.target.value + " komt voor, maar staat op de verkeerde plaats.";
        pElement[0].classList.remove("hidden")
    } else {
        pElement[0].textContent = "De letter " + event.target.value + " komt niet voor";
        pElement[0].classList.remove("hidden")
    }
    global.idTimeout= setTimeout(clickLetterTekst, 2000);
}
const clickLetterTekst =()=>{

    let pElement = document.getElementsByClassName("help")
    pElement[0].textContent = ""
    pElement[0].classList.add("hidden")

}
const resetSpel = () => {
    if (global.teRadenWoord === "") {
        kiesRandomWoord();
        console.log(global.teRadenWoord)

    } else {
        global.teRadenWoord = "";
        kiesRandomWoord();
        console.log(global.teRadenWoord)
    }

}

const kiesRandomWoord = () => {
    let array = global.lijst
    array.sort(() => Math.random() - 0.5);
    global.teRadenWoord = array[0]
}
const controleerWoordJuistGeraden = ()=>{
    let opgegevenWoord = document.getElementById("gok").value;
    let aantalJuisteLetters =0;
    for (let i = 0; i < global.teRadenWoord.length; i++) {
        if (global.teRadenWoord[i].localeCompare(opgegevenWoord[i]) === 0) {
            aantalJuisteLetters++;
        }
    }
    if (aantalJuisteLetters===5){

    }
}

const controleerOpegegevenWoord = () => {


    let section = document.getElementsByTagName("body");
    let opgegevenWoord = document.getElementById("gok").value;
    if (opgegevenWoord.length === 5) {

        let gokDiv = document.getElementById("gokken");
        let guessDiv=document.createElement("div");
        for (let i = 0; i < global.teRadenWoord.length; i++) {
            if (global.teRadenWoord[i].localeCompare(opgegevenWoord[i]) === 0) {

                let divLetter = document.createElement("div");
                divLetter.classList.add("juist");
                divLetter.addEventListener("click", clickLetter);

                divLetter.innerText = opgegevenWoord[i];
                guessDiv.appendChild(divLetter)
                gokDiv.append(guessDiv);
            } else if (global.teRadenWoord.indexOf(opgegevenWoord[i])>-1) {


                let divLetter = document.createElement("div");
                divLetter.classList.add("bevat");
                divLetter.addEventListener("click", clickLetter);
                divLetter.innerText = opgegevenWoord[i];
                guessDiv.appendChild(divLetter)
                gokDiv.append(guessDiv);

            } else {

                let divLetter = document.createElement("div");
                divLetter.classList.add("fout");
                divLetter.addEventListener("click", clickLetter);
                divLetter.innerText = opgegevenWoord[i];
                guessDiv.appendChild(divLetter)
                gokDiv.append(guessDiv);

            }
        }
    } else {
        window.alert("U hebt een woord opgegegeven die niet 5 letters zijn")
    }

}
