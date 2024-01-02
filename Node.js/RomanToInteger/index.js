/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const RIHash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let accumulate = 0;

  for (let i = 0; i < s.length; i++) {
    const value = RIHash[s[i]];
    const next = RIHash[s[i + 1]];

    if (value >= next || !next) accumulate += value;
    else accumulate -= value;
  }

  return accumulate;
};

console.log(romanToInt("MCMXCIV"));
