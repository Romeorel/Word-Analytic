const textareaEl = document.querySelector('.text-area');
const charactersNumberEl = document.querySelector('.stat-number--characters');
const instagramNumberEl = document.querySelector('.stat-number--instagram');
const facebookNumberEl = document.querySelector('.stat-number--facebook');
const wordsNumberEl = document.querySelector('.stat-number--words');

const inputHandler = () => {
    // example of input validation: <script>
    if (textareaEl.value.includes('<script>')) {
        alert("you can't use <script> in your text.");
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }

    // determine new numbers
    let numberOfWords = textareaEl.value.split(' ').length;
    if (textareaEl.value.length === 0) {
        numberOfWords = 0;
    }
    const numberOfCharacters = textareaEl.value.length;
    const instagramCharactersLeft = 150 - numberOfCharacters;
    const facebookCharactersLeft = 2200 - numberOfCharacters;

    // add visual indicator if limit is exceeded
    if (instagramCharactersLeft < 0) {
        instagramNumberEl.classList.add('stat-number--limit');
    } else {
        instagramNumberEl.classList.remove('stat-number--limit');
    }

    if (facebookCharactersLeft < 0) {
        facebookNumberEl.classList.add('stat-number--limit');
    } else {
        facebookNumberEl.classList.remove('stat-number--limit');
    }

    // set new numbers
    wordsNumberEl.textContent = numberOfWords;
    charactersNumberEl.textContent = numberOfCharacters;
    instagramNumberEl.textContent = instagramCharactersLeft;
    facebookNumberEl.textContent = facebookCharactersLeft;
};

textareaEl.addEventListener('input', inputHandler);