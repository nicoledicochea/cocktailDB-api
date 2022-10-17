//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {

    let drink = document.querySelector('input').value
    drink = drink.toLowerCase()

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`

    // query parameters

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.drinks)

            const random = Math.floor(Math.random() * data.drinks.length)
            document.querySelector('h2').innerText = data.drinks[random].strDrink
            document.querySelector('img').src = data.drinks[random].strDrinkThumb;
            document.querySelector('h3').innerText = data.drinks[random].strInstructions;

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    
}


