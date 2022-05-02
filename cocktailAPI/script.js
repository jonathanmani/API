document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks)
            let drinkDiv = document.querySelector('.drink-div');

            //clear everything in the drinkDiv before populating with a new drink
            drinkDiv.innerHTML = '';

            for (let i = 0; i < data.drinks.length; i++){
                //create a div that holds the drink image and drink text
                let drinkContainer = document.createElement('div');
                drinkContainer.setAttribute('class','drinkContainer');

                //create an image element to hold the image
                let drinkImage = document.createElement('img');
                drinkImage.setAttribute('class','drinkImage');
                drinkImage.src = data.drinks[i].strDrinkThumb;

                //create a h3 element to hold the drink name
                let drinkName = document.createElement('h3');
                drinkName.innerHTML = data.drinks[i].strDrink;

                //append the image and name to the drinkContainer
                drinkContainer.appendChild(drinkImage);
                drinkContainer.appendChild(drinkName);

                //append the drinkContainer to the drinkDiv element
                drinkDiv.appendChild(drinkContainer)
            }
            
            //document.querySelector('#instructions').innerText = data.drinks[0].strInstructions
            
        })
        .catch(err =>{
            console.log('error ${err}')
        })

    let inputVal = document.querySelector('input').value;
    document.querySelector('h1').innerText = inputVal.charAt(0).toUpperCase() + inputVal.slice(1);

    

    
}

