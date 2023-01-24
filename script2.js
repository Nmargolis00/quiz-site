//Global Variables
rootEL = $('#root');
highscoreEL = $('.highscore-section');
questionEl = $('#question');
answerDisplayEL = $('#answers');
scoreboardEL = $('#victory-board');
var startEl = $('#start-btn');
questionContainer = $('.question-section');

let button = document.querySelector("#start-btn");

const timerEl = document.querySelector('#time');
var secondsLeft = 100;
var score = 0;
let indexQuestion = 0;
let timerInterval;
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
    // highscoreEL.text('Highscore');
    // rootEL.append(highscoreEL);
    
    // highscoreEL.append(timerEL);
   
  

// Start the game


function showQuestion() {
   
    startEl.addClass("hide");

//if statement for when questions are done to stop the time. Could do it here or beginning of showQuestionse

        //if indexquestion = questions.length {
   // stop game

    if (indexQuestion < questions.length){
        let questionNumber = indexQuestion + 1;
        questionEl.text("Question: " + questionNumber + ": " + `${questions[indexQuestion].question}`);
    

    let currentQuestion = questions[indexQuestion];


    answerDisplayEL.empty();

    for (var i = 0; i < currentQuestion.answers.length; i++) {
      var choicesEl = $(
        `<li> <button class = "answer-button"> ${currentQuestion.answers[i]} </button> </li>`
      );
      
      answerDisplayEL.append(choicesEl);
      
     
      

//Use BACKTICKS to make it work and be sure to add in the index for the appropriate part of the object
     }
          
    }
    startTimer();
}


// Function to check answer

function checkAnswer(event) {

        if (timerEl <= 0 || indexQuestion === questions.length){
                quizEnd ();
                clearTimeout(timerInterval);
        } else {
            showQuestion();
        }
     
        let userSelection = event.target.textContent.trim();
        let youDidIt = questions[indexQuestion].correctAnswer;
        



        // console.log(userSelection);
        // console.log(youDidIt);

        if (userSelection === youDidIt) {
            score++;
            
        } else {
            secondsLeft = secondsLeft - 5;
            
        }

        indexQuestion++;
        showQuestion();
        console.log(score);

//if statement for when questions are done to stop the time. Could do it here or beginning of showQuestionse

        //if indexquestion = questions.length {
   // stop game
        
      //let finalScore = secondsLeft

    }

// Need a function for the end of the quiz to stop displaying questions and show high score and initials


function startTimer(){
    timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds until you lose";
        if(secondsLeft <= 0) {
            quizEnd ();
            clearInterval(timerInterval);
        }
    },  1000);
}




//Quiz End Function
// Go through and make sure js or jquery to make sure it matches
function quizEnd(){
    questionContainer.addClass("hide");
    timerEl.classList.add("hide");
    highscoreEL.removeClass("hide");
    //If it has hide on the HTML it would be removeClass instead
    clearInterval(timerInterval);
    finalPage ();
  }

  //Why is this one not working?



function finalPage(){
    initials = prompt("Please enter your initials");
    // Look at acitivities to see how you can enter on the webpage
    var letters = /^[A-Za-z]+$/;
        if(inputtxt.value.match(letters))
     {
      return true;
     }
        else
     {
     alert("Please enter letters only");
     return false;
     
    
     localStorage.setItem("initials", JSON.stringify(initials))

     scoreboardEL = $(`<li> ${initials} </li>`)
     }
    //  var choicesEl = $(
    //     `<li> <button class = "answer-button"> ${currentQuestion.answers[i]} </button> `
    //   );
      

// store initials and highscore (Keep score as seconds) on local storage
// call initals and highscore for a list
// rank by highest number at top and lowest at bottom
// prompt "would you like to play again? if yes reset page"


}







//Store results

//After quiz is done, local storage to show highscore and prompt to enter initials

//Button to reset quiz


button.addEventListener("click", showQuestion);
answerDisplayEL.on("click", checkAnswer);