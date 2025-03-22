const setup = () => {
    let kies = document.getElementsByClassName("Keuze");
    kies[0].addEventListener("change", update);
    kies[0].addEventListener("input", update);
    kies[1].addEventListener("change", update);
    kies[1].addEventListener("input", update);
    kies[2].addEventListener("change", update);
    kies[2].addEventListener("input", update);

}
const update = () => {
    let plaats = document.getElementsByClassName("Plaats");
    let pick = document.getElementsByClassName("Keuze");
    let kies = kies[0].value;
    let kip = kies[1].value;
    let ei = kies[2].value;



   // plaats.style.background. = url
}
window.addEventListener("load", setup);