const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: string | undefined;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro Valor';
