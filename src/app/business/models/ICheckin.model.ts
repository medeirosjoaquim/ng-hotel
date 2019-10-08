import { IPessoa } from './IPessoa.model';

export interface ICheckin {
  hospede: IPessoa;
  dataEntrada: string;
  dataSaida: string;
  adicionalEstacionamento: boolean;
}
