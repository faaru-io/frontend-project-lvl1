import generateNumberBetween from '../number/number.js';

const FROM_NUMBER = 1;
const TO_NUMBER = 100;
const MIN_DIFFERENCE = 1;
const MAX_DIFFERENCE = 10;
const LENGTH_SEQUENCE = 10;
const QUESTION_TEXT = 'What number is missing in the progression?';

const generateSequence = (startElem, difference) => {
  let currentElem = startElem;
  const sequence = [startElem];
  for (let i = 1; i < LENGTH_SEQUENCE; i += 1) {
    currentElem = sequence[i - 1];
    sequence.push(currentElem + difference);
  }

  return sequence;
};

const prepareSequence = () => {
  const startElem = generateNumberBetween(FROM_NUMBER, TO_NUMBER);
  const difference = generateNumberBetween(MIN_DIFFERENCE, MAX_DIFFERENCE);

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
  const hiddenElemIndex = generateNumberBetween(0, LENGTH_SEQUENCE);

  const answer = prepareAnswer(sequence, hiddenElemIndex);
  const expression = prepareExpression(sequence, hiddenElemIndex);

  return [expression, String(answer)];
};

const generateRound = () => {
  const [expression, answer] = prepareQuestionPair();
  const question = [QUESTION_TEXT, expression];
  return [question, answer];
};

export default generateRound;
