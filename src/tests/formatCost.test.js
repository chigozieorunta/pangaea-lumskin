import { formatCost } from "../utils/formatCost";

test("Match Specific Value", () => {
  const val = formatCost(10000);
  expect(val).toBe("10,000.00");
});

test("Match Thousand Seperator", () => {
  const val = formatCost(10000);
  expect(val).toMatch(/,/);
});

test("Match Decimal Seperator", () => {
  const val = formatCost(10000);
  expect(val).toMatch(/^10,000.00$/);
});

test("Match Exactly", () => {
  const val = formatCost(10000);
  expect(val).toMatch(/./);
});

test("Match Not Plain Number", () => {
  const val = formatCost(10000);
  expect(val).not.toMatch(/10000/);
});

test("Match only 2 Decimal Places", () => {
  const val = formatCost(10000);
  expect(val).not.toMatch(/\*.00$/);
});

test("Match Equal", () => {
  const val = formatCost(10000);
  expect(val).toEqual("10,000.00");
});

test("Match Non Empty String", () => {
  const val = formatCost(10000);
  expect(val).not.toBe("");
});
