const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next-btn');

let questionNumber = 0;
let currentQuestion;
let numCorrect = 0;

function buildQuiz() {
    currentQuestion = breedQuestions[questionNumber];
    const output = [];

    const answers = [];

    breedQuestions.forEach((currentQuestion, questionNumber) => {


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
             <div class="answer-btn answer-grid"> ${answers.join('')} </div>
             <button id="next-btn">Next</button>`
                );

                quizContainer.innerHTML = output.join('');
                nextButton.addEventListener("click", nextBtnHandler);
            }

            //Next button to generate the next question
            const nextBtnHandler = function () {
                questionNumber++;
                if (questionNumber < breedQuestions.length) {
                    console.log(questionNumber);
                } else {}
            };


            const showAnswer = function () {
                document
                    .querySelectorAll(`input[name[name=question${questionNumber}]`)
                    .forEach((element) =>
                        element.parentElement.style.color = '#4CAF50';
                    );
            }

            const selector = `input[name=question${questionNumber}]: checked`;
            const userAnswerSeelector = document.querySelector(selector) || {};


            if (userAnswerSelector.value === currentQuestion.correctAnswer) {
                numCorrect++;
                userAnswerSelector.parentElement.style.color = 'lightgreen';
            } else {
                userAnswerSelector.parentElement.style.color = 'red';
            }




            /*const answerButtons = document.querySelectorAll('.answer-btn');
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


            /*
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
                */