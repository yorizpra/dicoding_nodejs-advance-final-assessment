import sum from './index.js';
import { describe, test, expect } from 'bun:test';

describe('sum function tests', () => {
  test('sum of two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('sum of a positive number and zero', () => {
    expect(sum(5, 0)).toBe(5);
  });

  test('sum of two zeros', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('sum of a positive number and a negative number', () => {
    expect(sum(5, -1)).toBe(0);
  });

  test('sum of two negative numbers', () => {
    expect(sum(-1, -2)).toBe(0);
  });

  test('sum with a non-number argument (string)', () => {
    expect(sum(1, '2')).toBe(0);
  });

  test('sum with a non-number argument (object)', () => {
    expect(sum(1, {})).toBe(0);
  });

  test('sum with a non-number argument (array)', () => {
    expect(sum(1, [])).toBe(0);
  });

  test('sum with a non-number argument (null)', () => {
    expect(sum(1, null)).toBe(0);
  });

  test('sum with a non-number argument (undefined)', () => {
    expect(sum(1, undefined)).toBe(0);
  });
});