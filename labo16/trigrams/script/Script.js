const setup = () => {
    let trigram = "onoorbaar";
    let i = 0;
    let a = trigram.length;
    while (a >= 3) {
        console.log(trigram.slice(i, i + 3));
        i++;
        a--;
    }
}

window.addEventListener("load", setup);

