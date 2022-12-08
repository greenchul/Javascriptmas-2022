import { altCaps } from "./index.js";

describe("altCaps", () => {
  it("Should return a string", () => {
    const result = altCaps("test");

    expect(typeof result).toBe("string");
  });
  it("Should return a string that alternates between upper and lower case", () => {
    const result = altCaps("test");

    result.split("").forEach((letter, index) => {
      if (index % 2 === 0) {
        expect(letter).toBe(letter.toUpperCase());
      } else {
        expect(letter).toBe(letter.toLowerCase());
      }
    });
  });
});
