const generate = require('project-name-generator')
const answer = document.querySelector('.answer')
const dashed = document.getElementById('dashed')
const spaced = document.getElementById('spaced')
const concatenate = document.getElementById('concatenate')
const number = document.getElementById('number')
const alliterative = document.getElementById('alliterative')
const numofwords = document.getElementById('numofwords')

function generateName() {
    let dashedValid = dashed.checked;
    let spacedValid = spaced.checked;
    let concatenatevalid = concatenate.checked;
    let numberValid = number.checked;
    let alliterativeValid = alliterative.checked;
    let numberofwords = parseInt(numofwords.value);

    let mode;

    if(dashedValid) {
        mode = 'dashed'
    } else if (spacedValid) {
        mode = 'spaced'
    } else if (concatenatevalid) {
        mode = 'concatenate'
    }

    let options = {words: numberofwords};
    if (numberValid) {
        options.number = true;
    }
    if (alliterativeValid) {
        options.alliterative = true;
    }

    if (concatenatevalid) {
        let words = generate(options)['spaced'].split(" ");
        let result = "";
        for (let word of words) {
          result += word[0].toUpperCase() + word.slice(1);
        }
        answer.innerHTML = result;
        } else {
            answer.innerHTML = generate(options)[mode];
        }
    }      

export default generateName