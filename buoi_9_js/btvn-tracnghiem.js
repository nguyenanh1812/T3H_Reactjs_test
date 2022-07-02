const questions = [
    {
        question: 'Javascript is _________ language.',
        answers: {
            a: 'Programming',
            b: 'Application',
            c: 'None of These',
            d: 'Scripting'
        },
        multi: false,
        correctAnswer: 'a'
    },
    {
        question:
            'Which of the following is a valid type of function javascript supports?',
        answers: {
            a: 'named function',
            b: 'anonymous function',
            c: 'both of the above',
            d: 'none of the above'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question: 'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
        answers: {
            a: 'getIndex()',
            b: 'location()',
            c: 'indexOf()',
            d: 'getLocation()'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question: 'Which one of the following is valid data type of JavaScript',
        answers: {
            a: 'number',
            b: 'void',
            c: 'boolean',
            d: 'nothing'
        },
        multi: false,
        correctAnswer: 'b'
    }
];

// for (let i in questions) {
//     const div = document.createElement('div')
//     //div.classList.add('hide')
//     div.innerHTML = `
//         <h2 id="question">Câu hỏi ${i + 1}: ${questions[i].question}</h2>
//         <p id="answer">
//             <input type="radio" id="a" name="q&a${i}" value="a">
//             <label id="answer1">${questions[i].answers.a}</label><br>
//             <input type="radio" id="b" name="q&a${i}" value="b">
//             <label id="answer2">${questions[i].answers.b}</label><br>
//             <input type="radio" id="c" name="q&a${i}" value="c">
//             <label id="answer3">${questions[i].answers.c}</label><br>
//             <input type="radio" id="d" name="q&a${i}" value="d">
//             <label id="answer4">${questions[i].answers.d}</label>
//         </p>
//         <center id="point">
//             <button id="btn-pre"><i class="fa-solid fa-arrow-left-long"> PreV</i></button>
//             <button id="btn-next"> <i class="fa-solid">Next </i><i class="fa-solid fa-arrow-right-long"></i></button>
//             <button id="btn-submit" style="display: none;"><i class="fa-solid fa-paper-plane"> Submit</i></button>
//         </center>`
//     document.body.append(div)
// }

const question = document.querySelector('#question')
const answer1 = document.querySelector('#answer1')
const answer2 = document.querySelector('#answer2')
const answer3 = document.querySelector('#answer3')
const answer4 = document.querySelector('#answer4')
//console.log(question,answer1,answer2,answer3,answer4)
question.innerText = `Câu hỏi 1: ${questions[0].question} `
answer1.innerText = questions[0].answers.a
answer2.innerText = questions[0].answers.b
answer3.innerText = questions[0].answers.c
answer4.innerText = questions[0].answers.d

let i = 1;
const btnNext = document.getElementById('btn-next')
const btnPre = document.getElementById('btn-pre')
const btnSubmit = document.getElementById('btn-submit')
btnNext.addEventListener('click', function () {
    question.innerText = `Câu hỏi ${i + 1}: ${questions[i].question} `
    answer1.innerText = questions[i].answers.a
    answer2.innerText = questions[i].answers.b
    answer3.innerText = questions[i].answers.c
    answer4.innerText = questions[i].answers.d
    i++;
    if (i == questions.length) {
        btnNext.style.display = 'none'
        btnSubmit.style.display = 'inline-block'
    }
    console.log(i)
})

btnPre.addEventListener('click', function () {
    if (i > 1) {
        i--;
        question.innerText = `Câu hỏi ${i}: ${questions[i - 1].question} `
        answer1.innerText = questions[i - 1].answers.a
        answer2.innerText = questions[i - 1].answers.b
        answer3.innerText = questions[i - 1].answers.c
        answer4.innerText = questions[i - 1].answers.d
        console.log(i)
    }
    if (i < questions.length) {
        btnNext.style.display = 'inline-block'
        btnSubmit.style.display = 'none'
    }
})

btnSubmit.addEventListener('click', function () {
    let count = 0
    for (let j in questions) {
        let radioBox = document.getElementsByName(`q&a${j}`)
        for (let i of radioBox) {
            if (i.checked === true && i.value == questions[j].correctAnswer)
                count++
        }
    }
    //In kết quả
    const text = 'Are you sure to submit?'
    if (confirm(text)) {
        const pointText = document.getElementById('point')
        console.log(pointText)
        pointText.innerHTML = `<p class="point">${count}/${questions.length} Correct Answer</p>`
    }
})
//correct: a c c ab