// module.exports = 
module.exports = function toReadable(number) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',]

  const numbersToTwenty = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',]

  const dozens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
    'hundred',
  ]

  let result = '';
  let countOfChar = String(number);

  if (countOfChar.length === 1) {
    result += numbers[number];

  } else if (countOfChar.length === 2 && countOfChar[0] == '1') {
    result += numbersToTwenty[countOfChar[1]];

  } else if (countOfChar.length === 2 && countOfChar[0] > '1' && countOfChar[1] > '0') {
    result += `${dozens[countOfChar[0]]} ${numbers[countOfChar[1]]}`;

  } else if (countOfChar.length === 2 && countOfChar[0] > '1' && countOfChar[1] == '0') {
    result += `${dozens[countOfChar[0]]}`;

  } else if (countOfChar.length === 3 && countOfChar[1] == '0' && countOfChar[2] == '0') {
    result += `${numbers[countOfChar[0]]} hundred`;

  } else if (countOfChar.length === 3 && countOfChar[1] == '0' && countOfChar[2] > '0') {
    result += `${numbers[countOfChar[0]]} hundred ${numbers[countOfChar[2]]}`;

  } else if (countOfChar.length === 3 && countOfChar[1] == '1') {
    result += `${numbers[countOfChar[0]]} hundred ${numbersToTwenty[countOfChar[2]]}`;

  } else if (countOfChar.length === 3 && countOfChar[1] > '1' && countOfChar[2] == '0') {
    result += `${numbers[countOfChar[0]]} hundred ${dozens[countOfChar[1]]}`;
  } else {
    result += `${numbers[countOfChar[0]]} hundred ${dozens[countOfChar[1]]} ${numbers[countOfChar[2]]}`;
  }

  return result
}
// console.log(toReadable(764));