const inputList = [4, 3, 8, 2, 7];
const ourDict = {
  8: 'E',
  4: 'F',
  5: 'F',
  9: 'N',
  1: 'O',
  6: 'S',
  7: 'S',
  2: 'T',
  3: 'T',
};
const main = function (input) {
  for (const [key, value] of Object.entries(input)) {
    console.log(key, value);
  }
};

main(inputList);
