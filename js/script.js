$(document).ready(function () {

    let btnGetData = document.getElementById('pobierz-dane');
    let dataOutput = document.getElementById('dane-programisty');

    const getData = () => {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {

            let pElement = document.createElement('p');

            dataOutput.appendChild(pElement);
            pElement.append("Imię: " + data.imie);
            pElement.append(", nazwisko: " + data.nazwisko);
            pElement.append(", zawód: " + data.zawod);
            pElement.append(", firma: " + data.firma);
        });
    }

    btnGetData.addEventListener('click', getData);

})