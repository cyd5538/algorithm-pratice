/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let char = "";

  for(let i = 0; i < s.length; i++) {
    const ch = s[i];
    const code = ch.charCodeAt();
    
    // 대문자 알파벳 (65-90)
    if(code >= 65 && code <= 90) {
      char += ch.toLowerCase();
    }
    // 소문자 알파벳 (97-122)
    else if(code >= 97 && code <= 122) {
      char += ch;
    }
    // 숫자 (48-57)
    else if(code >= 48 && code <= 57) {
      char += ch;
    }
  }
  
  const middle = Math.floor(char.length / 2);
  const a = char.slice(0, middle);
  const b = char.slice(char.length % 2 === 0 ? middle : middle + 1).split("").reverse().join("");

  return a === b;
};

console.log(isPalindrome("0P"))

