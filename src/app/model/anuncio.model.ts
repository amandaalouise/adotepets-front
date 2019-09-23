import { Animal } from './animal.model';

export class Anuncio {
    id: number;
    animal: Animal;
    ativo: boolean;
    cidade: string;
    estado: string;
}