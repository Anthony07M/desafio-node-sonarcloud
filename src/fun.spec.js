const { sum, div, sub, times } = require("./fun.js");

describe("Unit Test Functions", () => {

  test("shoudl be 3 + 5 to equal 8", () => {
    const result = sum(3, 5);

    expect(result).toBe(8)
  });

  test("shoudl be 10 / 5 to equal 2", () => {
    const result = div(10, 5);

    expect(result).toBe(2)
  });

  test("shoudl be 5 - 3 to equal 2", () => {
    const result = sub(5, 3);

    expect(result).toBe(2)
  });

  test("shoudl be 3 * 5 to equal 15", () => {
    const result = times(3, 5);

    expect(result).toBe(15)
  });

});
