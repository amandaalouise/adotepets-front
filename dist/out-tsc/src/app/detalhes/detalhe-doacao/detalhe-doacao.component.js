import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DetalheDoacaoComponent = class DetalheDoacaoComponent {
    constructor(activatedRoute, doacaoService) {
        this.activatedRoute = activatedRoute;
        this.doacaoService = doacaoService;
    }
    ngOnInit() {
        this.doacaoId = this.activatedRoute.snapshot.params.id;
        this.getDoacao(this.doacaoId);
    }
    getDoacao(id) {
        return this.doacaoService.getDoacaoById(id).then(doacao => {
            this.doacao = doacao;
            console.log(this.doacao);
        });
    }
};
DetalheDoacaoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-detalhe-doacao',
        templateUrl: './detalhe-doacao.component.html',
        styleUrls: ['./detalhe-doacao.component.scss']
    })
], DetalheDoacaoComponent);
export { DetalheDoacaoComponent };
//# sourceMappingURL=detalhe-doacao.component.js.map