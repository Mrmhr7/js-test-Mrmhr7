const decodeTheRing = function (s, p) {
    if (s.length !== p.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (p[i] !== '*' && p[i] !== '?' && p[i] !== s[i]) {
            return false;
        }
    }

    return true;
}

console.log(decodeTheRing("aa", "a"));   
console.log(decodeTheRing("a", "*"));   
console.log(decodeTheRing("cb", "?a")); 
 
  
module.exports = decodeTheRing;
