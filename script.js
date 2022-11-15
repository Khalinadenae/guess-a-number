let submitBtn = document.getElementById('submit')
let message = document.getElementById("message")
let userGuesses = []
let textInput = document.getElementById("userGuess")
let containerEl = document.getElementById('container')


// prevent default behavior on form 
const guessForm = document.getElementById('user-input')
guessForm.addEventListener('submit', function(event){
  event.preventDefault()
})

//Generate random number
let randomNumber = generatedNumber();
function generatedNumber(){
  return Math.floor(Math.random() * 101);
}

console.log(`The random number is ${randomNumber}`)

function play(){
  let guess = Number( document.getElementById('userGuess').value )
  console.log(`user guess : ${guess}`)
  
  // if user guesses the right number before three tries , reveal they won and reset game
 if (guess === randomNumber && userGuesses.length !== 3){
     message.innerHTML = `🎊 You got it! The correct guess was ${randomNumber}` 
     textInput.style.display = "none"
      submitBtn.style.display = "none"
      guessForm.reset()
      resetGame()
  } else if (guess === randomNumber){
    message.innerHTML = `🎊 You got it! The correct guess was ${randomNumber}` 
  }
  else if ( guess < 1 || guess > 100 ){
    message.innerHTML = "That number is outside the range of 1 and 100"
  } else if ( guess < randomNumber){
    message.innerHTML = "nope, try a higher number "
    userGuesses.push(guess)
  } else if ( guess > randomNumber){
    message.innerHTML = "nope, try a lower number"
    userGuesses.push(guess)
  } 
  console.log(userGuesses)
   // reveal the random number and reset game after the user makes 3 attempts 
    if (userGuesses.length === 3){
       revealNumber()
    }
}

// reveal number after three tries 
function revealNumber(){
textInput.style.display = "none"
submitBtn.style.display = "none"
if(userGuesses.includes(randomNumber)){
    message.innerHTML = `🎊 You got it! The correct guess was ${randomNumber}` 
 } else {
message.innerHTML = `You used all your tries. The correct guess was ${randomNumber}` 
}
    // clear input field and reset game
      guessForm.reset()
      resetGame()
}

// reset button - prompt users to reset values
function resetGame(){
    let resetBtn = document.createElement("button")
    resetBtn.innerHTML = "Reset Game"
   containerEl.appendChild(resetBtn);
    
    resetBtn.addEventListener('click', function resetGame(event) {
     userGuesses.length = 0 
      resetBtn.style.display = "none"
      textInput.style.display = "inline"
      submitBtn.style.display = "inline"
      message.innerHTML = ""
// generate new random number 
      randomNumber = generatedNumber();
      console.log(`The random number is now :  ${randomNumber}`)
  });
  }
  