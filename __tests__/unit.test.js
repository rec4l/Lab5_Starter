// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('(123)-456-7890 is phone number', () => {
  expect(isPhoneNumber('(123)-456-7890')).toBe(true);
});

test('123-456-7890 is phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('(123)-456-789d is not phone number', () => {
  expect(isPhoneNumber('(123)-456-789d')).toBe(false);
});

test('apple is not phone number', () => {
  expect(isPhoneNumber('apple')).toBe(false);
});

test('jmn003@ucsd.edu is valid email', () => {
  expect(isEmail('jmn003@ucsd.edu')).toBe(true);
});

test('qwerty@tetyey.bfd is valid email', () => {
  expect(isEmail('qwerty@tetyey.bfd')).toBe(true);
});

test('apple@apple.apple is not valid email', () => {
  expect(isEmail('apple@apple.apple')).toBe(false);
});

test('banana is valid email', () => {
  expect(isEmail('banana')).toBe(false);
});

test('abcd is strong password', () => {
  expect(isStrongPassword('abcd')).toBe(true);
});

test('A1b2C3d4 is strong password', () => {
  expect(isStrongPassword('A1b2C3d4')).toBe(true);
});

test('aaa is not strong password', () => {
  expect(isStrongPassword('aaa')).toBe(false);
});

test('!@#$% is not strong password', () => {
  expect(isStrongPassword('!@#$%')).toBe(false);
});

test('1/2/2023 is valid date', () => {
  expect(isDate('1/2/2023')).toBe(true);
});

test('32/32/2023 is valid date', () => {
  expect(isDate('32/32/2023')).toBe(true);
});

test('2004/05/05 is not valid date', () => {
  expect(isDate('2004/05/05')).toBe(false);
});

test('boys is not valid date', () => {
  expect(isDate('boys')).toBe(false);
});

test('#000 is valid hex color', () => {
  expect(isHexColor('#000')).toBe(true);
});

test('000000 is valid hex color', () => {
  expect(isHexColor('000000')).toBe(true);
});

test('000g is not hex color', () => {
  expect(isHexColor('000g')).toBe(false);
});

test('0abcdef is not hex color', () => {
  expect(isHexColor('0abcdef')).toBe(false);
});
