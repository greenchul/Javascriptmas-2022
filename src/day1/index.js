const panic = (string) => {
  return string.toUpperCase().split(" ").join(" 😱 ");
};

// Test your function
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
