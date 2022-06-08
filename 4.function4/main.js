function countWords(message) {
  // wirte your code here
  let arr = message.split(" ");
  return arr.length;
}

// test
console.log(countWords("Good morning, I love JavaScript.")); // should return 5
