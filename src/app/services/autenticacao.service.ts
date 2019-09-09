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

    return this.http.post<any>(`${Global.baseUrl}usuario/autenticar`, formData, { observe: 'response' })
      .pipe(map(response => {
        console.log(response);
        let user: Usuario = response.body;
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        user.authdata = token;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return response.status;
      }),
      catchError(error => {
        console.log(error);
        return error.status
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
