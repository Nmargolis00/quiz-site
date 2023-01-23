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

//Do I really need to do a query selector or should I just rebuild this with create element
const answerButton0 = document.querySelector("#answer0");
const answerButton1 = document.querySelector("#answer1");
const answerButton2 = document.querySelector("#answer2");
const answerButton3 = document.querySelector("#answer3");
var secondsLeft = 100;
var timerInterval;
var questionDisplay= document.querySelector("#question-display");
var score;

// if id do a #, if it is a class you need .class

//declare variables
let questions = [
    {
        question: "Is water wet?",
        answers: ["Yes", "No", "Fish live in water", "What is water?"],
        correctAnswer: "Yes",
    }, 
    
    {
        question: "How far is the moon from earth?",
        answers: ["At least 12 miles", "Red", "The Earth is Flat", "What is a moon?"],
        correctAnswer: "At least 12 miles",
    }, 
    
    {
        question: "What song did Shrek turn from a banger into a super-banger?",
        answers: ["Before He Cheats by Kelly Clarkson", "I'm a Believer by Smash Mouth", "Get Low by Little John", "Toxic by Brittany Spears"],
        correctAnswer: "I'm a Believer by Smash Mouth",
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
    //console.log(options);
    
    options.textContent = currentQuestion.answers[index];
}

//You will need local storage to store wins and losses if you need to do that

}

function quizEnd(){

}


startButton.addEventListener("click", startQuiz);
//todoList.addEventListener("click", function(event) {
//   var element = event.target;

//   // Checks if element is a button
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   }
// });


//addeverntlistener for answers

answerButton.addEventListener("click", function(event){
if (answers.matches("correctAnswer") === true){
    score++;
} 



});