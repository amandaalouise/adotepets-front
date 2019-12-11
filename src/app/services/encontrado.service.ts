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
    return this.httpClient.post(Global.baseUrl + "encontrado/upload", formData,
    {observe : 'response'}).pipe(map(data => data));
  }
  public getEncontradosFilter(params, page: any = 0, size: any = 12) {
    return this.httpClient.get(Global.baseUrl + "encontrado/filter?page=" + page + "&size=" +size,  {params: params }).pipe(map((page: Page) => page));
  }

  public getEncontradosGeral(page: any = 0, size: any = 12) {
    return this.httpClient.get(Global.baseUrl + "encontrado?page=" + page + "&size=" +size, {
    }).pipe(map((page: Page) => page));
  }

  public getEncontradoById(id: number) {
    return this.httpClient.get(Global.baseUrl + "encontrado/" + id, {
    }).pipe(map((encontrado: AnuncioEncontrado) => encontrado)).toPromise();
  }

  public getEncontradosByUser(id: number, page: any = 0, size: any = 12) {
    return this.httpClient.get(Global.baseUrl + "encontrado/porUsuario/" + id + "?page=" + page + "&size=" +size, {
    }).pipe(map((page: Page) => page));
  }

  public editEncontrado(formData) {
    return this.httpClient.post(Global.baseUrl + "encontrado/edit", formData,
    {observe : 'response'}).pipe(map(data => data));
  }

  public removeEncontrado(id: number, formData) {
    return this.httpClient.post(Global.baseUrl + "encontrado/delete/" +id, formData,
    {observe : 'response'}).pipe(map(data => data));
  }
}
