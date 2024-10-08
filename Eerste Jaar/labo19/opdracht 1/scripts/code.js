const setup = () => {
    let vandaag = new Date();
    const verjaardag = new Date(2005, 3, 30);
    const verschilInTijd = vandaag - verjaardag;
    const verschilInDagen = Math.floor(verschilInTijd / (1000 * 60 * 60 * 24));

    console.log(verschilInDagen);
}

window.addEventListener("load", setup);

