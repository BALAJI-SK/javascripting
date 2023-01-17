const doubleArray = (numbers) => {
  if (!Array.isArray(numbers)) { throw new Error('unspported input'); }

  return numbers.map(number => number * 2);
};
// Thowing error other than integer datatype given as input

const tripleArray = (numbers) => {
  if (!Array.isArray(numbers)) { throw new Error('unspported input'); }
  if (numbers.length == 0) return [];
  //using reduce
  return numbers.reduce((accumulator, currentValue) => {
    if (Number.isInteger(currentValue)) {
      console.log(currentValue);
      if (currentValue % 2 == 0) {
        let tripled = currentValue * 3;
        return [...accumulator, tripled];
      }
    }
    else {
      throw new Error('unspported datatype input');
    }
    return accumulator;
  }, []);
};
// console.log(tripleArray([1,2,3,'a']));
module.exports = { doubleArray, tripleArray };
// return numbers.map((number) => {
//   if (Number.isInteger(number)) { throw new Error('unspported datatype input'); }
//   return number * 3;
// }).filter(number => (number % 2 == 0));