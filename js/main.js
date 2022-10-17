//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {

    let drink = document.querySelector('input').value
    drink = drink.toLowerCase()
    drink = drink.split('').join('')

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink

    // query parameters

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.drinks)

            const random = Math.floor(Math.random() * data.drinks.length)
            document.querySelector('h2').innerText = data.drinks[random].strDrink
            document.querySelector('img').src = data.drinks[random].strDrinkThumb;
            document.querySelector('h3').innerText = data.drinks[random].strInstructions;

            for (const keys in data.drinks[random]) {
                if (keys.includes('strIngredient')) {
                    if(data.drinks[random][keys] != null) {
                        // console.log(data.drinks[random][keys])
                        document.querySelector('ul').appendChild(document.createElement('li')).innerText = data.drinks[random][keys];
                    }
                }  
            }
            document.querySelector('ul').appendChild(document.createElement('li')).innerText = data.drinks[random].strIngredient1;
            

        })
        .catch(err => {
            console.log(`error ${err}`)
        })

        document.querySelector('ul').innerText = null
    
}


