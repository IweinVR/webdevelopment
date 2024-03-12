const setup = () => {

    let gemeenten = [];
    let stop = false;
    while (!stop) {
        let antwoord = prompt("Noem een aantal gemeentes op.");
        antwoord = antwoord.toLowerCase()
        if (antwoord === "stop") {
            stop = true;
        } else {
            gemeenten.push(antwoord);
        }
    }


    gemeenten.sort();

    let selectHTML = "<select>";
    let i = 0;
    while (i < gemeenten.length) {
        selectHTML += `<option>${gemeenten[i]}</option>`;
        i++;
    }
    selectHTML += "</select>";

    document.body.innerHTML += selectHTML;
};

window.addEventListener("load", setup);