import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Global } from 'src/app/global';
let CardDoacaoComponent = class CardDoacaoComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.url = Global.baseUrl;
    }
    ngOnInit() {
        this.style = "url(" + this.url + "arquivo/doacao/" + this.doacao.id + "/" + this.doacao.animal.imagens[0] + ")";
    }
    sanitizeImage(id, file) {
        console.log("url(" + Global.baseUrl + 'arquivo/doacao/' + id + '/' + file + ")");
        return this.sanitizer.bypassSecurityTrustStyle("url(" + Global.baseUrl + 'arquivo/doacao/' + id + '/' + file + ")");
    }
};
tslib_1.__decorate([
    Input()
], CardDoacaoComponent.prototype, "doacao", void 0);
CardDoacaoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-card-doacao',
        templateUrl: './card-doacao.component.html',
        styleUrls: ['./card-doacao.component.scss']
    })
], CardDoacaoComponent);
export { CardDoacaoComponent };
//# sourceMappingURL=card-doacao.component.js.map