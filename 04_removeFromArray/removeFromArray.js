// const removeFromArray = function (array, ...rest) {
//   let remove = [...rest];
//   let newArray = array.filter((element) => {
//     return !remove.includes(element);
//   });
//   return newArray;
// };

//   return array.filter(val => !args.includes(val))

const removeFromArray = function (array, ...rest) {
  let newArray = [];
  array.forEach((e) => {
    if (!rest.includes(e)) {
      return newArray.push(e);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
