describe("Recursion", () => {
  describe("Implement factorial function using recursion", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // fact :: Number → Number
    const fact = number => {
      if (number <= 1) {
        return 1
      }

      return number * fact(number - 1)
    }

    /***************************************************************/

    test("gives mathematicaly correct result", () => {
      expect([0, 1, 2, 3, 4, 5].map(fact)).toEqual([1, 1, 2, 6, 24, 120]);
    });
  });

  describe("Implement tail-optimized factorial function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // fact :: Number → Number
    const fact = number => {
      if (number <= 1) {
        return 1
      }

      const helper = (number, state, result = 1) => {
        if (state === 0) return result
        return helper(number, state - 1, result * state)
      }

      return helper(number, number)
    }

    /***************************************************************/

    test("gives mathematicaly correct result", () => {
      expect([0, 1, 2, 3, 4, 5].map(fact)).toEqual([1, 1, 2, 6, 24, 120]);
    });
  });

  describe("Implement fibonacci function using recursion", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // fib :: Number → Number
    const fib = index => {
      if (index === 0) return 0
      if (index <= 2) return 1

      return fib(index - 1) + fib(index - 2)
    }

    /***************************************************************/

    test("maps n-th element to it's value", () => {
      expect([0, 1, 2, 3].map(fib)).toEqual([0, 1, 1, 2]);
      expect([15, 20, 25, 30].map(fib)).toEqual([610, 6765, 75025, 832040]);
    });
  });

  describe("Implement tail-optimized fibonacci function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // fact :: Number → Number
    const fib = (index) => {
      if (index === 0) return 0

      const helper = (index, next = 1, current = 1) => {
        if (index === 1) return current
        return helper(index - 1, next + current, next)
      }

      return helper(index)
    }

    /***************************************************************/

    test("maps n-th element to it's value", () => {
      expect([0, 1, 2, 3].map(fib)).toEqual([0, 1, 1, 2]);
      expect([15, 20, 25, 30].map(fib)).toEqual([610, 6765, 75025, 832040]);
    });
  });
});
