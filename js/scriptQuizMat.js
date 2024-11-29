let currentQuestion = 1;
let timerInterval;
let score = 0;
const totalQuestions = 10;
let started = false;
document.querySelectorAll('.pagination button').forEach(button => {
    button.disabled = true;
});

function startQuiz() {
    started = true;
    document.querySelector('.submit-btn').disabled = true;
    startTimer(10 * 60);
    enableNavigation();
    showQuestion(currentQuestion);
}

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector('.timer').textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(timerInterval);
            document.querySelector('.timer').textContent = "Tempo esgotado!";
            disableNavigation();
            showScore();
        }
    }, 1000);
}

function enableNavigation() {
    document.querySelectorAll('.pagination button').forEach(button => {
        button.disabled = false;
    });
}

function disableNavigation() {
    document.querySelectorAll('.pagination button').forEach(button => {
        button.disabled = true;
    });
}

function showQuestion(questionNumber) {
    document.querySelectorAll('.question').forEach((question) => {
        question.classList.remove('active');
    });
    document.getElementById(`question${questionNumber}`).classList.add('active');
    currentQuestion = questionNumber;
    updateButtonHighlight();
}

function previousQuestion() {
    if (currentQuestion > 1) {
        checkAnswer();
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}


function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        checkAnswer();
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}


function updateButtonHighlight() {
    document.querySelectorAll('.pagination button').forEach((button) => {
        button.classList.remove('active');
    });
    const activeButton = document.querySelector(`.pagination button:nth-child(${currentQuestion + 1})`);
    if (activeButton) activeButton.classList.add('active');
}

function checkAnswer() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestion}"]:checked`);
    if (selectedOption) {
        if (selectedOption.id === "correta") {
            score++; // Incrementa a variável score se a resposta for correta
        }
    }
}

function finishQuiz() {
    if(started === true){
    checkAnswer(); 
    clearInterval(timerInterval);
    disableNavigation();
    showScore();
    }
}


function showScore() {
    document.querySelector('.quiz-results').textContent = `Você acertou ${score} de ${totalQuestions} perguntas!`;
    document.querySelector('.quiz-results').style.display = 'block';
}


showQuestion(currentQuestion);