import { IPessoa } from './IPessoa.model';

export interface ICheckin {
  hospede: IPessoa;
  dataEntrada: Date;
  dataSaida: Date;
  adicionalEstacionamento: boolean;
}
