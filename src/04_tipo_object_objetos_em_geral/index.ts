const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown; // (index signature) - permite criar em tempo de execução
} = {
  keyA: 'Valor A',
  keyB: 'Valor B',
};

// objectA.keyA = 'outro valor'; // Cannot assign to 'keyA' because it is a read-only property.
objectA.keyC = 'nova chave';
objectA.keyD = 'nova chave';

console.log(objectA);
