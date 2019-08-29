import { Animal } from './animal.model';

export class Anuncio {
    id: number;
    animal: Animal;
    dataPublicacao: string;
    ativo: boolean;
    cidade: string;
    estado: string;
}