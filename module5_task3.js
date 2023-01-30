let string = 'Hello';
let reverseString = '';
for (i = string.length-1; i >= 0; i--) {
  reverseString += string[i];
}
console.log(reverseString)

/* альтернативный вариант
let string = 'Hello';
string = string.split('').reverse().join('');
console.log(string)*/