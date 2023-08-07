const loader = document.getElementById('loading');
const error = document.getElementById('error-message').style.display = 'none'
// hideLoading()
// disPlayLoading()
const searchFood = async () => {
    const searchFeild = document.getElementById('search-feild');
    const searchText = searchFeild.value;
    const error = document.getElementById('error-message').style.display = 'none'

    if (searchText == '') {
        alert('Please write something to display')
        return;
    }
    // console.log(searchText)
    /* clearing data */
    searchFeild.value = '';
    //laod data
    disPlayLoading()
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `;
    console.log(url)
    try {
        // disPlayLoading()
        const res = await fetch(url);
        // await new Promise(resolve => setTimeout(resolve, 2000));
        disPlayLoading()
        const data = await res.json();
        hideLoading();
        displaySearchResult(data.meals)
    }
    catch (error) {
        // console.log(error);
        displayError(error)
    }

    // console.log(url)
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displaySearchResult(data.meals))
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
}
const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}
function disPlayLoading() {
    loader.classList.add('display');
    //to stop loadin after some time
    setTimeout(() => {
        loader.classList.remove('display');
    }, 5000);
};
function hideLoading() {
    loader.classList.remove('display');
}

const displaySearchResult = meals => {
    // console.log(meals)
    const searResult = document.getElementById('search-result');
    searResult.textContent = '';
    // if (meals.length == 0) {
    //     alert('no food item like that')
    // }
    if (meals == null) {
        alert('No food found named like that')
    }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                 <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>`
        /* <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div> */
        // console.log(div.innerHTML);
        searResult.appendChild(div);
    })
}

const loadMealDetails = async mealID => {
    // console.log(mealID);
    // disPlayLoading()
    document.getElementById('meal-details').textContent = '';
    disPlayLoading()
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}
    `;
    const res = await fetch(url);
    const data = await res.json();
    // hideLoading()
    // console.log(data.meals[0])
    displayMealDetails(data.meals[0])
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetails(data.meals[0]))
    hideLoading();
};
const displayMealDetails = meal => {
    console.log(meal)

    const mealDetails = document.getElementById('meal-details');
    // mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
</div>
`;
    // console.log(div.innerHTML)
    console.log(mealDetails)
    mealDetails.appendChild(div);

}