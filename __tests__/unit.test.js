// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('valid email: test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('invalid email: test@.com', () => {
  expect(isEmail('test@.com')).toBe(false);
});

test('strong password: Abcd1234', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('weak password: 123', () => {
  expect(isStrongPassword('123')).toBe(false);
});

test('valid date: 12/31/2023', () => {
  expect(isDate('12/31/2023')).toBe(true);
});

test('invalid date: 2023/12/31', () => {
  expect(isDate('2023/12/31')).toBe(false);
});

test('valid hex color: #ABC123', () => {
  expect(isHexColor('#ABC123')).toBe(true);
});

test('invalid hex color: #12345G', () => {
  expect(isHexColor('#12345G')).toBe(false);
});