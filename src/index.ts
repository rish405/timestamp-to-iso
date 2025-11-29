export type TimestampInput = number | string | Date;

const toMs = (x: TimestampInput): number => {
  if (x instanceof Date) return x.getTime();
  if (typeof x === "number") {
    if (!isFinite(x)) throw new Error("Invalid");
    return x < 1e12 ? x * 1000 : x;
  }
  if (typeof x === "string") {
    if (!x.trim()) throw new Error("Invalid");
    const n = Number(x);
    if (!isNaN(n)) return n < 1e12 ? n * 1000 : n;
    const p = Date.parse(x);
    if (isNaN(p)) throw new Error("Invalid");
    return p;
  }
  throw new Error("Invalid");
};

export const isValidTimestamp = (x: unknown): boolean => {
  try {
    return !isNaN(new Date(toMs(x as TimestampInput)).getTime());
  } catch {
    return false;
  }
};

export const toISO = (x: TimestampInput): string => {
  const d = new Date(toMs(x));
  return d.toISOString();
};
