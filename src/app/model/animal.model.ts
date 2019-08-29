import { Usuario } from './usuario.mode';

export class Animal {
    id: number;
    tipo: string;
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