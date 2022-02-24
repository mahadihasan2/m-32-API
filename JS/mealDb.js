const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    // Clear Data
    searchField.value = " "

    if (searchText == " ") {
        alert("Hello! I am an alert box!!");


    } else {
        // Load Data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
      `
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data.meals.length))
            .then(data => displaySearchResult(data.meals))
            .catch((error) => {
                console.log(error)
            });

        // console.log(url)
    }

}

const displaySearchResult = (meals) => {
    // console.log(meals.length)
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    if (!meals) {
        alert("Plase Something Wrong")
        console.log('no data found')
    } else {
        meals.forEach(meal => {
            // console.log(meal)
            const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = `
                    <div onclick="loatMealDeatails(${meal.idMeal})" class="card">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                      <div class="card-body">
                           <h5 class="card-title">${meal.strMeal}</h5>
                          <p class="card-text">
                             ${meal.strInstructions.slice(0,300)}
                            </p>
                        </div>
                    </div>
                    `
            searchResult.appendChild(div)

        });
    }


}

const loatMealDeatails = mealId => {
    // console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))

}
const displayMealDetails = meal => {
    console.log(meal)
    const mealDatails = document.getElementById('meal-details')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text"> ${meal.strInstructions.slice(0,300)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    
    `
    mealDatails.appendChild(div)
}