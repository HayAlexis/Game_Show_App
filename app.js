const keyBoard = document.getElementById('qwerty'); 
const phrase = document.getElementById('phrase');  
const start = document.querySelector('.btn__reset'); 
const ul = document.querySelector('#phrase ul');
const overlay = document.getElementById('overlay');

let missed = 0;

//Start Game Button
start.addEventListener('click', e => {
    overlay.style.display = "none";
});

//Array Phrases
const phrases = [
    'I solemnly swear that I am up to no good',
    'I love magic',
    'Yer a wizard Harry',
    'It does not do to dwell on dreams and forget to live',
    'The ones that love us never really leave us',
]

//Random Phrase Array Function
function getRandomPhrasesAsArray(phrases) {
    const phraseIndex = Math.floor(Math.random()*phrases.length);
    const phraseSelect = phrases[phraseIndex].toUpperCase();
    const phraseSplit = phraseSelect.split("");
    return phraseSplit;
}

const selected = getRandomPhrasesAsArray(phrases);

//Selected Letters to Display
function addPhraseToDisplay (phrase) {
    for(let i = 0; i < phrase.length; i++) {
        const list = document.createElement('li');
        list.textContent = phrase[i];
        ul.appendChild(list);

        if (phrase[i] === ' ') {
            list.className = 'space';
        } else {
            list.className = 'letter'
        }
    }
}

const selectedDisplay = addPhraseToDisplay(selected);

//Check if letter is in phrase
function checkLetter(button){
    const letterList = document.querySelectorAll('.letter');
    let matchLetter = null;

    for ( let i = 0; i < letterList.length; i++) {
        if (button.textContent === letterList[i].textContent.toLowerCase()) {
            letterList[i].classList.add('show');
            letterList[i].style.transition = '0.5s ease-in-out';
            matchLetter = true;
        }
    }
    return matchLetter;
}

//Event Listner to the Keyboard
qwerty.addEventListener('click', (e) =>{
    if(e.target.tagName === 'BUTTON'){
        e.target.className = 'chosen';
        e.target.setAttribute('disabled', '');
        let matchLetter = checkLetter(e.target);
        if(matchLetter === null){
            document.querySelectorAll('img')[missed].src='images/lostHeart.png';
            e.target.className = 'mismatch';
            missed ++;
        }
        checkWin();
    }
  })

  //Miss Guesses
  function checkWin() {
    const letterClass = document.getElementsByClassName('letter');
    const showClass = document.getElementsByClassName('show');

    if (letterClass.length === showClass.length) {
        overlay.style.display= 'flex';
        overlay.className='win';
        document.querySelector('h2').textContent = 'Yay!... you nailed it!';
        document.querySelector('p').textContent = 'Well Done!';
        playAgain();
    } else if (missed > 4 ) {
        overlay.style.display= 'flex';
        overlay.className='lose';
        document.querySelector('h2').textContent = 'Oops!... you lose!';
        document.querySelector('p').textContent = 'Try Again!';
         playAgain();
    }   
}

//Reset Game
function playAgain(){
    start.textContent = 'Play Again';
    start.style.backgroundColor = '#bee35a';
    missed = 0;
    ul.textContent = ' ';

    const priorChosenLetters = document.querySelectorAll('.chosen');
    const priorMismatchLetters = document.querySelectorAll('.mismatch');

  for(let i = 0; i < priorChosenLetters.length; i++) {
    priorChosenLetters[i].classList.remove('chosen');
    priorChosenLetters[i].disabled = false;
  }

  for(let i = 0; i < priorMismatchLetters.length; i++) {
    priorMismatchLetters[i].classList.remove('mismatch');
    priorMismatchLetters[i].disabled = false;
  }

  // Get new phrase
  const newPhrase = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(newPhrase);

  // Refill lives
  const liveHearts = document.querySelectorAll('.tries img');
  for(i = 0; i < liveHearts.length; i++) {
    liveHearts[i].src = 'images/liveHeart.png';
  }

}