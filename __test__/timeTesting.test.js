const getTime = require("../functions/timeTesting");

describe("Test cases:", () => {
  test("Case 1", () => {
    expect(getTime(50000000)).toBe("13 hours 53 minutes 20 seconds");
  });
  test("Case 2", () => {
    expect(getTime(150000000)).toBe("17 hours 40 minutes 0 seconds");
  });
  test("Case 3", () => {
    expect(getTime(250000000)).toBe("21 hours 26 minutes 40 seconds");
  });
  test("Case 4", () => {
    expect(getTime(53450000)).toBe("14 hours 50 minutes 50 seconds");
  });
  test("Case 5", () => {
    expect(getTime(1900000)).toBe("0 hours 31 minutes 40 seconds");
  });
});
