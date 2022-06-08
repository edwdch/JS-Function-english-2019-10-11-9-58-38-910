function alphabetSort(message) {
  // wirte your code here
  let arr = message.split("");
  let sorted = arr.sort();
  return sorted.join("");
}

// test
console.log(alphabetSort("hello")); // should return 'ehllo'
