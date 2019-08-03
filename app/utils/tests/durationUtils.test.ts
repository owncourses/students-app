import {
  parseDurationInMinutesToString,
  parseToTwoDigitNumber
} from "../durationUtils";

describe("durationUtils", () => {
  describe("parseDurationInMinutesToString", () => {
    it("should return hours and minutest when input bigger than 60", () => {
      const expectedValue = "1:10";
      const fixture = parseDurationInMinutesToString(70);
      expect(fixture).toEqual(expectedValue);
    });

    it("should return only minutes when input lower than 60", () => {
      const expectedValue = "50";
      const fixture = parseDurationInMinutesToString(50);
      expect(fixture).toEqual(expectedValue);
    });

    it("should return 0 when no input", () => {
      const expectedValue = "00";
      const fixture = parseDurationInMinutesToString();
      expect(fixture).toEqual(expectedValue);
    });
  });

  describe("parseToTwoDigitNumber", () => {
    it("should return number with 0 at first digit when input lower than 10", () => {
      const expectedValue = "05";
      const fixture = parseToTwoDigitNumber(5);
      expect(fixture).toEqual(expectedValue);
    });

    it("should return not modified number when input bigger than 10", () => {
      expect(parseToTwoDigitNumber(10)).toEqual("10");
      expect(parseToTwoDigitNumber(100)).toEqual("100");
      expect(parseToTwoDigitNumber(1000)).toEqual("1000");
    });
  });
});
