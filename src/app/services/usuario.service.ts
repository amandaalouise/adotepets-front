import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from "../global";
import { map } from 'rxjs/operators';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  public registerUser(formData) {
    return this.httpClient.post(Global.baseUrl + "usuario/upload", formData, { observe: 'response' }).pipe(map(data => data));
  }

  public editUser(formData) {
    return this.httpClient.post(Global.baseUrl + "usuario/edit", formData, { observe: 'response' }).pipe(map(data => data));
  }

  public getUserById(id) {
    return this.httpClient.get(Global.baseUrl + "usuario/" + id, {
    }).pipe(map((usuario: Usuario) => usuario)).toPromise();
  }

  public getUserByEmail(email) {
    return this.httpClient.get(Global.baseUrl + "usuario/poremail/" + email, {
    }).pipe(map((usuario: Usuario) => usuario)).toPromise();
  }

  public resetPassword(email) {
    return this.httpClient.post(Global.baseUrl + "usuario/reseta-senha", email, { observe: 'response' }).pipe(map(data => data));
  }  
}

