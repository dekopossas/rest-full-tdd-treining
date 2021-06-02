const linebyline = require('linebyline');
let rl = linebyline('./banco.txt');

rl.on('line', (line, lineCount) => {
  // faça algo com a linha
  if(!line) return;
  if (lineCount % 2 === 1){
    let dados = line.split(';');
    const employ = {
      DataCad: dados[0],
      Cargo: dados[1],
      Cpf: dados[2],
      Nome: dados[3],
      UfNasc: dados[4],
      Salario: dados[5],
      Status: dados[6],
    }
    // salvar no mongo
  }
});

rl.on('error', (e) => {
  console.error(e)
  // deu erro!
});