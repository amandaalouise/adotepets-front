import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Global } from "../global";
import { map } from 'rxjs/operators';
let UsuarioService = class UsuarioService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    registerUser(formData) {
        return this.httpClient.post(Global.baseUrl + "usuario/upload", formData, {}).pipe(map(data => data));
    }
    getUserById(id) {
        return this.httpClient.get(Global.baseUrl + "usuario/" + id, {}).pipe(map((usuario) => usuario)).toPromise();
    }
};
UsuarioService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UsuarioService);
export { UsuarioService };
//# sourceMappingURL=usuario.service.js.map