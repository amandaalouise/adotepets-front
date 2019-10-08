import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LandingPageComponent = class LandingPageComponent {
    constructor(autenticacaoService, router) {
        this.autenticacaoService = autenticacaoService;
        this.router = router;
    }
    ngOnInit() {
        this.errorAlert = false;
        if (this.autenticacaoService.currentUserValue.authdata !== null) {
            this.router.navigate(['/']);
        }
    }
    login() {
        this.autenticacaoService.login(this.formLoginEmail, this.formLoginSenha).subscribe(response => {
            console.log(response);
            if (response != 200) {
                this.autenticacaoService.logout();
                this.errorAlert = true;
            }
            else {
                this.router.navigate(['/']);
            }
        });
    }
};
LandingPageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-landing-page',
        templateUrl: './landing-page.component.html',
        styleUrls: ['./landing-page.component.scss']
    })
], LandingPageComponent);
export { LandingPageComponent };
//# sourceMappingURL=landing-page.component.js.map