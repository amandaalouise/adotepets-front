import { Injectable, ErrorHandler } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Global } from '../global';
import { map, catchError } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuario {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {

    let token = window.btoa(username + ':' + password);

    let formData = new FormData;
    formData.append('token', token);

    return this.http.post<any>(`${Global.baseUrl}usuario/autenticar`, formData)
      .pipe(map(user => {
        if(user != null) {
        var usuario: Usuario = user;
          // login successful if there's a jwt token in the response
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          usuario.authdata = token;
          localStorage.setItem('currentUser', JSON.stringify(usuario));
          this.currentUserSubject.next(usuario);
        }

        return usuario;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
