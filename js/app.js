const keyBoard = document.getElementById('qwerty'); 
const phrase = document.getElementById('phrase');  
const start = document.querySelector('.btn__reset'); 


let missed = 0;


//Start Game Button
start.addEventListener('click', e => {
    overlay.style.display = "none";
});
