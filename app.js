const jokeElement = document.getElementById ('joke');
const jokeBtn = document.getElementById ('jokeBtn');

// Kör ett skämt direkt
generateJoke ();

//Skapa en funktion "generateJoke" och skkicka en förfrågan (fetch) till Dad Joke API med headers och Accept
function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };
// Vänta på svaret och omvandla det till JSON och Visa skämtet i HTML-elementet

 fetch('https://icanhazdadjoke.com/', config)
        .then(res => res.json())
        .then(data => {
            jokeElement.innerHTML = data.joke;
        });
}

jokeBtn.addEventListener('click', generateJoke);

// Lägg till en eventlistener på knappen så att funktionen körs vid varje klick
