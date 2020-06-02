import readlineSync from 'readline-sync';
import greeting from './cli.js';
import { getQuestionText, getQuestionExpression, getCorrectAnswer } from './game-container.js';

const SHOTS = 3;
const ANSWER_CORRECT = true;
const ANSWER_WRONG = false;

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

const getGamerAnswer = () => (
  readlineSync.question('Your answer:')
);

const checkAnswer = (correctAnswer, answer) => (
  correctAnswer === answer ? ANSWER_CORRECT : ANSWER_WRONG
);

const play = (game, gamer) => {
  const gameContainer = game();

  showQuestion(gameContainer);

  const correctAnswer = getCorrectAnswer(gameContainer);
  const gamerAnswer = getGamerAnswer();
  const status = checkAnswer(correctAnswer, gamerAnswer);

  if (status === ANSWER_CORRECT) {
    success();
  } else {
    gameOver(gamer, gamerAnswer, correctAnswer);
  }

  return status;
};

export default (game) => {
  const gamer = greeting();
  let shot = 1;
  let status = ANSWER_WRONG;
  do {
    status = play(game, gamer);
    shot += 1;
  } while (shot <= SHOTS && status === ANSWER_CORRECT);

  if (status === ANSWER_CORRECT) {
    console.log(`Congratulations, ${gamer}!`);
  }
};
