const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next-btn');

let questionNumber = 0;
let currentQuestion;
let numCorrect = 0;

function startGame() {
    console.log(Started)
    window.location.href = 'quiz.html'; //Not sure if its supposed to be here 
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5) //Gives this a random array?
    currentQuestionIndex = 0;
    quizContainer.classList.remove('hide')
    setNextbreedQuetions()
}

function showbreedQuestion { //Wonder if it's necceray to have it here? What should it contain?

}


function buildQuiz() {
    const output = [];

    breedQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join('')} </div>`
        );
    });



    //When the user clicks on an answer if its correct it will be green and red if wrong
    quizContainer.innerHTML = output.join('');

    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const currentQuestion = breedQuestions[index];
            const userAnswer = button.getAttribute('value');
            if (userAnswer === currentQuestion.correctAnswer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });
    });

}

buildQuiz();

nextButton.addEventListener('click', showResults);


function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    breedQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainer.style.color = 'lightgreen';
        } else {
            answerContainer.style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${breedQuestions.length}`;
}