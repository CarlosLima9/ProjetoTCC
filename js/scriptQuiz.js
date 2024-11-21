let currentQuestion = 1;
        let timerInterval;

        function startQuiz() {
            document.querySelector('.submit-btn').disabled = true;
            startTimer(10 * 60); // 10 minutos em segundos
            enableNavigation();
            showQuestion(1);
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
                currentQuestion--;
                showQuestion(currentQuestion);
            }
        }

        function nextQuestion() {
            if (currentQuestion < 10) {
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

        showQuestion(currentQuestion);