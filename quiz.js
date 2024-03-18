const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next');

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

    quizContainer.innerHTML = output.join('');
}

buildQuiz();

nextButton.addEventListener('click', showResults);

const breedQuestions = [{
        //Correct answer is Labrador retriever 
        question: "Do you know the breed?",
        answers: {
            a: "Bulldog",
            b: "Labrador Retriever",
            c: "Shih Tzu"
        },
        correctAnswer: "b"
    },

    //Correct answer is German Shepheard
    {
        question: "Do you know the breed?",
        answers: {
            a: "Japanese Shiba Inu",
            b: "Boxer",
            c: "German Shepherd"
        },
        correctAnswer: "c"
    },
    //Correct answer is Golden Retriever
    {
        question: "Do you know the breed?",
        answers: {
            a: "Poodle",
            b: "Pomeranian",
            c: "Golden Retriever"
        },
        correctAnswer: "c"
    },
    //Correct answer is Bulldog
    {
        question: "Do you know the breed?",
        answers: {
            a: "Siberian Huskey",
            b: "Bulldog",
            c: "Saint Bernard"
        },
        correctAnswer: "b"
    },

    //Correct answer is Beagle
    {
        question: "Do you know the breed?",
        answers: {
            a: "Beagle",
            b: "French Bulldog",
            c: "Boxer"
        },
        correctAnswer: "a"
    },
    //Correct answer is Poodle
    {
        question: "Do you know the breed?",
        answers: {
            a: "Australian Cattle Dog",
            b: "Dachshund",
            c: "Poodle"
        },
        correctAnswer: "c"
    },
    //Correct answer is Rottweiler
    {
        question: "Do you know the breed?",
        answers: {
            a: "German Shepherd",
            b: "Rottweiler",
            c: "Cocker Spaniel"
        },
        correctAnswer: "b"
    },
    //Correct answer is Norfolk Terrier
    {
        question: "Do you know the breed?",
        answers: {
            a: "Norfolk Terrier",
            b: "Golden Retriever",
            c: "Japanese Shiba Inu"
        },
        correctAnswer: "a"
    },
    //Correct answer is Boxer
    {
        question: "Do you know the breed?",
        answers: {
            a: "Australian Cattle Dog",
            b: "Boxer",
            c: "Dachshund"
        },
        correctAnswer: "b"
    },
    //Correct answer is Dachshund
    {
        question: "Do you know the breed?",
        answers: {
            a: "Poodle",
            b: "Border Collie",
            c: "Dachshund"
        },
        correctAnswer: "c"
    },
    //Correct answer is Shih Tzu
    {
        question: "Do you know the breed?",
        answers: {
            a: "Shih Tzu",
            b: "Cocker Spaniel",
            c: "French Bulldog"
        },
        correctAnswer: "a"
    },

    {
        question: "Do you know the breed?",
        answers: {
            a: "Shetland Sheepdog",
            b: "Collie",
            c: "Malinoise"
        },
        correctAnswer: "a"
    },
    //Correct answer is Siberian Huskey
    {
        question: "Do you know the breed?",
        answers: {
            a: "Australian Cattle Dog",
            b: "Siberian Huskey",
            c: "Pomeranian"
        },
        correctAnswer: "b"
    },
    //Correct answer is Border Collie
    {
        question: "Do you know the breed?",
        answers: {
            a: "Border Collie",
            b: "Beagle",
            c: "Golden Retriever"
        },
        correctAnswer: "a"
    },
    //Correct answer is Australian Shepherd
    {
        question: "Do you know the breed?",
        answers: {
            a: "Rottweiler",
            b: "Border Collie",
            c: "Australian Shepherd"
        },
        correctAnswer: "c"
    },
    //Correct answer is Japanese Shiba Inu
    {
        question: "Do you know the breed?",
        answers: {
            a: "Cocker Spaniel",
            b: "Japanese Shiba Inu",
            c: "Saint Bernard"
        },
        correctAnswer: "b"
    },
    //Correct answer is Cocker Spaniel
    {
        question: "Do you know the breed?",
        answers: {
            a: "Cocker Spaniel",
            b: "Norfolk Terrier",
            c: "Boxer"
        },
        correctAnswer: "a"
    },
    //Correct answer is Saint Bernard
    {
        question: "Do you know the breed?",
        answers: {
            a: "Shih Tzu",
            b: "Labrador Retriever",
            c: "Saint Bernard"
        },
        correctAnswer: "c"
    },
    //Correct answer is French Bulldog
    {
        question: "Do you know the breed?",
        answers: {
            a: "Beagle",
            b: "French Bulldog",
            c: "Pomeranian"
        },
        correctAnswer: "b"
    },
    //Correct answer is Pomeranian
    {
        question: "Do you know the breed?",
        answers: {
            a: "Golden Retriever",
            b: "Shih Tzu",
            c: "Pomeranian"
        },
        correctAnswer: "c"
    },
    //Correct answer is Australian Cattle Dog
    {
        question: "Do you know the breed?",
        answers: {
            a: "Australian Cattle Dog",
            b: "Boxer",
            c: "Siberian Husky"
        },
        correctAnswer: "a"
    },
];

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