import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(autenticacaoService, router) {
        this.autenticacaoService = autenticacaoService;
        this.router = router;
    }
    ngOnInit() {
        this.errorAlert = false;
        this.usuario = this.autenticacaoService.currentUserValue;
    }
    logout() {
        this.autenticacaoService.logout();
    }
    login() {
        this.autenticacaoService.login(this.formLoginEmail, this.formLoginSenha).subscribe(response => {
            console.log(response);
            if (response != 200) {
                this.autenticacaoService.logout();
                this.errorAlert = true;
            }
            else {
                window.location.reload();
            }
        });
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map