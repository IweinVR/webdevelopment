const setup = () => {

    let student1 = {};
    student1.voornaam = "Jan";
    student1.geboorteDatum = new Date("1993-12-31");
    student1.adres = {};
    student1.adres.gemeente = "8500";

    let tekst = JSON.stringify(student1);
    console.log(tekst);




    const jsonString = '{"voornaam":"Jan","geboorteDatum":"1993-12-30T23:00:00.000Z","adres":{"gemeente":"8500"}}';

    let student2 = JSON.parse(jsonString);
    console.log(student2);

    console.log(student2.voornaam)
    console.log(student2.geboorteDatum)
    console.log(student2.adres.gemeente)




}

window.addEventListener("load", setup);
