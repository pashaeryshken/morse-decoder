const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  expr = '00' + expr;
  let symbol = '';
  let string = '';
  for (let i = 0; i < expr.length; i += 2) {
    const code = expr.substr(i, 2);
    symbol += code === '00' ? '' : code === '10' ? '.' : '-';
    if (i !== 0 && i % 10 === 0) {
      string += MORSE_TABLE[symbol];
      symbol = ''
    }
    if (expr[i + 1] === '*') {
      string += ' ';
      symbol = '';
      i += 8
    }
  }
  return string
}

module.exports = {
  decode
}
