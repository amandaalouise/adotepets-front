import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { map } from 'rxjs/operators';
import { Page } from '../model/page.model';
import { AnuncioDoacao } from '../model/anuncioDoacao.model';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  constructor(private httpClient : HttpClient) { }

  public registerDoacao(formData) {
    return this.httpClient.post(Global.baseUrl + "doacao/upload", formData, {
    }).pipe(map(data => data));
  }

  public getDoacoesGeral(page: any = 0, size: any = 10) {
    return this.httpClient.get(Global.baseUrl + "doacao?page=" + page + "&size=" +size, {
    }).pipe(map((page: Page) => page));
  }

  public getDoacaoById(id: number) {
    return this.httpClient.get(Global.baseUrl + "doacao/" + id, {
    }).pipe(map((doacao: AnuncioDoacao) => doacao)).toPromise();
  }
}
