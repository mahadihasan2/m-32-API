const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries()

const displayCountries = (countries) => {
    // console.log(countries)
    // for (const country of countries) {
    //     console.log(country.name)
    // }
    const countryDiv = document.getElementById('countries')
    countries.forEach(country => {
        // console.log(country.name)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `<h3>${country.name.common}</h3>
                         <p>${country.name.official}</p>
                         <button onclick="loadCountryByName('${country.name.common}')">Show Deatils</button>
                      `
        // const h3 = document.createElement('h3')
        // h3.innerText = `countryName:${country.name.common}`
        // div.appendChild(h3)
        // const p = document.createElement('p')
        // p.innerText = `CapitalName:${country.name.official}`
        // div.appendChild(p)
        countryDiv.appendChild(div)

    });



}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))

}
const displayCountryDetails = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-details')
    countryDiv.innerHTML = `<h5>${country.name.common}
    <p>Population : ${country.population} </p>
    <img src ="${country.flags}">
    <h1>currency: ${country.name.currency}
    `

}