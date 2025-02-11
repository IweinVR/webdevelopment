const setup = () => {
    const familieLeden = ['Piet', 'Jan', 'Jozef', 'Marie', 'Koen'];
    console.log(familieLeden.length);
    console.log(familieLeden[0]);
    console.log(familieLeden[2]);
    console.log(familieLeden[4]);

    function voegNaamToe(){
        let resultaat = prompt('Geef je naam in.');
        familieLeden.push(resultaat);
    }

    voegNaamToe();
    console.log(familieLeden);




}

window.addEventListener("load", setup);