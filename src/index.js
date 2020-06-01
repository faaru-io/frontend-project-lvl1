import readlineSync from 'readline-sync';
import greeting from './cli.js';
import { getQuestionText, getQuestionExpression, getCorrectAnswer } from './game-api.js';

const SHOTS = 3;
const STATUS_CORRECT = true;
const STATUS_INCORRECT = false;

const success = () => console.log('Correct!');

const gameOver = (name, answer, correct) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".`);
  console.log(`Let's try again, ${name}!`);
};

const showQuestion = (gameContainer) => {
  const questionText = getQuestionText(gameContainer);
  const questionExpression = getQuestionExpression(gameContainer);
  console.log(questionText);
  console.log(`Question: ${questionExpression}`);
};

const getUserAnswer = () => (
  readlineSync.question('Your answer:')
);

const checkAnswer = (correctAnswer, answer) => (
  correctAnswer === answer ? STATUS_CORRECT : STATUS_INCORRECT
);

const play = (game, gamer) => {
  const gameContainer = game();

  showQuestion(gameContainer);

  const correctAnswer = getCorrectAnswer(gameContainer);
  const gamerAnswer = getUserAnswer();
  const status = checkAnswer(correctAnswer, gamerAnswer);

  if (status === STATUS_CORRECT) {
    success();
  } else {
    gameOver(gamer, gamerAnswer, correctAnswer);
  }

  return status;
};

export default (game) => {
  const gamer = greeting();
  let shot = 1;
  let status = STATUS_INCORRECT;
  do {
    status = play(game, gamer);
    shot += 1;
  } while (shot <= SHOTS && status === STATUS_CORRECT);

  if (status === STATUS_CORRECT) {
    console.log(`Congratulations, ${gamer}!`);
  }
};
