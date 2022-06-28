const joke = document.getElementById('joke')
const button = document.getElementById('button')
button.addEventListener('click', generateJoke)
async function generateJoke(){
    const fetchData = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await fetchData.json()
    joke.innerHTML = data.value
}
