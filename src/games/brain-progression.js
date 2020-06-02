import { generateNumber } from '../number/number.js';
import { getGameContainer } from '../game-container.js';

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

const prepareSequence = () => {
  const startElem = generateNumber(MAX_NUMBER);
  const difference = generateNumber(MAX_DIFFERENCE);

  return generateSequence(startElem, difference);
};

const prepareAnswer = (sequence, hiddenElemIndex) => sequence[hiddenElemIndex];

const prepareExpression = (sequence, hiddenElemIndex) => {
  const expressionItems = [...sequence];
  expressionItems[hiddenElemIndex] = '..';

  return expressionItems.join(' ');
};

const prepareQuestionPair = () => {
  const sequence = prepareSequence();
  const hiddenElemIndex = generateNumber(LENGTH_SEQUENCE);

  const answer = prepareAnswer(sequence, hiddenElemIndex);
  const expression = prepareExpression(sequence, hiddenElemIndex);

  return [expression, String(answer)];
};

export default () => {
  const [expression, answer] = prepareQuestionPair();

  return getGameContainer(getQuestionText(), expression, answer);
};
