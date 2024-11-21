import { OPERATIONS } from "./constatnts.mjs";

export const operations = new Map([
  [OPERATIONS.ADD, (a, b) => a + b],
  [OPERATIONS.SUBTRACT, (a, b) => a - b],
  [OPERATIONS.MULTIPLY, (a, b) => a * b],
  [OPERATIONS.DIVIDE, (a, b) => a / b],
]);