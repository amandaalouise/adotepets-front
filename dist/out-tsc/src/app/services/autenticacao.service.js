import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Global } from '../global';
import { map, catchError } from 'rxjs/operators';
let AutenticacaoService = class AutenticacaoService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        let token = window.btoa(username + ':' + password);
        let formData = new FormData;
        formData.append('token', token);
        return this.http.post(`${Global.baseUrl}usuario/autenticar`, formData, { observe: 'response' })
            .pipe(map(response => {
            let user = response.body;
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            user.authdata = token;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return response.status;
        }), catchError(error => {
            return error.status;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
AutenticacaoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AutenticacaoService);
export { AutenticacaoService };
//# sourceMappingURL=autenticacao.service.js.map