document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks)
            document.querySelector('.drinkImage').src = data.drinks[0].strDrinkThumb
            //document.querySelector('#instructions').innerText = data.drinks[0].strInstructions
            
        })
        .catch(err =>{
            console.log('error ${err}')
        })

    let inputVal = document.querySelector('input').value;
    document.querySelector('h1').innerText = inputVal.charAt(0).toUpperCase() + inputVal.slice(1);

    

    
}

