const validTime = (str) => {
  if (str.split(":").length !== 2) {
    return false;
  }
  const [hours, minutes] = str.split(":");
  if (hours < 0 || hours > 24 || minutes > 60 || minutes < 0) {
    return false;
  }
  return true;
};

console.log(validTime("23:58"));

console.log(validTime("2358"));
console.log(validTime("hello"));
