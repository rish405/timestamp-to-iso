# timestamp-to-iso

Tiny zero-dependency utility to convert timestamps to consistent UTC ISO-8601 strings.

## Install

```bash
npm i timestamp-to-iso
```

## Usage

```ts
import { toISO, isValidTimestamp } from 'timestamp-to-iso';

// Number in seconds
toISO(1577836800); // '2020-01-01T00:00:00.000Z'

// Number in milliseconds
toISO(1577836800000); // '2020-01-01T00:00:00.000Z'

// Date instance
toISO(new Date(1577836800000)); // '2020-01-01T00:00:00.000Z'

// Numeric or date-like strings
toISO('1577836800'); // '2020-01-01T00:00:00.000Z'
toISO('2020-01-01T00:00:00Z'); // '2020-01-01T00:00:00.000Z'

// Validate inputs
isValidTimestamp(1577836800); // true
isValidTimestamp('not-a-date'); // false
```

### CJS

```js
const { toISO, isValidTimestamp } = require('timestamp-to-iso');
```

## API

- `toISO(input)` — Converts `number | string | Date` to a UTC ISO-8601 string.
- `isValidTimestamp(input)` — Returns `true` if `input` can be converted to a valid timestamp.

## Notes

- Numbers `< 1e12` are treated as seconds, otherwise milliseconds.
- All outputs are normalized to UTC using `Date.toISOString()`.

