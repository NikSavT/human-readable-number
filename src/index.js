// module.exports = 
function toReadable(number) {
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

  if (String(number).length === 1) { result += numbers[number];
  }else if (String(number).length === 2  && String(number)[0] === '1') { result += numbersToTwenty[String(number)[1]] 

  }
  console.log(result);

  return result
}
console.log(toReadable(19));