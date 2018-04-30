const ones = [
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

function convertHunchos(n) {
  return n === 1000 ? `one thousand`
    : n === 0 ? `zero`
    : n > 99 ? `${ones[Math.floor(n / 100)]} hundred ${convertTens(n % 100)}`
    : convertTens(n);
}

function convertTens(n) {
  return n < 10 ? ones[n] 
    : n >= 10 && n < 20 ? teens[n - 10]
    : `${tens[Math.floor(n / 10)]} ${ones[n % 10]}`;
}

function makeText(content) {
  const div = document.createElement(`div`);
  div.textContent = content;
  document.body.appendChild(div);
}

function runNumbers(n) {
  for (let i = 1; i <= n; i++) {
    makeText(convertHunchos(i));
  }
}
