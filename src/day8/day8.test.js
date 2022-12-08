import { validTime } from "./index";

describe("validTime", () => {
  it("Should return a boolean", () => {
    const result = validTime("test");

    expect(typeof result).toBe("boolean");
  });
  it("Should return false if hour is not valid", () => {
    const result = validTime("25:42");

    expect(result).toBeFalsy();
  });
  it("Should return false if minutes not valid", () => {
    const result = validTime("23:99");

    expect(result).toBeFalsy();
  });
  it("Should return false if not both minutes and hours are not valid", () => {
    const result = validTime("73:99");

    expect(result).toBeFalsy();
  });
  it("Should return false if not in time format", () => {
    const result = validTime("733:99");

    expect(result).toBeFalsy();
  });
  it("Should return false if not in time format", () => {
    const result = validTime("te:st");

    expect(result).toBeFalsy();
  });
  it("Should return true if valid time", () => {
    const result = validTime("21:56");

    expect(result).toBeTruthy();
  });
});
