/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    console.log("current", strs[i]);

    if (
      strs[i] !== "" &&
      strs.every((s) => {
        console.log("s[i]", s[i]);
        console.log("strs[0][i]", strs[0][i]);
        return s[i] === strs[0][i];
      })
    )
      prefix += strs[0][i];
    else break;
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
