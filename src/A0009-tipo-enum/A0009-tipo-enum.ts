enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

enum Cores {
  PRETO = 300,
  BRANCO,
}

enum Cores2 {
  VERMELHO = 10, // 0
  AZUL = 20, // 1
  AMARELO = 30, // 2
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);
console.log(Cores2);
console.log(Cores2.VERMELHO);
console.log(Cores2[10]);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
escolhaACor(123); // apesar do erro, não avisa o erro, desvantagem enum
