/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
      let lastOpen = [];
    const bracketsHash = { "(": ")", "{": "}", "[": "]" };

  for (let c of s) {
      if (bracketsHash[c]) lastOpen.push(c);
    else if (bracketsHash[lastOpen.pop()] !== c) return false;
  }

  return true;
};

console.log(isValid("({})[]"));
