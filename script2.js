//Global Variables
rootEL = $('#root');
highscoreEL = $('<h2>');
timerEL = $('<h3>');
timerEL = $('<p>');
questionEl = $('#question');
answerEL = $('#answers');
scoreboardEL = $('#scoreboard');

let button = document.querySelector("#start-btn");

let secondsLeft = 100;
let timerInterval;
let score;
let indexQuestion = 0;
//Create for rest of IDs


//Object of questions, answers and correct answer

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

//Setting up page
    highscoreEL.text('Highscore');
    rootEL.append(highscoreEL);
    timerEL.text('Timer');
    highscoreEL.append(timerEL);
  

// Start the game

function startQuiz() {
    questionContainer.classList.remove("hide");
    startEl.classList.add("hide");
    startTimer ();

    if (indexQuestion < questions.length){
        let questionNumber = indexQuestion + 1;
        questionEl.text("Question#" + questionNumber + ":" + `${questions[indexQuestion].question}`);
    }

    let currentQuestion = questions[indexQuestion];
    answerEl.html("");

    for (let index = 0; index < currentQuestion.choices.length; index++) {
        let choicesEl = $(`<li id="listItem> <button>${currentQuestion.choices[index]}</button> </li>`);

        answerEl.append(choicesEl);
        

        
    }

}
//****** CAN YOU REPLACE INDEXQUESTION WITH 0 AND HAVE IT STILL WORK? */




// Timer Function, still need to make more time drop off if answer is wrong

function startTimer(){
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEL.textContent = secondsLeft + " seconds until you lose";
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            quizEnd();
        }
    },1000);
}

//Create questions and answers through a for loop using the children of various parts of the HTML. You will need to compare to the activities

//start function and timer function. You already have this so that makes it a little easier

//Store input similar to the shopping list activity

//Create if statement for right and wrong answer

//Store results

//After quiz is done, local storage to show highscore and prompt to enter initials

//Button to reset quiz