var text = '';
function findCountry() {
    text = document.getElementById('country-search').value;
    connectCountry(text)
}

function connectCountry(text) {
    fetch(`https://api.covid19api.com/dayone/country/${text}`)
        .then(res => res.json())
        .then(data => loadCountry(data));
}

connectCountry();

function loadCountry(data) {
    console.table(data[0]);
    var container = document.getElementById("main-container");

    var newContainer = document.getElementById("main-container1");

    newContainer.innerHTML = ``;
    container.innerHTML = `<p><b>Country Name: ${data[0].Country} </b></p> <br>
                           <p>Total Confirmed: ${data[0].Confirmed}</p> <br>
                           <p>Active Cases: ${data[0].Active}</p> <br>
                           <p>Deaths: ${data[0].Deaths}</p> <br>
                           <button class="btn btn-outline-light" onclick="moreDetails()">More Details</button>`;

}

function moreDetails() {
    fetch(`https://restcountries.com/v3.1/name/${text}`)
        .then(res => res.json())
        .then(data => loadDetails(data));
}

function loadDetails(data) {
    var newContainer = document.getElementById("main-container1");
    console.log(data[0]);
    newContainer.innerHTML = `<div class="card border border-5 rounded shadow-lg border border-info" style="width: 30rem;">
    <img src=${data[0].flags.png} class="card-img-top" alt="...">
    <div class="card-body">
    <p>Population:<b>${data[0].population}</b></p>
                                <p>Capital: <b>${data[0].capital[0]}</b></p>
                                <p>Region:<b>${data[0].region}</b></p>
                                <p>Time Zone:<b>${data[0].timezones} </div>
  </div>`;

}