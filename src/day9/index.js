function capitalizeWord(word) {
  const capitalisedWord = word
    .split("")
    .map((letter, index) => {
      if (index === 0) {
        return letter.toUpperCase();
      } else {
        return letter;
      }
    })
    .join("");
  return capitalisedWord;
}

function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => capitalizeWord(word))
    .join(" ");
}
