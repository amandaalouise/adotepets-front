import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Global } from "../global";
import { map } from 'rxjs/operators';
let PrestadorService = class PrestadorService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    registerPrestador(formData) {
        return this.httpClient.post(Global.baseUrl + "prestador/upload", formData, {}).pipe(map(data => data));
    }
};
PrestadorService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], PrestadorService);
export { PrestadorService };
//# sourceMappingURL=prestador.service.js.map