import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ListagemDoacaoComponent = class ListagemDoacaoComponent {
    constructor(autenticacaoService, doacaoService) {
        this.autenticacaoService = autenticacaoService;
        this.doacaoService = doacaoService;
    }
    ngOnInit() {
        this.listaDoacoesGeral();
    }
    listaDoacoesGeral() {
        this.doacaoService.getDoacoesGeral().subscribe(data => {
            if (data.content.length > 0) {
                this.doacoes = data.content;
            }
        });
    }
};
ListagemDoacaoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-listagem-doacao',
        templateUrl: './listagem-doacao.component.html',
        styleUrls: ['./listagem-doacao.component.scss']
    })
], ListagemDoacaoComponent);
export { ListagemDoacaoComponent };
//# sourceMappingURL=listagem-doacao.component.js.map