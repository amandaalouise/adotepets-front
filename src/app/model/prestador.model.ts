import { Usuario } from './usuario.model';

export class Prestador extends Usuario {
    responsavel: string;
    cpfResponsavel: string;
    tipo: string;
    cep: string;
    logradouro: string;
    numero: string;
    cidade: string;
    estado: string;
    banco: string;
    conta: string;
    agencia: string;
}