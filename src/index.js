import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const [gameDescription, generateRound] = game();

  let counter = roundsCount;
  do {
    const [question, correctAnswer] = generateRound();
    console.log(gameDescription);
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Your answer:');

    if (gamerAnswer !== correctAnswer) {
      console.log(`"${gamerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    counter -= 1;
  } while (counter > 0);

  console.log(`Congratulations, ${name}!`);
};
