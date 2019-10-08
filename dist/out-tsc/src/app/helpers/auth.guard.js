import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(router, autenticacaoService) {
        this.router = router;
        this.autenticacaoService = autenticacaoService;
    }
    canActivate(route, state) {
        const currentUser = this.autenticacaoService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/novo-usuario'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map