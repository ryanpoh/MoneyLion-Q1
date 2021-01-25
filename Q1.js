const getWordStats = (str) => {
  let arrOfLetters = str.split("");
  let letterCounts = {};

  for (let i = 0; i < arrOfLetters.length; i++) {
    let value = arrOfLetters[i];
    letterCounts[value] = letterCounts[value] ? letterCounts[value] + 1 : 1;
  }

  return letterCounts;
};

console.log(getWordStats("abbbbcc"));
