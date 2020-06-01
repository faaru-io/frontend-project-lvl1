import greeting from './cli.js';
import { generateQuestion, getUserAnswer, checkAnswer } from './game-dispatcher.js';

const SHOTS = 3;
const STATUS_CORRECT = true;
const STATUS_INCORRECT = false;

const success = () => console.log('Correct!');

const gameOver = (name, answer, correct) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".`);
  console.log(`Let's try again, ${name}!`);
};

const play = (game, gamer) => {
  const correctAnswer = generateQuestion(game);
  const gamerAnswer = getUserAnswer(game);
  const status = checkAnswer(game, correctAnswer, gamerAnswer);

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
