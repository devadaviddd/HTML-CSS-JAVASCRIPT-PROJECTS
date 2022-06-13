const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

function generateJoke() {
    const config = {
        headers: {
            // Accept is the key 'application/json' is the value
            Accept: 'application/json',
        },
    }
   
    fetch('https://icanhazdadjoke.com', config)
        .then(response => response.json()) //first then get the data as json type data
        .then((data) => {
            jokeEl.innerHTML = data.joke;
        }) //print the actual data
}

jokeBtn.addEventListener('click', generateJoke);


//Another way
