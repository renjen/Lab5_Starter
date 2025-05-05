// sum.test.js

import { sum } from '../code-to-unit-test/sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('sum() function adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// INTENTIONALLY FAILING TEST
test('adds 1 + 2 to equal 4', () => {
  expect(1 + 2).toBe(4);  //  wrong on purpose
});