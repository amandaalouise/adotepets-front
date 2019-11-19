import { Usuario } from './usuario.model';

export class Animal {
    id: number;
    tipo: string;
    idade: number;
    imagens: string[];
    sexo: string;
    nome: string;
    descricao: string;
    raca: string;
    cor: string;
    porte: string;
    vacinado: boolean;
    castrado: boolean;
    usuario: Usuario;

}