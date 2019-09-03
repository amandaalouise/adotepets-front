import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from "../global";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  constructor(private httpClient: HttpClient) { }

  public registerPrestador(formData) {
    return this.httpClient.post(Global.baseUrl + "prestador/upload", formData, {
    }).pipe(map(data => data));
  }
}
