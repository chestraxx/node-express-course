const {writeFileSync} = require('fs');

for (let index = 0; index < 100000; index++) {
  writeFileSync('./content/big.txt', `hello world ${index}\n`, {flag: 'a'});
}
