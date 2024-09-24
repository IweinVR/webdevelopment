let global = [
    {
        question: "Wie is de hoofdpersoon in Final Fantasy VII Remake?",
        answers: ["Cloud Strife", "Sephiroth", "Tifa Lockhart"],
        correct: "Cloud Strife",
        selected: ""
    },
    {
        question: "Welke wereld wordt verkend in Final Fantasy XV?",
        answers: ["Gaia", "Eos", "Spira", "Cocoon"],
        correct: "Eos",
        selected: ""
    },
    {
        question: "Wie is de antagonist in Final Fantasy VIII?",
        answers: ["Ultimecia", "Kefka", "Seymour", "Kuja", "Edea"],
        correct: "Ultimecia",
        selected: ""
    },
    {
        question: "Heeft hoofdrolspeler in Final Fantasy IX een staart?",
        answers: ["Ja", "Nee"],
        correct: "Ja",
        selected: ""
    },
    {
        question: "Hoe heet de stad waarin het verhaal van Final Fantasy VII Remake begint?",
        answers: ["Midgar", "Junon", "Nibelheim", "Wutai"],
        correct: "Midgar",
        selected: ""
    },
    {
        question: "Welke summon is prominent aanwezig in Final Fantasy XV?",
        answers: ["Ifrit", "Shiva", "Ramuh", "Titan"],
        correct: "Ifrit",
        selected: ""
    },
    {
        question: "Wat is de naam van het luchtschip in Final Fantasy VIII?",
        answers: ["Ragnarok", "Highwind", "Invincible", "Falcon"],
        correct: "Ragnarok",
        selected: ""
    },
    {
        question: "Welke rol vervult Cid Highwind in Final Fantasy VII?",
        answers: ["Luchtschipkapitein", "Wapensmid", "Koning"],
        correct: "Luchtschipkapitein",
        selected: ""
    },
    {
        question: "Wat is het kenmerkende aan Cactuar-wezens in de Final Fantasy-serie?",
        answers: ["Ze zijn altijd groen", "Ze gebruiken de aanval 1000 Needles", "Ze zijn planten"],
        correct: "Ze gebruiken de aanval 1000 Needles",
        selected: ""
    },
    {
        question: "Welk Final Fantasy-wezen zorgt, met zijn aanval genaamd Bad Breath, voor verschillende statuseffecten?",
        answers: ["Malboro", "Chocobo", "Behemoth", "Tonberry"],
        correct: "Malboro",
        selected: ""
    }
]

const setup = () => {

    let startQuizButton = document.querySelector('#start');
    startQuizButton.addEventListener('click', startQuiz);
    let resetQuiz = document.querySelector('#restart');
   resetQuiz.addEventListener('click', resetSpel);
    let indienenquiz = document.querySelector('#submit');
    indienenquiz.addEventListener('click', indienen);
    let opslaanQuiz = document.querySelector('#btn btn-success');
    opslaanQuiz.addEventListener('click', opslaanQuiz);


    window.addEventListener("load", setup);

    const startQuiz = () => {
        let start = document.getElementById("start").value;
        document.getElementById("start").value = "container d-none";
    }

    const kiesRandomVraag = () => {
        let array = global.question
        array.sort(() => Math.random() - 0.5);
    }

    const resetSpel = () => {
        if (global.question === "") {
            kiesRandomVraag();
        } else {
            global.question = "";
            kiesRandomVraag();
        }
    }

    const Opslaan = () => {
        let settings;
        let settingsJSON = localStorage.getItem("antwoorden");


            if (settingsJSON == undefined) {
                settings = {
                    antwoorden : 0
                };
            } else {
                settings = JSON.parse(settingsJSON);
            }


            document.getElementById("antwoorden").value = settings.Juisteantwoorden;

        localStorage.setItem("antwoorden", settingsJSON);
        };
    }

    const juisteGok = () => {
        let section = document.getElementsByTagName("card");
        let opgegevenWoord = document.getElementById("gok").value;
     }

     const indienen = () => {

     }

     const opslaan = () => {

}