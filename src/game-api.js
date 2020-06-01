import pair from '@hexlet/pairs';

const { car, cdr, cons } = pair;

const getGameContainer = (questionText, questionExpression, correctAnswer) => (
  cons(correctAnswer, cons(questionText, questionExpression))
);

const getQuestionText = (container) => car(cdr(container));

const getQuestionExpression = (container) => cdr(cdr(container));

const getCorrectAnswer = (container) => car(container);

export {
  getGameContainer, getQuestionText, getQuestionExpression, getCorrectAnswer,
};
