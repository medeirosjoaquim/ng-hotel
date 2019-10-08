import { IPessoa } from './IPessoa.model';

export interface IPessoa {
  hospede: IPessoa;
  dataEntrada: Date;
  dataSaida: Date;
  adicionalEstacionamento: boolean;
}
