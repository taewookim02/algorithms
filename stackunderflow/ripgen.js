const input = `5
8
2 0 2 2 3 1 0 8`;

const j = +input.split('\n')[0];
const k = +input.split('\n')[1];
const line = input.split('\n')[2].split(' ');

const main = function (j, k, line) {
  const myList = '$ & ( * , . : < > @  ^ ` | ~'.split(' ');
  const newSequence = line;

  for (let i = 0; i < 8; i++) {
    const newIndexJ = j + i;
    const newIndexK = k + i;

    const num = (newIndexJ + newIndexK) % 128; // int
    newSequence.push(num.toString());
  }

  console.log(newSequence);
  // convert each list item to Ascii
  const lastSequence = newSequence.map((val, i) => {
    const charCode = String.fromCharCode(val);
    return charCode;
  });
  console.log(lastSequence);

  return lastSequence.join('');
};
console.log(main(j, k, line));
