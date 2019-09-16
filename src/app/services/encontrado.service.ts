import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { Page } from '../model/page.model';
import { AnuncioEncontrado } from '../model/anuncioEncontrado.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EncontradoService {
  
  constructor(private httpClient : HttpClient) { }

  public registerEncontrado(formData) {
    return this.httpClient.post(Global.baseUrl + "encontrado/upload", formData, {
    }).pipe(map(data => data));
  }

  public getEncontradosGeral() {
    return this.httpClient.get(Global.baseUrl + "encontrado", {
    }).pipe(map((page: Page) => page));
  }

  public getEncontradoById(id: number) {
    return this.httpClient.get(Global.baseUrl + "encontrado/" + id, {
    }).pipe(map((encontrado: AnuncioEncontrado) => encontrado)).toPromise();
  }
}
