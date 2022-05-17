// Record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome: string;
  idade?: number;
};

// Required -> tudo para required
type PessoaRequired = Required<PessoaProtocol>;
// Partial -> tudo para opcional
type PessoaPartial = Partial<PessoaProtocol>;
// Readonly
type PessoaReadonly = Readonly<PessoaProtocol>;
// Pick -> escolhe as chaves
type PessoaPick = Pick<PessoaProtocol, 'nome' | 'sobrenome'>;

// const objeto2: PessoaRequired = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 30,
// };
// console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountApi = Pick<
  AccountMongo,
  Exclude<keyof AccountMongo, '_id'> & { id: string }
>;

const accountMongo: AccountMongo = {
  _id: 'huauwh3480awh4983h48h93uphu',
  name: 'Luiz',
  age: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountMongo);
console.log(accountApi);
