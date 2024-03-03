const leapYears = function (leapOrNot) {
  if (leapOrNot % 4 === 0 && (leapOrNot % 100 !== 0 || leapOrNot % 400 === 0))
    return true;
  else return false;
};

// Do not edit below this line
module.exports = leapYears;
