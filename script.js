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
var questionDisplay= document.querySelector("#question-display");
var score;

// if id do a #, if it is a class you need .class

//declare variables
var questions = [
    {
        question: "Is water wet?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes",
    }, 
    
    {
        question: "The condition in an if/else statement is enclosed with _",
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correctAnswer: "parenthesis",
    }, 
    
    {
        question: "Arrays in javascript can be used to store:",
        answers: ["number and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above",
    }, 
    
    {
        question: "String values must be enclosed within _ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer: "quotes",
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
    timerInterval = setInterval(function() {
        secondsLeft--;
        timerEL.textContent = secondsLeft + " seconds until you lose";
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            quizEnd();
        }
    },1000);
}

//could create element for each answer
var currentQuestionIndex = 0;
function displayQuestions(){
var currentQuestion = questions[currentQuestionIndex];
questionDisplay.innerText = currentQuestion.question;
for (let index = 0; index < currentQuestion.answers.length; index++) {
    const element = currentQuestion.answers[index];
    var id = "answer" + index;
    
    var options = document.getElementById(id);
    console.log(options);
    // Not grabbing correct answers
    options.textContent = currentQuestion.answers[index];
}

}

function quizEnd(){

}

//addeverntlistener for answers?
startButton.addEventListener("click", startQuiz)