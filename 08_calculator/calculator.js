const add = function(a, ...numbers) {
  let sum = a;
  for (let value of numbers) {
    sum += +value;
  }
  return sum;
};

const subtract = function(a, ...numbers) {
	let sum = a;
  for (let value of numbers) {
    sum -= +value;
  }
  return sum;
};

const sum = function(numbers) {
  let sum = 0;
  for (let value of numbers) {
    sum += +value;
  }
  return sum;
};

const multiply = function(numbers) {
  let sum = 1;
  for (let value of numbers) {
    sum *= +value;
  }
  return sum;
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(a) {
  let sum = 1;
  for (let i=1;i<=a;i++) {
    sum *= +i;
  }
	return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
