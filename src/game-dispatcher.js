import pair from '@hexlet/pairs';

const { car, cdr } = pair;

const findFunc = (funcName, collFunctions) => {
  for (const funcPair of collFunctions) {
    if (funcName === car(funcPair)) {
      return cdr(funcPair);
    }
  }

  return null;
};

const getMethod = (funcName, register) => {
  const gameFunctions = cdr(register);
  if (!gameFunctions) {
    throw new Error('Game register is empty');
  }

  const func = findFunc(funcName, gameFunctions);

  if (func === null) {
    throw new Error(`Unknown function '${funcName}'`);
  }

  return func;
};

const generateQuestion = (game) => getMethod('generateQuestion', game)();

const getUserAnswer = (game) => getMethod('getUserAnswer', game)();

const checkAnswer = (game, correctAnswer, answer) => getMethod('checkAnswer', game)(correctAnswer, answer);

export { generateQuestion, getUserAnswer, checkAnswer };
