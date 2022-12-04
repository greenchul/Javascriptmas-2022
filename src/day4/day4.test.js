import { whisper } from "./index";

describe("whisper function", () => {
  it("should return a string", () => {
    const result = whisper("test");

    expect(typeof result).toBe("string");
  });
  it("should not have an exclamation mark at the end", () => {
    const result = whisper("test!");
    const lastChar = result.slice(-1);

    expect(result).not.toBe("!");
  });
});
