// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// ✅ isPhoneNumber
test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid phone number: abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// ✅ isEmail
test('valid email: test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email: test123@email.com', () => {
  expect(isEmail('test123@email.com')).toBe(true);
});
test('invalid email: test@.com', () => {
  expect(isEmail('test@.com')).toBe(false);
});
test('invalid email: user@domain', () => {
  expect(isEmail('user@domain')).toBe(false);
});

// ✅ isStrongPassword
test('strong password: Abcd1234', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});
test('strong password: passWord1', () => {
  expect(isStrongPassword('passWord1')).toBe(true);
});
test('weak password: 123', () => {
  expect(isStrongPassword('123')).toBe(false);
});
test('weak password: ab', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// ✅ isDate
test('valid date: 12/31/2023', () => {
  expect(isDate('12/31/2023')).toBe(true);
});
test('valid date: 01/01/2020', () => {
  expect(isDate('01/01/2020')).toBe(true);
});
test('invalid date: 2023/12/31', () => {
  expect(isDate('2023/12/31')).toBe(false);
});
test('invalid date: 31/12/2023', () => {
  expect(isDate('13-12-2023')).toBe(false);
});

// ✅ isHexColor
test('valid hex color: #ABC123', () => {
  expect(isHexColor('#ABC123')).toBe(true);
});
test('valid hex color: #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('invalid hex color: #12345G', () => {
  expect(isHexColor('#12345G')).toBe(false);
});
test('invalid hex color: 123456', () => {
  expect(isHexColor('#12G45Z')).toBe(false);
});