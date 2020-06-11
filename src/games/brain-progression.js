import generateNumber from '../number.js';

const min = 1;
const max = 100;
const minDifference = 1;
const maxDifference = 10;
const lengthSequence = 10;
const gameDescription = 'What number is missing in the progression?';

const generateSequence = (startElem, diff) => {
  const sequence = [];
  for (let i = 0; i < lengthSequence; i += 1) {
    sequence.push(startElem + diff * i);
  }

  return sequence;
};

const prepareQuestion = (sequence, hiddenElemIndex) => {
  const expressionItems = [...sequence];
  expressionItems[hiddenElemIndex] = '..';

  return expressionItems.join(' ');
};

const generateRound = () => {
  const startElem = generateNumber(min, max);
  const difference = generateNumber(minDifference, maxDifference);
  const sequence = generateSequence(startElem, difference);
  const hiddenElemIndex = generateNumber(0, lengthSequence);

  const question = prepareQuestion(sequence, hiddenElemIndex);
  const answer = sequence[hiddenElemIndex];

  return [question, String(answer)];
};

export { gameDescription, generateRound };
