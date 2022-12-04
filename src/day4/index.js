export const whisper = (string) => {
  const result = `shh... ${
    string.toLowerCase().endsWith("!")
      ? string.toLowerCase().slice(0, string.length - 1)
      : string.toLowerCase()
  }`;
  return result;
};

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
