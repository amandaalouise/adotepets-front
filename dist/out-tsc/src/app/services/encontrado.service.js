import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Global } from '../global';
import { map } from 'rxjs/operators';
let EncontradoService = class EncontradoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    registerEncontrado(formData) {
        return this.httpClient.post(Global.baseUrl + "encontrado/upload", formData, {}).pipe(map(data => data));
    }
    getEncontradosGeral() {
        return this.httpClient.get(Global.baseUrl + "encontrado", {}).pipe(map((page) => page));
    }
    getEncontradoById(id) {
        return this.httpClient.get(Global.baseUrl + "encontrado/" + id, {}).pipe(map((encontrado) => encontrado)).toPromise();
    }
};
EncontradoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], EncontradoService);
export { EncontradoService };
//# sourceMappingURL=encontrado.service.js.map