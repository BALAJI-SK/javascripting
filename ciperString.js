function alphabetCharShift(inputString) {
    var all_chars = inputString.split("");
    for(var i = 0; i < all_chars.length; i++) {
      var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
      n = (n + 1) % 26; 
      all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
    }
    return all_chars.join("");
  }

const alphabetCharShiftArrow=(inputString)=>{
    var all_chars = inputString.split("");
    for(var i = 0; i < all_chars.length; i++) {
      var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
      n = (n + 1) % 26; 
      all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
    }
    return all_chars.join("");
}
module.exports={alphabetCharShift,alphabetCharShiftArrow}