export const altCaps = (str) => {
  return str
    .split("")
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
};
