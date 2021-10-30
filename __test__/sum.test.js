const add = require("../functions/add.js");

test("adds 4 + 4 to equal 8", () => {
  expect(add(4, 4)).toBe(8);
});
