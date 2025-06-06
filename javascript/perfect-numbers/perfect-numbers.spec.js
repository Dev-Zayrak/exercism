import { describe, expect, test, xtest } from '@jest/globals';
import { classify } from './perfect-numbers';

describe('Exercise - Perfect Numbers', () => {
  describe('Invalid Inputs', () => {
    test('Zero is rejected (not a natural number)', () => {
      expect(() => classify(0)).toThrow(
        new Error('Classification is only possible for natural numbers.'),
      );
    });

    test('Negative integer is rejected (not a natural number)', () => {
      expect(() => classify(-1)).toThrow(
        new Error('Classification is only possible for natural numbers.'),
      );
    });
  });

  describe('Perfect Numbers', () => {
    test('Smallest perfect number is classified correctly', () => {
      expect(classify(6)).toEqual('perfect');
    });

    test('Medium perfect number is classified correctly', () => {
      expect(classify(28)).toEqual('perfect');
    });

    test('Large perfect number is classified correctly', () => {
      expect(classify(33550336)).toEqual('perfect');
    });
  });

  describe('Abundant Numbers', () => {
    test('Smallest abundant number is classified correctly', () => {
      expect(classify(12)).toEqual('abundant');
    });

    test('Medium abundant number is classified correctly', () => {
      expect(classify(30)).toEqual('abundant');
    });

    test('Large abundant number is classified correctly', () => {
      expect(classify(33550335)).toEqual('abundant');
    });
  });

  describe('Deficient Numbers', () => {
    test('Edge case (no factors other than itself) is classified correctly', () => {
      expect(classify(1)).toEqual('deficient');
    });

    test('Smallest prime deficient number is classified correctly', () => {
      expect(classify(2)).toEqual('deficient');
    });

    test('Smallest non-prime deficient number is classified correctly', () => {
      expect(classify(4)).toEqual('deficient');
    });

    test('Medium deficient number is classified correctly', () => {
      expect(classify(32)).toEqual('deficient');
    });

    test('Large deficient number is classified correctly', () => {
      expect(classify(33550337)).toEqual('deficient');
    });
  });
});
