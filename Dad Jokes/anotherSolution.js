const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

//await go with async
async function generateJoke() {
    const config = {
        headers: {
            // Accept is the key 'application/json' is the value
            Accept : 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();
    jokeEl.innerHTML = data.joke;

}

jokeBtn.addEventListener('click', generateJoke);

