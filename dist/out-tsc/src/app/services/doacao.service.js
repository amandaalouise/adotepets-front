import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Global } from '../global';
import { map } from 'rxjs/operators';
let DoacaoService = class DoacaoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    registerDoacao(formData) {
        return this.httpClient.post(Global.baseUrl + "doacao/upload", formData, {}).pipe(map(data => data));
    }
    getDoacoesGeral(page = 0, size = 10) {
        return this.httpClient.get(Global.baseUrl + "doacao?page=" + page + "&size=" + size, {}).pipe(map((page) => page));
    }
    getDoacaoById(id) {
        return this.httpClient.get(Global.baseUrl + "doacao/" + id, {}).pipe(map((doacao) => doacao)).toPromise();
    }
};
DoacaoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DoacaoService);
export { DoacaoService };
//# sourceMappingURL=doacao.service.js.map