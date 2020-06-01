import readlineSync from 'readline-sync';
import pair from '@hexlet/pairs';
import { generateNumber, isEven } from '../number/number.js';

const { cons } = pair;

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';
const MAX_NUMBER = 100;
const STATUS_CORRECT = true;
const STATUS_INCORRECT = false;

const getCorrectAnswer = (number) => (isEven(number) ? ANSWER_YES : ANSWER_NO);

const generateQuestion = () => {
  const number = generateNumber(MAX_NUMBER);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${number}`);

  return getCorrectAnswer(number);
};

const getUserAnswer = () => (
  readlineSync.question('Your answer:')
);

const checkAnswer = (correct, answer) => {
  if (answer !== ANSWER_YES && answer !== ANSWER_NO) {
    return STATUS_INCORRECT;
  }

  return correct === answer ? STATUS_CORRECT : STATUS_INCORRECT;
};

const getGame = () => (
  cons('brain-even', [
    cons('generateQuestion', generateQuestion),
    cons('getUserAnswer', getUserAnswer),
    cons('checkAnswer', checkAnswer),
  ])
);

export {
  getGame,
  generateQuestion,
  getUserAnswer,
  checkAnswer,
};
