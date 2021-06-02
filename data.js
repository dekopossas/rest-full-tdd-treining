const linebyline = require('linebyline');
let rl = linebyline('./banco.txt');

rl.on('line', (line, lineCount) => {
  // faça algo com a linha
  if (lineCount % 2 === 1){
    
    console.log(`Estou na linha: ${lineCount} com o valor ${line}`)
  }
});

rl.on('error', (e) => {
  console.error(e)
  // deu erro!
});