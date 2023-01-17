const doubleArray = (numbers) => {
  if (!Array.isArray(numbers)) { throw new Error('unspported input'); }

  return numbers.map(number => number * 2);
};
// Thowing error other than integer datatype given as input

const tripleArray = (numbers) => {
  if (!Array.isArray(numbers)) { throw new Error('unspported input'); }
  return numbers.map((number) => {
    if (Number.isInteger(number)) { throw new Error('unspported datatype input'); }
    return number * 3;
  }).filter(number => (number % 2 == 0));
};
// console.log(tripleArray([1,2,3,'a']));
module.exports = { doubleArray, tripleArray };