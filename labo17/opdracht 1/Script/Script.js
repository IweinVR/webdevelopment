const setup = () => {

    const paragraphs = document.querySelectorAll('p');


    paragraphs.forEach(function(paragraph) {

        paragraph.textContent = "Good Job!";
    });
}

window.addEventListener("load", setup);
