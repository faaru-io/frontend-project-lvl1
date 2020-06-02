import { getGameContainer } from '../game-container.js';
import { generateNumber, isEven } from '../number/number.js';

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';
const MAX_NUMBER = 100;

const getCorrectAnswer = (number) => (isEven(number) ? ANSWER_YES : ANSWER_NO);

const getQuestionText = () => (
  'Answer "yes" if the number is even, otherwise answer "no".'
);

const prepareQuestionPair = () => {
  const expression = generateNumber(MAX_NUMBER);
  const answer = getCorrectAnswer(expression);

  return [expression, answer];
};

export default () => {
  const [expression, answer] = prepareQuestionPair();

  return getGameContainer(getQuestionText(), expression, answer);
};
