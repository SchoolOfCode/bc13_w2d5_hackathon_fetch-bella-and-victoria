//let p = document.querySelector('#question')
//p.textContent = question

// let question = triviaData.results[0].question

async function fetchTrivia(){
let trivia = await fetch ("https://opentdb.com/api.php?amount=50&type=boolean");
let triviaData = await trivia.json ()
return triviaData
}

let data = fetchTrivia()
console.log (data)

console.log(data.results)

// let trueButton = document.querySelector("#true")
// let falseButton = document.querySelector("#false")

// trueButton.addEventListener("click", checkAnswer)
// function checkAnswer(){
//     if 
// }

// falseButton.addEventListener("click", #)

// function fetchAnswer(str){
//     let correctAnswer = triviaData.results[0].correct_answer
// }

// let correctAnswer = data.
// console.log(correctAnswer)


//  if ()
// // else {YOU LOSE}
// }

function answerFalse (){
    // if correct answer === FALSE, {return WIN!}
    // else {YOU LOSE}
    }




// from user:
// start with one category  (music)
    // 👉 generate the link for one category 
    // 👉 fetch the data from the API (json)
    // 👉 create buttons: 
        // 👉 question field => 
        // 👉 true or false buttons
        //  👉link the question to question paragraph
        //  link the true or false to the answers 
        //function with event listeners 
            // add an event listener to TRUE and FALSE button
            // write one function so that when it is clicked it returns T/F
            //  apply to both buttons

    // create' next question' button that generates new question
    // create a loop that moves on to the next question 
    // create an event => every time the user presses the button
    // create a skip button to move on to the next question 
    // link up the different option boxes in the answers in the data object 
        // randomly assign the correct answer to a different button
        //assign the rest to other buttons 
    //check the answer
        // add another if the correct answer = correct answer, you win
        // else you lose 
        // either way you move to the next question 
    // when the user gets it right, say "you win!"
    // when the user gets it wrong, say "you lose!"
    // add something to keep the score 
// start with easy category and then add hard and medium 
// questions appear in a browser 
// multiple choice 



// for later: 
// add music/reaction when win/lose
// add a clock
// add a 'flip a coin' function => not sure, flip a coin (true/false)
// add a picture of a host
// add animations 
