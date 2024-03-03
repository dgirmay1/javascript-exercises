const repeatString = function (word, index) {
  if (index < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < index; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
