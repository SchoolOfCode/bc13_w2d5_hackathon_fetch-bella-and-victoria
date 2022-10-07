
    
    
    async function fetchTrivia(){
        let trivia = await fetch ("https://opentdb.com/api.php?amount=50&type=boolean");
        let triviaData = await trivia.json()
        return triviaData
        }
            
        function task1 (random){
        let question = random.results[0].question
        return question
        }
        
        
        function task2 (random1){
        let answer = random1.results[0]['correct_answer']
        return answer 
        }

let question = '';
let CorrectAnswer;

async function main (){
    let data = await fetchTrivia();
    console.log (data)
    question = await task1(data)
    let p = document.querySelector ('#question')
    p.textContent = question
    correctAnswer = await task2(data) 
    console.log (question, correctAnswer)
    }

    main ()
