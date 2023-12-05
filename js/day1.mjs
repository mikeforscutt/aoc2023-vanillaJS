import { asLines } from "./util.mjs";

const lineToCalibrationValueA = (line) => {
  const first = line.match(/^[^\d]*(\d)/)[1];
  const last = line.match(/(\d)[^\d]*$/)[1];
  return parseInt(first + last);
};

const day1a = asLines("day1_input.txt")
  .map(lineToCalibrationValueA)
  .reduce((a, b) => a + b, 0);

console.log(`day1 part a: ${day1a}`);
