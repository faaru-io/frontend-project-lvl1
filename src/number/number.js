const generateNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const isEven = (number) => number % 2 === 0;

export { generateNumber, isEven };
