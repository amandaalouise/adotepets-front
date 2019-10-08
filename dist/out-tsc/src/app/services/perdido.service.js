import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Global } from '../global';
import { map } from 'rxjs/operators';
let PerdidoService = class PerdidoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    registerPerdido(formData) {
        return this.httpClient.post(Global.baseUrl + "perdido/upload", formData, {}).pipe(map(data => data));
    }
    getPerdidosGeral() {
        return this.httpClient.get(Global.baseUrl + "perdido", {}).pipe(map((page) => page));
    }
    getPerdidoById(id) {
        return this.httpClient.get(Global.baseUrl + "perdido/" + id, {}).pipe(map((Perdido) => Perdido)).toPromise();
    }
};
PerdidoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], PerdidoService);
export { PerdidoService };
//# sourceMappingURL=perdido.service.js.map