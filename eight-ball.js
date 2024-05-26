// store the user's name
let userName = ""

// if user name is empty say hello otherwise greet them by their name
userName ?
  console.log(`Hello," ${userName}!`):
  console.log("Hello")


// hardcode a question to ask the 8 ball
let userQuestion = "will I have a good day?"

// log the user's name and repeat their question
console.log(`Hi ${userName}, your question is "${userQuestion}".`)

// generate a random number from 0 - 7
let randomNumber = Math.floor(Math.random() * 8)

// set an empty string to store the 8 ball response
let eightBall = ""
// conditionals to generate 8 ball response
switch (randomNumber){
  case 0:
  eightBall = ('It is certain')
  break;
  case 1:
  eightBall = ('It is decidedly so')
  break;
  case 2:
  eightBall = ('Reply hazy try again')
  break;
  case 3:
  eightBall = ('Cannot predict now')
  break;
  case 4:
  eightBall = ('Do not count on it')
  break;
  case 5:
  eightBall = ('My sources say no')
  break;
  case 6:
  eightBall = ('Outlook not so good')
  break;
  case 7:
  eightBall = ('Signs point to yes')
  break;

}

console.log(eightBall)
