import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { Prestador } from 'src/app/model/prestador.model';
let UsuarioComponent = class UsuarioComponent {
    constructor(usuarioService, prestadorService, autenticacaoService, router) {
        this.usuarioService = usuarioService;
        this.prestadorService = prestadorService;
        this.autenticacaoService = autenticacaoService;
        this.router = router;
        this.usuario = new Usuario;
        this.prestador = new Prestador;
        this.previewUrl = [];
    }
    ngOnInit() {
        if (this.autenticacaoService.currentUserValue.authdata !== null) {
            this.router.navigate(['/']);
        }
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
        this.preview(fileInput);
    }
    fileProgressPrestador(fileInput) {
        this.filePrestador = fileInput.target.files[0];
        this.preview(fileInput);
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
    removeFile() {
        this.previewUrl = [];
        this.fileData = null;
        this.filePrestador = null;
        this.arqUsuario = "";
        this.arqPrestador = "";
        return false;
    }
    registerUser() {
        const formData = new FormData();
        formData.append('value', JSON.stringify(this.usuario));
        formData.append('file', this.fileData);
        this.usuarioService.registerUser(formData).subscribe(data => {
            console.log(data);
        });
    }
    registerPrestador() {
        const formData = new FormData();
        formData.append('value', JSON.stringify(this.prestador));
        formData.append('file', this.filePrestador);
        this.prestadorService.registerPrestador(formData).subscribe(data => {
            console.log(data);
        });
    }
};
UsuarioComponent = tslib_1.__decorate([
    Component({
        selector: 'app-usuario',
        templateUrl: './usuario.component.html',
        styleUrls: ['./usuario.component.scss']
    })
], UsuarioComponent);
export { UsuarioComponent };
//# sourceMappingURL=usuario.component.js.map