function reverseString(message) {
  // wirte your code here
  var reversed = "";
  for (var i = message.length - 1; i >= 0; i--) {
    reversed += message[i];
  }
  return reversed;
}

// test
console.log(reverseString("hello")); // should return 'olleh'
