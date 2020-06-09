const generateNumberBetween = (min, max) => (
  Math.floor(Math.random() * (max - min)) + min
);

export default generateNumberBetween;
