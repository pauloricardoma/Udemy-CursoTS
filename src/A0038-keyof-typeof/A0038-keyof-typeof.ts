// type CoresObjs = {
//   vermelho: string;
//   verde: string;
//   azul: string;
// };

// type Cor = 'vermelho' | 'verde' | 'azul';

type CoresObjs = typeof coresObjs;
type CoresChaves = keyof CoresObjs;

const coresObjs = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduzirCor(cor: CoresChaves, cores: CoresObjs) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObjs));
console.log(traduzirCor('roxo', coresObjs));
