/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  for(let i=0; i<s.length; i++) {
      const temp = s[i];
      
      if(temp === "(") {
          stack.push("(");
      } else if(temp === "{") {
          stack.push("{");
      } else if(temp === "[") {
          stack.push("[");
      } else if(temp === ")") {
          if(stack.pop() !== "(") return false;
      } else if(temp === "}") {
          if(stack.pop() !== "{") return false;
      } else if(temp === "]") {
          if(stack.pop() !== "[") return false;
      }
  }

  return stack.length === 0;
};