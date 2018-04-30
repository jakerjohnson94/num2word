const single = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];
const tens = [
  "",
  "ten",
  "twenty",
  "thirty",
  "fourty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];
const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];

function makeText(content) {
  const div = document.createElement("div");
  div.textContent = content;
  //  const wrap = document.getElementById('wrap');
  document.body.appendChild(div);
}

function convertHunchos(n) {
  return n === 1000
    ? "one thousand"
    : n > 99
      ? `${single[Math.floor(n / 100)]} hundred ${convertTens(n % 100)}`
      : convertTens(n);
}

function convertTens(n) {
  return n < 10
    ? single[n]
    : n >= 10 && n < 20
      ? teens[n - 10]
      : `${tens[Math.floor(n / 10)]} ${single[n % 10]}`;
}

function convert(n) {
  return n === 0 ? "zero" : convertHunchos(n);
}

function runNumbers(n) {
  for (let i = 1; i <= n; i++) {
    const n = convert(i);
    makeText(n);
  }
}
