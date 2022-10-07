async function FetchTrivia(){
let trivia = await fetch ("https://opentdb.com/api.php?amount=50&type=boolean");
let triviaData = await trivia.json ();

let question = triviaData.results[0].question
let p = document.querySelector('#question')
p.textContent = question

}

console.log (FetchTrivia())

// from user:
// start with one category  (music)
    // 👉 generate the link for one category 
    // 👉 fetch the data from the API (json)
    // 👉 create buttons: 
        // 👉 question field => 
        // 👉 true or false buttons
        //  link the question to question paragraph
        //  link the true or false to the answers 


        //function with event listeners 

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
