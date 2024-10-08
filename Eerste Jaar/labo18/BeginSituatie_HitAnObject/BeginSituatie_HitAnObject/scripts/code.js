const setup = () => {
    const imgElement = document.querySelector('#playField img');

    imgElement.addEventListener('click', () => {
        alert('Alert');
        moveImage();
    });

    const updateSize = () => {
        let speelveld = document.getElementById("speelveld");
        speelveld.style.width = window.innerWidth + "px";
        speelveld.style.height = window.innerHeight + "px";
    };

    const moveImage = () => {
        let sprite = document.getElementsByClassName("sprite")[0];
        let speelveld = document.getElementById("speelveld");
        let maxLeft = speelveld.clientWidth - sprite.offsetWidth;
        let maxHeight = speelveld.clientHeight - sprite.offsetHeight;

        let left = Math.floor(Math.random() * maxLeft);
        let top = Math.floor(Math.random() * maxHeight);
        sprite.style.left = left + "px";
        sprite.style.top = top + "px";
    };

    let speelveld = document.getElementById("speelveld");
    speelveld.addEventListener("click", moveImage);

    window.addEventListener("load", () => {
        updateSize();
        setup();
    });
};

setup();
