import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AnuncioDoacao } from 'src/app/model/anuncioDoacao.model';
import { Animal } from 'src/app/model/animal.model';
import { Usuario } from 'src/app/model/usuario.model';
let DoacaoComponent = class DoacaoComponent {
    constructor(autenticacaoService, doacaoService) {
        this.autenticacaoService = autenticacaoService;
        this.doacaoService = doacaoService;
        this.anuncioDoacao = new AnuncioDoacao();
        this.animal = new Animal();
        this.files = new Map();
        this.formDataFiles = [];
        this.previewUrl = [];
    }
    ngOnInit() {
        this.animal.usuario = new Usuario();
        this.animal.usuario.id = this.autenticacaoService.currentUserValue.id;
        this.anuncioDoacao.animal = this.animal;
        this.anuncioDoacao.cidade = "Foz do Iguaçu";
        this.anuncioDoacao.estado = "Paraná";
    }
    addFiles(fileInput) {
        const arr = [...fileInput.target.files];
        arr.forEach(element => {
            this.files.set(element.name, element);
        });
        this.preview(fileInput);
    }
    removeFile(fileName) {
        this.files.delete(fileName);
    }
    preview(fileInput) {
        const arr = [...fileInput.target.files];
        arr.forEach(element => {
            var mimeType = element.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(element);
            reader.onload = (_event) => {
                this.previewUrl.push(reader.result);
            };
        });
    }
    cadastrarDoacao() {
        this.formDataFiles = Array.from(this.files.values());
        const formData = new FormData();
        formData.append('value', JSON.stringify(this.anuncioDoacao));
        this.formDataFiles.forEach(element => {
            formData.append('files', element);
        });
        this.doacaoService.registerDoacao(formData).subscribe(data => {
            console.log(data);
        });
    }
};
DoacaoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-doacao',
        templateUrl: './doacao.component.html',
        styleUrls: ['./doacao.component.scss']
    })
], DoacaoComponent);
export { DoacaoComponent };
//# sourceMappingURL=doacao.component.js.map