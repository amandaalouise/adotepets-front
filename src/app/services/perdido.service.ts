import { Injectable } from '@angular/core';
import { AnuncioPerdido } from '../model/anuncioPerdido.model';
import { Global } from '../global';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Page } from '../model/page.model';

@Injectable({
  providedIn: 'root'
})
export class PerdidoService {
   
  constructor(private httpClient : HttpClient) { }

  public registerPerdido(formData) {
    return this.httpClient.post(Global.baseUrl + "perdido/upload", formData, {
    }).pipe(map(data => data));
  }

  public getPerdidosGeral() {
    return this.httpClient.get(Global.baseUrl + "perdido", {
    }).pipe(map((page: Page) => page));
  }

  public getPerdidoById(id: number) {
    return this.httpClient.get(Global.baseUrl + "perdido/" + id, {
    }).pipe(map((Perdido: AnuncioPerdido) => Perdido)).toPromise();
  }
}
