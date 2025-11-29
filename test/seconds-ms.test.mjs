import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toISO, isValidTimestamp } from '../dist/index.js';

test('seconds vs milliseconds produce same ISO-8601', () => {
  const seconds = 1577836800; // 2020-01-01T00:00:00Z
  const millis = 1577836800000;
  const isoS = toISO(seconds);
  const isoMs = toISO(millis);
  assert.equal(isoS, '2020-01-01T00:00:00.000Z');
  assert.equal(isoMs, '2020-01-01T00:00:00.000Z');
});

test('numeric strings handled as seconds or ms', () => {
  assert.equal(toISO('1577836800'), '2020-01-01T00:00:00.000Z');
  assert.equal(toISO('1577836800000'), '2020-01-01T00:00:00.000Z');
});

test('Date input yields ISO UTC', () => {
  const d = new Date(1577836800000);
  assert.equal(toISO(d), '2020-01-01T00:00:00.000Z');
});

test('isValidTimestamp detects validity', () => {
  assert.equal(isValidTimestamp(1577836800), true);
  assert.equal(isValidTimestamp('1577836800'), true);
  assert.equal(isValidTimestamp('2020-01-01T00:00:00Z'), true);
  assert.equal(isValidTimestamp(''), false);
  assert.equal(isValidTimestamp('not-a-date'), false);
});

