import generateNumberInRange from '../random.js';

const min = 1;
const max = 100;
const minDifference = 1;
const maxDifference = 10;
const sequenceLength = 10;
const gameDescription = 'What number is missing in the progression?';

const generateSequence = (startingElement, diff) => {
  const sequence = [];
  for (let i = 0; i < sequenceLength; i += 1) {
    sequence.push(startingElement + diff * i);
  }

  return sequence;
};

const prepareQuestion = (sequence, itemIndex) => {
  const sequenceItems = [...sequence];
  sequenceItems[itemIndex] = '..';

  return sequenceItems.join(' ');
};

const generateRound = () => {
  const startingElement = generateNumberInRange(min, max);
  const difference = generateNumberInRange(minDifference, maxDifference);
  const sequence = generateSequence(startingElement, difference);
  const hiddenElementIndex = generateNumberInRange(0, sequenceLength - 1);

  const question = prepareQuestion(sequence, hiddenElementIndex);
  const answer = sequence[hiddenElementIndex];

  return [question, String(answer)];
};

export default () => [gameDescription, generateRound];
