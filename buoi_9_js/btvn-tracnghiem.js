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
        correctAnswer: 'a'
    }
];

for (let i in questions) {
    const div = document.createElement('p')
    div.setAttribute('class', `questions`)
    div.innerHTML = `
        <h2 id="question">Câu hỏi ${i * 1 + 1}: ${questions[i].question}</h2>
        <p id="answer">
            <input type="radio" id="a" name="q&a${i}" value="a">
            <label id="answer1">${questions[i].answers.a}</label><br>
            <input type="radio" id="b" name="q&a${i}" value="b">
            <label id="answer2">${questions[i].answers.b}</label><br>
            <input type="radio" id="c" name="q&a${i}" value="c">
            <label id="answer3">${questions[i].answers.c}</label><br>
            <input type="radio" id="d" name="q&a${i}" value="d">
            <label id="answer4">${questions[i].answers.d}</label>
        </p>`
    document.querySelector('p').append(div)
    i != 0 ? div.classList.add('hide') : div.classList.add()
}

// sự kiện cho các nút
const btnNext = document.getElementById('btn-next')
const btnPre = document.getElementById('btn-pre')
const btnSubmit = document.getElementById('btn-submit')

let index = 1;
<<<<<<< HEAD
=======
btnPre.classList.add('hide')

>>>>>>> 160782f (huhuh)
const divQues = document.getElementsByClassName('questions')
btnNext.addEventListener('click', function () {
    divQues[index - 1].classList.add('hide')
    divQues[index].classList.remove('hide')
<<<<<<< HEAD
=======
    btnPre.classList.remove('hide')
>>>>>>> 160782f (huhuh)
    index++
    if (index == questions.length) {
        btnNext.style.display = 'none'
        btnSubmit.style.display = 'inline-block'
    }
    console.log(index)
})

btnPre.addEventListener('click', function () {
    if (index > 1) {
        index--
        divQues[index].classList.add('hide')
        divQues[index - 1].classList.remove('hide')
    }
<<<<<<< HEAD
=======
    if (index==1){
        btnPre.classList.add('hide')
    }

>>>>>>> 160782f (huhuh)
    if (index < questions.length) {
        btnNext.style.display = 'inline-block'
        btnSubmit.style.display = 'none'
    }
    console.log(index)
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
//correct: a c c a