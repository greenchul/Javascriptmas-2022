function altCaps(str) {
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
}
altCaps("test");
console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
