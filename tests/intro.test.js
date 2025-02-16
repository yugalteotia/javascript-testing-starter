import { describe, it, test, expect } from "vitest";
import { calculateAverage, calculateFactorial, fizzBuzz, max } from "../src/intro";

describe('max', () => {

    it('should return first argument if its greater', () => {

        // arrange
        const a = 4;
        const b = 3;

        // act
        const result = max(a, b);

        // verify
        expect(result).toBe(a);
    })

    it('should return second argument if its greater', () => {

        // arrange
        const a = 3;
        const b = 6;

        // act
        const result = max(a, b);

        // verify
        expect(result).toBe(b);
    })

    it('should return first argument if both are equal', () => {

        // arrange
        const a = 4;
        const b = 4;

        // act
        const result = max(a, b);

        // verify
        expect(result).toBe(a);
    })
})

describe('fizzBuzz', () => {

    it('should return FizzBuzz if divisible by both 3 and 5', () => {

        const n = 15;

        const result = fizzBuzz(n);

        expect(result).toBe("FizzBuzz");
    })

    it('should return Fizz if only divisible by 3', () => {
        expect(fizzBuzz(21)).toBe("Fizz");
    })

    it('should return Buzz if only divisible by 5', () => {
        expect(fizzBuzz(25)).toBe("Buzz");
    })

    it('should return the argument if neither divisible by 3 nor by 5', () => {
        expect(fizzBuzz(17)).toBe("17");
    })
})

describe('calculateAverage', () => {

    it('should return NaN if an empty array is passed', () => {

        const arr = [];

        const result = calculateAverage(arr);

        expect(result).toBe(NaN);
    })

    it('should return the single element in array if array has only one element', () => {

        const arr = [3];

        const result = calculateAverage(arr);

        expect(result).toBe(3);
    })

    it('should return the avg if an array has 2 elements', () => {

        const arr = [3, 4];

        const result = calculateAverage(arr);

        expect(result).toBe(3.5);
    })

    it('should return the sum of all the elements in an array', () => {

        expect(calculateAverage([3, 8, 2, 0, 7])).toBe(4);
    })
})

describe('calculateFactorial', () => {

    it('should return NaN if argument provided is not a number', () => {
        expect(calculateFactorial(NaN)).toBe(NaN);
    })

    it('should return 1 if argument is 0', () => expect(calculateFactorial(0)).toBe(1));

    it('should return factorial of the number', () => {
        expect(calculateFactorial(7)).toBe(5040)
    })

    it('should return undefined if argument is a negative number', () => {
        expect(calculateFactorial(-1)).toBe(undefined);
    })
})