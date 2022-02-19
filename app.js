const keyBoard = document.getElementById('qwerty'); 
const phrase = document.getElementById('phrase');  
const start = document.querySelector('.btn__reset'); 

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
