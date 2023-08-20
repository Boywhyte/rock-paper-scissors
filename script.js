const computer = document.getElementById('computer');
const user = document.getElementById('you');
const resultDisplay = document.getElementById('result')
const btn = document.querySelectorAll('button')


const userScore = document.getElementById('your-score');
const cpuScore = document.getElementById('computer-score')

let computersChoice
let userChoice


let yourScore = 0
let computerScore = 0

//click event 
function playGame(){
    //user's choice
    btn.forEach(choice => choice.addEventListener('click',(e)=>{
        userChoice = e.target.textContent
        user.textContent=userChoice 
        //computer's choice
        const randomNumber = Math.floor(Math.random()*btn.length)
    
    
        if (randomNumber === 0){
          computersChoice = 'Rock'
        }
        if (randomNumber === 1){
          computersChoice = 'Paper'
        }
        if (randomNumber === 2){
          computersChoice = 'Scissors'
        }
    
      
        computer.textContent=computersChoice
        getResult()
      
        
    }))

    function getResult(){
  

        if (computersChoice == userChoice ){
          resultDisplay.textContent = 'its a draw'
        }
        else if(computersChoice === 'Rock' && userChoice == 'Paper'|| computersChoice == 'Paper'&&userChoice=='Scissors'|| computersChoice == 'Scissors'&& userChoice == 'Rock')
        {
          resultDisplay.textContent = 'you win'
          yourScore = ++yourScore
          userScore.textContent = yourScore
        }
        else{
           resultDisplay.textContent = 'computer wins'
           computerScore = ++computerScore
           cpuScore.textContent = computerScore
        }
        if(computerScore == 5){
          if(alert('Computer wins this game.Play Again?')){}
          else    window.location.reload(); 
        }
        if(yourScore == 5){
          if(alert('You win this game.Play Again?')){}
          else    window.location.reload(); 
        }
          
      }
      }
      // function to restart the game
      playGame()

      