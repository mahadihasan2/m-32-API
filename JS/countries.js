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
        console.log(country.name)
        const div = document.createElement('div')
        div.classList.add('country')
        const h3 = document.createElement('h3')
        h3.innerText = `countryName:${country.name.common}`
        div.appendChild(h3)
        const p = document.createElement('p')
        p.innerText = `CapitalName:${country.name.official}`
        div.appendChild(p)
        countryDiv.appendChild(div)

    });

}