const fs = require('fs');

// filePath /dev/stdin 으로 설정하면 런타임에러떠서 0 넣음
const input = fs.readFileSync(0).toString().trim().split('\n');

const x = +input[0];
const y = +input[1];

if (x > 0 && y > 0) console.log(1);
if (x < 0 && y > 0) console.log(2);
if (x < 0 && y < 0) console.log(3);
if (x > 0 && y < 0) console.log(4);
