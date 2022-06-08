function palindrome(message) {
  // wirte your code here
  let reversed = "";
  for (let i = message.length - 1; i >= 0; i--) {
    reversed += message[i];
  }
  if (reversed === message) {
    return true;
  }
  return false;
}

//test
console.log(palindrome("hello")); // should return false
console.log(palindrome("abcba")); // should return true