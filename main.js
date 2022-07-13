const rS = require('readline-sync');
let a, b, c;
a = parseFloat (rS.question('a = '));
b = parseFloat (rS.question('b = '));
c = rS.question('Введите +, -, *, / = ');

function calculate(a, b, c) {
    if (c == '+') return a + b;
       else if (c == '-') return a - b;
            else if (c == '*') return a * b;
                else if (c == '/') return a / b;
}
console.log(calculate(a, b, c));






// console.log(a);