export const getRandomNumberOfTacos = () => {
  const numberOfTacos = Math.floor(Math.random() * 10) + 1;
  const result = new Array(numberOfTacos).fill("🌮");
  return result;
};
