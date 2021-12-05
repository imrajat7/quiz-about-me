const readlineSync = require('readline-sync');

let score = 0;

let questionsToBeAsked = [
  {
    question: "What is Rajat's surname? ",
    answer: "Sharma",
  },
  {
    question: "Where do Rajat live? ",
    answer: "Jammu",
  },
  {
    question: "Which is Rajat birthday month? ",
    answer: "August"
  },
  {
    question: "What is Rajat's age? ",
    answer: "23",
  },
  {
    question: "With which organization Rajat is linked? ",
    answer: "Meddo",
  }
]

function welcome() {
  console.log("Hi there");
  const userName = readlineSync.question("What's your good name? ");

  console.log(`Hello ${userName.toUpperCase()}, Welcome to Rajat's Quiz. In this you have to answer some questions.`);
}

const topScorers = [
  {
    name: "Rajat",
    score: 40,
  },
  {
    name: "Akhil",
    score: 30,
  }
]

function play() {
  function putQuestion(number, question, answer) {

    const userAnswer = readlineSync.question(`Q${number + 1}) ${question}`);

    console.log(`Answer given: ${userAnswer}`)

    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      console.log('You are right.');
      score += 10;
    } else {
      console.log('You are wrong');
    }
    console.log(`------------ Current score: ${score} ------------`);
  }

  for (let i = 0; i < questionsToBeAsked.length; i++) {
    console.log();
    putQuestion(i, questionsToBeAsked[i].question, questionsToBeAsked[i].answer, questionsToBeAsked[i].options)
    console.log();
    const exitSelected = readlineSync.question("Press q to exit and any other button to continue ");
    if (exitSelected === 'q')
      break;
  }

  console.log();
  console.log(`Total Score: ${score}`)
  console.log();
}

function leaderBoard() {
  console.log("---------- Leaderboard ----------")
  for (let i = 0; i < topScorers.length; i++) {
    console.log(`${i + 1}   ${topScorers[i].name}   ${topScorers[i].score}`)
  }
}

welcome();
play();
leaderBoard();


