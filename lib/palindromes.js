function isPalindrome(s) {
  var testStr = s.split(" ").join("");
  var stringReverse = testStr.split("").reverse().join("");
  return testStr == stringReverse;
}

module.exports = isPalindrome;