import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from "../global";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient : HttpClient) { }
  
  public registerUser(formData) {
    return this.httpClient.post(Global.baseUrl + "usuario/upload", formData, {
    }).pipe(map(data => data));
  }
}
