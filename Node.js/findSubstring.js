/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {

  // [a, b, c] => abc, acb, bac, bca, cab, cba
  const result = words.reduce((acc, v, i) =>
    acc.concat(words.slice(i + 1).map(w => v + '' + w))
    , [])

  console.log(result);
};

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]))
