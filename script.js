//time function that subtracts time if answer is wrong

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


const startEl = document.querySelector(".start-quiz");
const questionContainer = document.querySelector(".question-section");
const startButton = document.querySelector("#start");
const timerEL = document.querySelector("#time");
var secondsLeft = 100;
var timerInterval;
var questionDisplay= document.querySelector("#question-display")

// if id do a #, if it is a class you need .class

//declare variables
var questions = [
    {
        question: "Commonly used data types do not include:",
        answers: ["strings", "booleans", "alert", "numbers"],
        correctAnswer: "alert",
        userAnswer: null,
    }, 
    
    {
        question: "The condition in an if/else statement is enclosed with _",
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correctAnswer: "parenthesis",
        userAnswer: null,
    }, 
    
    {
        question: "Arrays in javascript can be used to store:",
        answers: ["number and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above",
        userAnswer: null,
    }, 
    
    {
        question: "String values must be enclosed within _ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer: "quotes",
        userAnswer: null,
    },

]


function startQuiz(){
questionContainer.classList.remove("hide");
startEl.classList.add("hide");
displayQuestions();
startTimer();
}


//Make time deduct when you get an answer wrong if (answer != correctAnswer){secondsLeft - 5}
function startTimer(){
    console.log(timerInterval)
    timerInterval = setInterval(function() {
        secondsLeft--;
        timerEL.textContent = secondsLeft + " seconds until you lose";
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            quizEnd();
        }
    },1000);
}


var currentQuestionIndex = 0;
function displayQuestions(){
var currentQuestion = questions[currentQuestionIndex];
questionDisplay.innerText = currentQuestion.question;
for (let index = 0; index < currentQuestion.answers.length; index++) {
    const element = currentQuestion.answers[index];
    //Figure out how to get answers to display and give them a color and make it change when you hover
    var options = document.getElementById("answer" + index);
    options.textContent = element;
}

}

function quizEnd(){

}


startButton.addEventListener("click", startQuiz)