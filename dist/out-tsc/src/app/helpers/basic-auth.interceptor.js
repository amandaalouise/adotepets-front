import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let BasicAuthInterceptor = class BasicAuthInterceptor {
    constructor(autenticacaoService) {
        this.autenticacaoService = autenticacaoService;
    }
    intercept(request, next) {
        // add authorization header with basic auth credentials if available
        const currentUser = this.autenticacaoService.currentUserValue;
        if (currentUser && currentUser.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${currentUser.authdata}`
                }
            });
        }
        return next.handle(request);
    }
};
BasicAuthInterceptor = tslib_1.__decorate([
    Injectable()
], BasicAuthInterceptor);
export { BasicAuthInterceptor };
//# sourceMappingURL=basic-auth.interceptor.js.map