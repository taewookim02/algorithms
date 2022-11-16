/*const case1 = 'Hi my name is Taewoo';
// ooweaT si eman ym iH

function reverse(str) {
  // reverse a string
  const myList = str.split('').reverse().join('');
  console.log(myList);
}

reverse(case1);
*/

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'weird input';
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

function reverse2(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'weird input';
  }
  return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');

console.log(reverse4('Hi my name is taewoo'));
