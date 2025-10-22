const jokeElement = document.getElementById ('joke');
const jokebtn = document.getElementById ('jokeBtn');

generateJoke ();

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

 fetch('https://icanhazdadjoke.com/', config)
        .then(res => res.json())
        .then(data => {
            jokeElement.innerHTML = data.joke;
        });
}

jokeBtn.addEventListener('click', generateJoke);


/*
Pseudokod:
1. Hämta HTML-element:
   - diven där skämtet ska visas
   - CTA som användaren klickar på

2. Skapa en funktion "generateJoke":
   a. Skicka en förfrågan (fetch) till Dad Joke API med headers: Accept: application/json
   b. Vänta på svaret och omvandla det till JSON
   c. Visa skämtet i HTML-elementet

3. Kör funktionen en gång direkt när sidan laddas
4. Lägg till en eventlistener på knappen så att funktionen körs vid varje klick
*/