module.exports = function check(str, bracketsConfig) {
  const OBJ = {};
  const OPEN_BRACKETS = [];
  let stack = [];

  for (arr of bracketsConfig) {
    OBJ[arr[1]] = arr[0];
    OPEN_BRACKETS.push(arr[0])
  }

  for (let i = 0; i < str.length; i++) {
    let top = stack[stack.length - 1]
    if (OPEN_BRACKETS.includes(str[i])) {
      if (str[i] === OBJ[str[i]] && str[i] === top) {
        stack.pop();
      } else {
        stack.push(str[i])
      }
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        if (top === OBJ[str[i]]) {
          stack.pop();
        } else {
          return false;
        }
      }
    } 
  }return stack.length === 0;
}
