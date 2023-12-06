import { asLines } from "./util.mjs";

const input_val = asLines("day1_input.txt");

let sum = 0;

input_val.forEach((line) => {
  const firstDigit = line.match(/\d/);
  const lastDigit = line.match(/\d(?=\D*$)/);

  if (firstDigit && lastDigit) {
    const combinedNumber = parseInt(firstDigit[0] + lastDigit[0]);

    sum += combinedNumber;
  }
});

console.log("Total calibration value:", sum);
