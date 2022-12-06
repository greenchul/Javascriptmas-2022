import { getRandomNumberOfTacos } from "./index";

describe("getRandomNumberOfTacos", () => {
  it("Should return an array", () => {
    const result = getRandomNumberOfTacos();

    expect(Array.isArray(result)).toBe(true);
  });
  it("Should return an array with tacos", () => {
    const result = getRandomNumberOfTacos();

    result.forEach((index) => {
      expect(index).toBe("🌮");
    });
  });
});
