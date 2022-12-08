export const whisper = (string) => {
  const result = `shh... ${
    string.toLowerCase().endsWith("!")
      ? string.toLowerCase().slice(0, string.length - 1)
      : string.toLowerCase()
  }`;
  return result;
};
