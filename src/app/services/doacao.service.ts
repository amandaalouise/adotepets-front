import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  constructor(private httpClient : HttpClient) { }

  public registerDoacao(formData) {
    return this.httpClient.post(Global.baseUrl + "doacao/upload", formData, {
    }).pipe(map(data => data));
  }
}
