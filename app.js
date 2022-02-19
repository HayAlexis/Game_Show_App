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
        if (button.textContent === letterList[i].textContent) {
            letterList[i].classList.add('show');
            letterList[i].style.transition = '0.5s ease-in-out';
            matchLetter = true;
        }
    }
    return matchLetter;
}