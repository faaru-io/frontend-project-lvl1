import pair from '@hexlet/pairs';

const { car, cdr } = pair;

const findAction = (actionName, collActions) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const map of collActions) {
    if (actionName === car(map)) {
      return cdr(map);
    }
  }

  return null;
};

const getAction = (action, register) => {
  const gameActions = cdr(register);
  if (!gameActions) {
    throw new Error('Game register is empty');
  }

  const func = findAction(action, gameActions);

  if (func === null) {
    throw new Error(`Unknown action '${action}'`);
  }

  return func;
};

const generateQuestion = (game) => getAction('generateQuestion', game)();

const getUserAnswer = (game) => getAction('getUserAnswer', game)();

const checkAnswer = (game, correctAnswer, answer) => getAction('checkAnswer', game)(correctAnswer, answer);

export { generateQuestion, getUserAnswer, checkAnswer };
