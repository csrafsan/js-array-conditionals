var numbers = [2,2, 7, 4, 4, 3, 7, 8];
console.log(numbers);

numbers.push(10);

numbers.push('orange');

console.log(numbers);

var element = numbers.pop();

console.log(numbers);

console.log(element);

numbers.unshift(5);
console.log(numbers);

numbers.shift();
console.log(numbers);

// // Add to the start of an array
// Array.unshift(element);

// // Add to the end of an array
// Array.push(element);

// // Add to a specified location
// Array.splice(start_position, 0, new_element);

// // Add with concat method without mutating original array
// let newArray = [].concat(Array, element);