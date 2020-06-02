import { generateNumber } from '../number/number.js';
import { getGameContainer } from '../game-api.js';

const MAX_NUMBER = 100;
const MAX_DIFFERENCE = 10;
const LENGTH_SEQUENCE = 10;

const generateSequence = (startElem, difference) => {
  let currentElem = startElem;
  const sequence = [startElem];
  for (let i = 1; i < LENGTH_SEQUENCE; i += 1) {
    currentElem = sequence[i - 1];
    sequence.push(currentElem + difference);
  }

  return sequence;
};

const getQuestionText = () => (
  'What number is missing in the progression?'
);

const prepareQuestionPair = () => {
  const startElem = generateNumber(MAX_NUMBER);
  const difference = generateNumber(MAX_DIFFERENCE);
  const sequence = generateSequence(startElem, difference);

  const hiddenElemIndex = generateNumber(LENGTH_SEQUENCE);

  const answer = sequence[hiddenElemIndex];
  sequence[hiddenElemIndex] = '..';
  const expression = sequence.join(' ');

  return [expression, String(answer)];
};

export default () => {
  const [expression, answer] = prepareQuestionPair();

  return getGameContainer(getQuestionText(), expression, answer);
};
