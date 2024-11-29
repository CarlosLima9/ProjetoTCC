let timer;
let currentQuestion = 1;
let secondsLeft = 600; 
let started = false;
let quizCompleted = false;
let answers = {};


function startQuiz() {
    if (started) return; 
    disableQuestions(false);
    showQuestion(currentQuestion);
    timer = setInterval(updateTimer, 1000);
    started = true;
    document.querySelector('.submit-btn').disabled = true;
}


function updateTimer() {
    if (secondsLeft <= 0) {
        clearInterval(timer);
        finishQuiz();
    } else {
        secondsLeft--;
        displayTime(secondsLeft);
    }
}

function displayTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let sec = seconds % 60;
    document.querySelector('.timer').innerText = `${minutes}:${sec < 10 ? '0' : ''}${sec}`;
}

function finishQuiz() {
    if (quizCompleted) return; 
    let correctAnswersCount = 0;
    const totalQuestions = 10;
    let allAnswered = true;

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
        
        if (!selectedOption) {
            allAnswered = false; 
            break; 
        } else {
            const correctAnswer = document.querySelector(`#question${i} .correct-answer`).value;
            if (selectedOption.value === correctAnswer) {
                correctAnswersCount++;
            }
        }
    }

    if (allAnswered) {
        clearInterval(timer);
        document.querySelector('.quiz-results').style.display = 'block';
        document.querySelector('.quiz-results').innerHTML = `Você acertou ${correctAnswersCount} de ${totalQuestions} questões!`;
        disableQuestions(true);
        showQuestion();
        quizCompleted = true;
        document.querySelector('.submit-btn').disabled = true;
        disablePagination(true); 
    } else {
        alert('Você precisa responder todas as questões antes de finalizar o quiz!');
    }
}


function disablePagination(disabled) {
    const paginationButtons = document.querySelectorAll('.pagination button');
    paginationButtons.forEach(button => {
        button.disabled = disabled;
    });
}

// Função para desabilitar/permitir interação com as questões
function disableQuestions(disabled) {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        const inputs = question.querySelectorAll('input');
        inputs.forEach(input => {
            input.disabled = disabled;
        });
    });
}

// Função para navegar entre as questões
function showQuestion(questionNumber) {
    const allQuestions = document.querySelectorAll('.question');
    allQuestions.forEach((question, index) => {
        if (index === questionNumber - 1) {
            question.style.display = 'block';
        } else {
            question.style.display = 'none';
        }
    });
}

// Função para armazenar a resposta do quiz no localStorage
function saveAnswer(questionNumber) {
    const selectedOption = document.querySelector(`input[name="question${questionNumber}"]:checked`);
    if (selectedOption) {
        answers[`question${questionNumber}`] = selectedOption.value;
        localStorage.setItem('quizAnswers', JSON.stringify(answers));
    }
}

// Função para carregar as respostas do localStorage
function loadAnswers() {
    const storedAnswers = localStorage.getItem('quizAnswers');
    if (storedAnswers) {
        answers = JSON.parse(storedAnswers);
        for (let questionNumber in answers) {
            const answerValue = answers[questionNumber];
            const input = document.querySelector(`input[name="${questionNumber}"][value="${answerValue}"]`);
            if (input) {
                input.checked = true;
            }
        }
    }
}

// Carregar as respostas salvas ao recarregar a página
window.onload = loadAnswers;