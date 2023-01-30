let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '10', NaN, null];
let x = 0; // чётные
let y = 0; // нечётные
let z = 0; // нулевые элементы
for (let i=0; i < arr.length; ++i) {
  if (typeof arr[i] != 'number') {
    
  } else if (isNaN(arr[i]) === true) {
    
  } else if (arr[i] === 0) {
    ++z
  } else if (arr[i] % 2 === 0) {
    ++x
  } else {
    ++y
  }
}

console.log('Чётных элементов в массиве - ' + x)
console.log('Нечётных элементов в массиве - ' + y)
console.log('Нулевых элементов в массиве - ' + z)