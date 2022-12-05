import { whisper } from "./index";

describe("whisper function", () => {
  it("should return a string", () => {
    const result = whisper("test");

    expect(typeof result).toBe("string");
  });
  it("should not have an exclamation mark at the end", () => {
    const result = whisper("test!");
    const lastChar = result.slice(-1);

    expect(lastChar).not.toBe("!");
  });
  it("should be lower case", () => {
    const result = whisper("TEST");

    result.split("").forEach((letter) => {
      expect(letter).toEqual(letter.toLowerCase());
    });
  });
  it("should start with shh...", () => {
    const result = whisper("test!");
    const firstChars = result.slice(0, 6);

    expect(firstChars).toEqual("shh...");
  });
});
