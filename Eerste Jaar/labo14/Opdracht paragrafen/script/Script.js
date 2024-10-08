const setup = () => {
    let i;
    let paragrafen=document.getElementsByTagName("p");
    for (i=0;i<paragrafen.length;i++) {


        if (paragrafen[i].classList.contains("belangrijk")) {
            paragrafen[i].classList.add("opvallend");
        }
    }
}
window.addEventListener("load", setup);

