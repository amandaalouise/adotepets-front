import { Anuncio } from './anuncio.model';

export class AnuncioEncontrado extends Anuncio {
    resgatado: boolean;
    lat: number;
    lng: number;
}