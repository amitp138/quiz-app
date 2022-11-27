const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What Los Angeles community is noted for celebrities and mansions?",
        a: "Nob Hill",
        b: "Beverly Hills",
        c: "Chestnut Hill",
        d: "Bunker Hill",
        correct: "b",
    },
    {
        question: "which one is not prime number?",
        a: "3",
        b: "5",
        c: "7",
        d: "8",
        correct: "d",
    },
    {
        question: "which is odd number?",
        a: "3",
        b: "10",
        c: "6",
        d: "8",
        correct: "a",
    },
    
    {
        question: "what is 12*4?",
        a: "3",
        b: "48",
        c: "6",
        d: "8",
        correct: "b",
    },
    {
        question: "what is 42/2?",
        a: "21",
        b: "4",
        c: "6",
        d: "8",
        correct: "a",
    },
    {
        question: "what is 7*8?",
        a: "56",
        b: "4",
        c: "6",
        d: "8",
        correct: "a",
    },
    {
        question: "Which country has the largest capacity reservoir in the world?",
        a: "india",
        b: "us",
        c: "brazil",
        d: "australia",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})