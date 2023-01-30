const generate = require('project-name-generator')
const answer = document.querySelector('.answer')
const dashed = document.getElementById('dashed')
const spaced = document.getElementById('spaced')
const number = document.getElementById('number')
const alliterative = document.getElementById('alliterative')
const numofwords = document.getElementById('numofwords')
const nameBtn = document.querySelector('.nameBtn')

function generateName() {
    let dashedValid = dashed.checked;
    let spacedValid = spaced.checked;
    let numberValid = number.checked;
    let alliterativeValid = alliterative.checked;
    let numberofwords = parseInt(numofwords.value);

    let mode;

    if(dashedValid) {
        mode = 'dashed'
    } else if (!dashedValid) {
        mode = 'spaced'
    } else if (spacedValid) {
        mode = 'spaced'
    } else if (!spacedValid) {
        mode = 'dashed'
    }

    nameBtn.addEventListener('click', () => {
        let options = {words: numberofwords};
        if (numberValid) {
            options.number = true;
        }
        if (alliterativeValid) {
            options.alliterative = true;
        }
        answer.innerHTML = generate(options)[mode];
    });
}

generateName()

export default generateName