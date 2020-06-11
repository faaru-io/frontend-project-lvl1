import readlineSync from 'readline-sync';

const steps = 3;

export default (gameDescription, generateRoundFunc) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let step = 1;
  let result;
  do {
    const [question, correctAnswer] = generateRoundFunc();
    console.log(gameDescription);
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Your answer:');

    result = gamerAnswer === correctAnswer;

    if (result) {
      console.log('Correct!');
    } else {
      console.log(`"${gamerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    }

    step += 1;
  } while (step <= steps && result);

  if (result) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
