const { doubleArray, tripleArray } = require('../arrayUtility');

describe('Array Utility', () => {
  describe('Double Array', () => {

    it('should return double valued array when array given', () => {
      let result = doubleArray([1, 2, 3, 4]);
      expect(result).toEqual([2, 4, 6, 8]);
    });
    it('should throw a error when not an array passed', () => {
      expect(() => { doubleArray('asc'); }).toThrow('unspported input');
    });
  });
  describe('Triple Array', () => {
    it('should return Error  when array is given with non Numberical ', () => {
      expect(() => { tripleArray([1, 2, 3, 4, 'a']); }).toThrow('unspported datatype input');
    });
    it('should throw a error when not an array passed', () => {
      expect(() => { tripleArray('asc'); }).toThrow('unspported input');
    });
    it('should return Tripled value Array only with  even integer  number when input is correct ', () => {
      let result = tripleArray([1, 2, 3, 4]);
      expect(result).toEqual([6, 12]);
    });
    it('should return Empty array when empty array is given as input',()=>{
      let result = tripleArray([]);
      expect(result).toEqual([]);
    });
    it('should return Tripled value Array only with even integer  number when input is correct ', () => {
      expect(() => { tripleArray([1, 2.2, 3, 4]); }).toThrow('unspported datatype input');
    });
  });
});