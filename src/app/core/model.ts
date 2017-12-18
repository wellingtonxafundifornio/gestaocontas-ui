export class Conta {
  codigo: number;
  nome: string;
  valor: number;
}

export class Lancamento {
  codigo: number;
  operacao: 'Crédito' | 'Débito' | '';
  valor: number;
  data: Date;
  conta = new Conta();

}
export class LancamentoFilter {
      dataInicial = new Date();
      dataFinal = new Date();
}
