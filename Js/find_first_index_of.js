/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  //  return haystack.indexOf(needle) 
  let hash = {};
  let position = -1;

  const start = needle[0];

  for (let h = 0; h <= haystack.length; h++) {

    if ( haystack[h] === start ) {
      position = h;
      hash[h] = start;
      h++;

      console.log("h", h, haystack[h]);

      for (let n = 1; n <= needle.length; n++) {
        if (haystack[h] !== needle[n]) {
          hash = {}
          position = -1;
          break;
        } else {
          hash[h] = needle[n];
          h++;
        }
      }

      console.log(hash)
      if (hash) {
        return position;
      } 

      position = -1;
    }
  }

  return position;
};


console.log(strStr("mississipi", "issip"));
