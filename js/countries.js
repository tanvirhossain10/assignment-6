const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()
const displayCountries = countreis => {
    // console.log(countreis)
    /*  for (const country of countreis) {
         console.log(country)
     } */
    const countriesDiv = document.getElementById('countries');
    countreis.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('countries')
        div.innerHTML = `<h3>${country.name.official}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Show Details</button>`
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name.official;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p)
        countriesDiv.appendChild(div)

    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
    // console.log(url);
}

const displayCountryDetail = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `<h5>${country.name.official}</h5>
    <p>Population:${country.population}</p>
    <img width="200px"src="${country.flags.svg}">
    `

}