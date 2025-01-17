const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('**********');
    let newAr = arr.map((item) => {
        let newItem = [];
        for (let i = 2;i<=item.length; i = (i+2)){
            let symb = item.slice(i-2, i);
            if (symb === '00') {
                newItem.push(" ");
            }
            else if (symb === '10') {
                newItem.push(".");
            }
            else if (symb === '11') {
                newItem.push("-");
            }
        }
        let word = [];
        for (let i = 5; i <= newItem.length; i = (i+5) ) {
           
            let key = newItem.slice(i-5, i).join('').replace(/\s/g, "") ;
            word.push(MORSE_TABLE[key]);

        }
        return word.join('');
    });
    return newAr.join(' ');
}

module.exports = {
    decode
}