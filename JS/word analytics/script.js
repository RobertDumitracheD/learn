const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat-number-characters');
const wordsNumberEl = document.querySelector('.stat-number-words');
const twitterNumberEl = document.querySelector('.stat-number-twitter');
const facebookNumberEl = document.querySelector('.stat-number-facebook');

textareaEl.addEventListener('input', () =>{
    // input validation
    if(textareaEl.value.includes('<script>')) {
        alert('You cannot use scripts!')
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }

    const numberOfCharacters = textareaEl.value.length;
    const twitterCharactersLeft = 280 - numberOfCharacters;
    const facebookCharactersLeft = 2200 - numberOfCharacters;
    let numberOfWords = textareaEl.value.split(' ').length;
    
    if(textareaEl.value.length === 0) {
        numberOfWords = 0;
    }

    charactersNumberEl.textContent = numberOfCharacters;
    twitterNumberEl.textContent = twitterCharactersLeft;
    facebookNumberEl.textContent = facebookCharactersLeft;
    wordsNumberEl.textContent = numberOfWords;

    if(twitterCharactersLeft < 0) {
        twitterNumberEl.classList.add('stat-number-limit')
    } else {
        twitterNumberEl.classList.remove('stat-number-limit')
    }
    if(facebookCharactersLeft < 0) {
        facebookNumberEl.classList.add('stat-number-limit')
    } else {
        facebookNumberEl.classList.remove('stat-number-limit')
    }
})