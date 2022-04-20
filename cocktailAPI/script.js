fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then(res => res.json())
.then(data => {
    console.log(data)
})
.catch(err =>{
    console.log('error ${err}')
})


document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    document.querySelector('h1').innerText = document.querySelector('input').value;
}

