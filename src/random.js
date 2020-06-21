const generateNumberInRange = (min, max) => (
  Math.floor(Math.random() * (max + 1 - min)) + min
);

export default generateNumberInRange;
