let guess = document.querySelector('#guess'),
    word = document.querySelector('#word'),
    submit = document.querySelector('#submit'),
    guessed = document.querySelector('#guessed'),
    head = document.querySelector('#head'),
    body = document.querySelectorAll('#body'),
    leftarm = document.querySelector('#leftarm'),
    rightarm = document.querySelector('#rightarm'),
    leftleg = document.querySelector('#leftleg'),
    rightleg = document.querySelector('#rightleg'),
    winlose = document.querySelector('#winlose');

var words = ['BUMBLEBEE', 'FILLET', 'ONION', 'ELEVATOR', 'MACHINE', 'MARKERS', 'PROTRACTOR', 'CABBAGE', 'BROCCOLI', 'MANSION', 'KIDNEY', 'RANDOM', 'DESPICABLE', 'AVALANCHE', 'PUNCTUATION', 'EXCLAMATION', 'QUESTION', 'ALUMINUM', 'METABOLISM', 'TOOTHBRUSH', 'BINDER', 'CALENDAR', 'NOTORIOUS', 'MATHEMATICS', 'MONITORED', 'JIGSAW', 'RAINBOW', 'CUCUMBER', 'ULTRAVIOLET', 'ANIMATION', 'BALD', 'MUSTACHE', 'JUMBLED', 'SCRAMBLED', 'DISASTROUS', 'ERASER', 'EXPLOSION', 'ESPIONAGE', 'LANGUAGE', 'SUPERHERO', 'SITUATION', 'NAVIGATOR', 'CLIPBOARD', 'OLYMPIAN', 'PROGRESSIONS', 'SPLENDID', 'ACADEMY','WOLVERINES']

function random() {

  var num = Math.floor(Math.random() * (47 - 0 + 1) + 0);
  return num;

}

var bodylist = [head, body, leftarm, rightarm, leftleg, rightleg];

var bodyparts = ['o', '|', '/', '\\', '/', '\\'];

var num = random();

var randomWord = words[num];

var underscores = randomWord.length;

var hidden = [];

var incorrect = 0;

for (var i = 0; i < underscores; i ++) {
  hidden.push("_ ")
}

word.innerHTML = hidden.join("");

var guessedLetters = [];

function submitGuess() {

  var userGuess = guess.value.toUpperCase();
  
  guessedLetters.push(userGuess);
  guessed.innerHTML = guessedLetters.join(', ')

  guess.value = '';

  if (incorrect === 5) {

    document.body.style.backgroundColor = 'pink';
    winlose.innerHTML = `You lost! The word was ${randomWord}.`

  }

  if (randomWord.includes(userGuess) === true) {

    if (userGuess.length === 1) {

      for (let i = 0; i < randomWord.length; i++) {

        if (userGuess === randomWord[i]) {

          hidden[i] = `${userGuess} `;

        }
      }
    }

    else if (userGuess.length > 1) {

        var placement = randomWord.search(userGuess)
        var guessChars = userGuess.split('');

        for (let i = 0; i < userGuess.length; i++) {

          let x = placement + i

          if (userGuess[i] === randomWord[x]) {

            hidden[x] = `${userGuess[i]} `;

          }
        }
      }
    }

  else if (randomWord.includes(userGuess) === false) {

    if (incorrect !== 1) {
      let bodypart = bodylist[incorrect];
      bodypart.innerHTML = bodyparts[incorrect];
    }

    else if (incorrect === 1) {
      for (let i = 0; i < body.length; i ++) {
        body[i].innerHTML = '|';
      }
    }

    incorrect += 1;

  }

  word.innerHTML = hidden.join('');
  let hiddenstr = hidden.join('');
  let hiddentrim = hiddenstr.replaceAll(' ', '')
  if (hiddentrim === randomWord) {
    winlose.innerHTML = "You win!";
    document.body.style.backgroundColor = "lightBlue";
  }
}

submit.addEventListener('click', submitGuess);
