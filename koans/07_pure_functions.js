describe("Pure functions", () => {
  describe("Implement impure append function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // append :: ([a], a) -> [a]
    const append = (array, element) => {
      array.push(element)
      return array
    }
    /***************************************************************/

    test("mutates passed array", () => {
      const array = [1, 2, 3];
      append(array, 4);
      expect(array).toEqual([1, 2, 3, 4]);
    });

    test("adds a value at the end", () => {
      expect(append([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    });

    test("returns the same array", () => {
      const array = [1, 2, 3];
      const actual = append(array, 4);
      expect(actual).toBe(array);
    });
  });

  describe("Implement append but as a pure function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // append :: ([a], a) -> [a]
    const append = (array, element) => {
      return [...array, element]
    }

    /***************************************************************/

    test("doesn't mutate passed array", () => {
      const array = [1, 2, 3];
      append(array, 4);
      expect(array).not.toEqual([1, 2, 3, 4]);
    });

    test("adds a value at the end", () => {
      expect(append([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    });

    test("returns a different array", () => {
      const array = [1, 2, 3];
      const actual = append(array, 4);
      expect(actual).not.toBe(array);
    });
  });
});
