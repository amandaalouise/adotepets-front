(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/anuncios/anuncio-doacao/anuncio-doacao.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/anuncios/anuncio-doacao/anuncio-doacao.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n  <div class=\"row\">\n    <h2 class=\"font-1-5em text-uppercase font-700 mtop-15 font-1-3em-x pb-3\">Minhas doações</h2>\n  </div>\n</div>\n\n<ng-container *ngIf=\"!doacoes\">\n  <div class=\"col-xs-12 hidden\" id=\"containerErro\">\n    <div class=\"bg-fff padding-30\">\n      <div class=\"row padver-50\">\n        <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3\">\n          <h2 class=\"text-center font-2em text-uppercase font-700 mt-1\">Ops!</h2>\n          <p class=\"font-1-2em text-center font-300 mbottom-0\">Parece que você não tem nenhum anúncio cadastrado.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"doacoes\">\n  <div class=\"row\">\n    <ng-container *ngFor=\"let item of doacoes | paginate: config\">\n      <div class=\"col-12 col-md-3 div-table\">\n        <app-card-doacao [doacao]=\"item\" [type]=\"'dashboard'\"></app-card-doacao>\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n<div class=\"row hidden\" id=\"rowPagination\">\n  <div class=\"col-xs-12\">\n    <pagination-controls \n    [previousLabel]=\"labels.previousLabel\"\n    [nextLabel]=\"labels.nextLabel\"\n    [screenReaderPaginationLabel]=\"labels.screenReaderPaginationLabel\"\n    [screenReaderPageLabel]=\"labels.screenReaderPageLabel\"\n    [screenReaderCurrentLabel]=\"labels.screenReaderCurrentLabel\"></pagination-controls>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/anuncios/anuncio-encontrado/anuncio-encontrado.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/anuncios/anuncio-encontrado/anuncio-encontrado.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n    <div class=\"row\">\n      <h2 class=\"font-1-5em text-uppercase font-700 mtop-15 font-1-3em-x pb-3\">Animais encontrados</h2>\n    </div>\n  </div>\n  \n  <ng-container *ngIf=\"!encontrados\">\n    <div class=\"col-xs-12 hidden\" id=\"containerErro\">\n      <div class=\"bg-fff padding-30\">\n        <div class=\"row padver-50\">\n          <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3\">\n            <h2 class=\"text-center font-2em text-uppercase font-700 mt-1\">Ops!</h2>\n            <p class=\"font-1-2em text-center font-300 mbottom-0\">Parece que você não tem nenhum anúncio cadastrado.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"encontrados\">\n    <div class=\"row\">\n      <ng-container *ngFor=\"let item of encontrados | paginate: config\">\n        <div class=\"col-12 col-md-3 div-table\">\n          <app-card-encontrado [encontrado]=\"item\" [type]=\"'dashboard'\"></app-card-encontrado>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n  <div class=\"row hidden\" id=\"rowPagination\">\n      <div class=\"col-xs-12\">\n        <pagination-controls \n        [previousLabel]=\"labels.previousLabel\"\n        [nextLabel]=\"labels.nextLabel\"\n        [screenReaderPaginationLabel]=\"labels.screenReaderPaginationLabel\"\n        [screenReaderPageLabel]=\"labels.screenReaderPageLabel\"\n        [screenReaderCurrentLabel]=\"labels.screenReaderCurrentLabel\"></pagination-controls>\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/anuncios/anuncio-landing/anuncio-landing.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/anuncios/anuncio-landing/anuncio-landing.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <h2 class=\"font-2em text-uppercase font-700 mtop-15 font-1-3em-xs\">Bem vindo ao seu perfil</h2>\n    <p class=\"font-1-2em font-300 mbottom-30\">Aqui você pode gerenciar os seus anúncios, seus dados\n      pessoais\n      e alterar sua senha cadastrada.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/anuncios/anuncio-perdido/anuncio-perdido.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/anuncios/anuncio-perdido/anuncio-perdido.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n  <div class=\"row\">\n    <h2 class=\"font-1-5em text-uppercase font-700 mtop-15 font-1-3em-x pb-3\">Animais perdidos</h2>\n  </div>\n</div>\n\n<ng-container *ngIf=\"!perdidos\">\n  <div class=\"col-xs-12 hidden\" id=\"containerErro\">\n    <div class=\"bg-fff padding-30\">\n      <div class=\"row padver-50\">\n        <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3\">\n          <h2 class=\"text-center font-2em text-uppercase font-700 mt-1\">Ops!</h2>\n          <p class=\"font-1-2em text-center font-300 mbottom-0\">Parece que você não tem nenhum anúncio cadastrado.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"perdidos\">\n  <div class=\"row\">\n    <ng-container *ngFor=\"let item of perdidos | paginate: config\">\n      <div class=\"col-12 col-md-3 div-table\">\n        <app-card-perdido [perdido]=\"item\" [type]=\"'dashboard'\"></app-card-perdido>\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n<div class=\"row hidden\" id=\"rowPagination\">\n  <div class=\"col-xs-12\">\n    <pagination-controls [previousLabel]=\"labels.previousLabel\" [nextLabel]=\"labels.nextLabel\"\n      [screenReaderPaginationLabel]=\"labels.screenReaderPaginationLabel\"\n      [screenReaderPageLabel]=\"labels.screenReaderPageLabel\"\n      [screenReaderCurrentLabel]=\"labels.screenReaderCurrentLabel\">\n    </pagination-controls>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cadastros/alteracao-senha/alteracao-senha.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cadastros/alteracao-senha/alteracao-senha.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-grey-home padver-50 padver-15-xs\">\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-lg-6\">\n      <div class=\"bg-fff px-4 py-4 rounded-corner\">\n        <form [formGroup]=\"usuarioForm\" (ngSubmit)=\"onSubmit()\">\n          <h1 class=\"font-700 mbottom-30 mtop-0 text-uppercase text-center color-blue pt-3\">Alteração de senha</h1>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"senha\">Senha atual</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"oldsenha\" placeholder=\"******\"\n                  id=\"senhaUsuario\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"senha\">Nova senha</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"senha\" placeholder=\"******\"\n                  id=\"senhaUsuario\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"senha\">Confirme a nova senha</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"confirmasenha\" placeholder=\"******\"\n                  id=\"senhaUsuario\">\n              </div>\n            </div>\n          </div>\n          <p class=\"text-center mbottom-0 mt-2\"><button class=\"btn btn-info text-uppercase padhor-30\"\n              id=\"btnCadastrarUsuario\" type=\"submit\">Atualizar</button></p>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cadastros/doacao-edit/doacao-edit.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cadastros/doacao-edit/doacao-edit.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid hidden\">\n  <div class=\"row\">\n    <div class=\"col-12 mt-3\">\n      <img src=\"../../../assets/img/1920x250-doacao.png\" alt=\"Placeholder\" class=\"img-fluid d-none d-md-block rounded-corner\">\n      <img src=\"https://placehold.it/993x600\" alt=\"Placeholder\" class=\"img-fluid d-md-none rounded-corner\">\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid bg-f5f5f5 padver-50 padver-15-xs\">\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-lg-6\">\n      <div class=\"padding-30 bg-fff rounded-corner\">\n        <form id=\"formulario\" [formGroup]=\"anuncioForm\" (ngSubmit)=\"onSubmit()\">\n          <h1 class=\"font-700 mbottom-30 mtop-0 text-uppercase text-center font-1-3em color-blue\">Edição de animal\n            para doação</h1>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"btn btn-imagem\">\n                  Fazer upload de imagens\n                  <input (change)=\"addFiles($event)\" type=\"file\" id=\"file\" name=\"file\" class=\"width-100per d-none\"\n                    multiple accept=\"image/*\">\n                </label>\n                <p class=\"help-block\">Dê preferência a fotos com aspecto wide (fotos tiradas com o celular virado) e\n                  com\n                  extensão .jpg ou .png <br>Ex: resolução 840x460.</p>\n              </div>\n              <ng-container *ngIf=\"previewUrl\">\n                <div class=\"row\">\n                  <div class=\"col-md-3 col-6 mb-3\" *ngFor=\"let item of previewUrl | keyvalue;\">\n                    <button (click)=\"removeFile(item.key)\" class=\"removeItem btn\"><i\n                        class=\"fas fa-times-circle\"></i></button>\n                    <img [src]=\"item.value\" class=\"img-preview img-fluid\" />\n                  </div>\n                  <div class=\"col-3 mb-3\" *ngFor=\"let item of animal.imagens\">\n                      <button (click)=\"removeExistingFile(item)\" class=\"removeItem btn\"><i\n                          class=\"fas fa-times-circle\"></i></button>\n                      <img src=\"{{url}}arquivo/doacao/{{anuncioDoacao.id}}/{{item}}\" class=\"img-preview img-fluid\" />\n                    </div>\n                </div>\n              </ng-container>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Tipo de animal</label> *\n                <select formControlName=\"tipo\" name=\"tipo\" id=\"tipo\" class=\"form-control\">\n                  <option value=\"cachorro\" selected>Cachorro</option>\n                  <option value=\"gato\">Gato</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Sexo</label> *\n                <select formControlName=\"sexo\" name=\"sexo\" id=\"sexo\" class=\"form-control\">\n                  <option value=\"macho\" selected>Macho</option>\n                  <option value=\"femea\">Fêmea</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"vacinado\">Vacinado</label> *<br>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"radio\" formControlName=\"vacinado\" name=\"vacinado\" value=\"true\"\n                    checked>\n                  <p class=\"form-check-label\" for=\"inlineCheckbox1\">Sim</p>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"radio\" formControlName=\"vacinado\" name=\"vacinado\" value=\"false\">\n                  <p class=\"form-check-label\">Não</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Castrado</label> *<br>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" formControlName=\"castrado\" type=\"radio\" name=\"castrado\" value=\"true\"\n                    checked>\n                  <p class=\"form-check-label\" for=\"inlineCheckbox1\">Sim</p>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" formControlName=\"castrado\" type=\"radio\" name=\"castrado\" value=\"false\">\n                  <p class=\"form-check-label\">Não</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"nome\">Nome</label> *\n                <input type=\"text\" formControlName=\"nome\" class=\"form-control\" name=\"nome\" placeholder=\"Ex: João\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"cor\">Cor</label> *\n                <input type=\"text\" formControlName=\"cor\" class=\"form-control\" name=\"cor\" placeholder=\"Ex: Caramelo\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"porte\">Porte</label> *\n                <select name=\"porte\" formControlName=\"porte\" id=\"porte\" class=\"form-control\">\n                  <option value=\"Pequeno\" selected>Pequeno</option>\n                  <option value=\"Médio\">Médio</option>\n                  <option value=\"Grande\">Grande</option>\n                  <option value=\"Gigante\">Gigante</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"idade\">Idade</label> *\n                <select name=\"idade\" formControlName=\"idade\" id=\"idade\" class=\"form-control\">\n                  <option value=\"Filhote (0 a 2 anos)\" selected>Filhote (0 a 2 anos)</option>\n                  <option value=\"Adulto (2 a 8 anos)\">Adulto (2 a 8 anos)</option>\n                  <option value=\"Idoso (acima de 8 anos)\">Idoso (acima de 8 anos)</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"descricao\">Descrição</label> *\n                <textarea formControlName=\"descricao\" name=\"descricao\" id=\"\" cols=\"30\" rows=\"5\"\n                  class=\"form-control vertical-resize-forbidden\"></textarea>\n              </div>\n            </div>\n          </div>\n          <p class=\"text-center mbottom-0 mt-2\">\n            <button class=\"btn btn-info text-uppercase padhor-30\" id=\"btnCadastrar\" type=\"submit\"\n              [disabled]=\"!anuncioForm.valid\">Salvar alterações</button>\n          </p>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cadastros/doacao/doacao.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cadastros/doacao/doacao.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid hidden\">\n  <div class=\"row\">\n    <div class=\"col-12 mt-3\">\n      <img src=\"../../../assets/img/1920x250-doacao.png\" alt=\"Placeholder\" class=\"img-fluid d-none d-md-block rounded-corner\">\n      <img src=\"https://placehold.it/993x600\" alt=\"Placeholder\" class=\"img-fluid d-md-none rounded-corner\">\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid bg-f5f5f5 padver-50 padver-15-xs\">\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-lg-6\">\n      <div class=\"padding-30 bg-fff rounded-corner\">\n        <form id=\"formulario\" [formGroup]=\"anuncioForm\" (ngSubmit)=\"onSubmit()\">\n          <h1 class=\"font-700 mbottom-30 mtop-0 text-uppercase text-center font-1-3em color-blue\">Cadastro de animal\n            para doação</h1>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"btn btn-imagem\">\n                  Fazer upload de imagens\n                  <input (change)=\"addFiles($event)\" type=\"file\" id=\"file\" name=\"file\" class=\"width-100per d-none\"\n                    multiple accept=\"image/*\">\n                </label>\n                <p class=\"help-block\">Dê preferência a fotos com aspecto wide (fotos tiradas com o celular virado) e\n                  com\n                  extensão .jpg ou .png <br>Ex: resolução 840x460.</p>\n              </div>\n              <ng-container *ngIf=\"previewUrl\">\n                <div class=\"row\">\n                  <div class=\"col-md-3 col-6 mb-3\" *ngFor=\"let item of previewUrl | keyvalue;\">\n                    <button (click)=\"removeFile(item.key)\" class=\"removeItem btn\"><i\n                        class=\"fas fa-times-circle\"></i></button>\n                    <img [src]=\"item.value\" class=\"img-preview img-fluid\" />\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Tipo de animal</label> *\n                <select formControlName=\"tipo\" name=\"tipo\" id=\"tipo\" class=\"form-control\">\n                  <option value=\"cachorro\" selected>Cachorro</option>\n                  <option value=\"gato\">Gato</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Sexo</label> *\n                <select formControlName=\"sexo\" name=\"sexo\" id=\"sexo\" class=\"form-control\">\n                  <option value=\"macho\" selected>Macho</option>\n                  <option value=\"femea\">Fêmea</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"vacinado\">Vacinado</label> *<br>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"radio\" formControlName=\"vacinado\" name=\"vacinado\" value=\"true\"\n                    checked>\n                  <p class=\"form-check-label\" for=\"inlineCheckbox1\">Sim</p>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"radio\" formControlName=\"vacinado\" name=\"vacinado\" value=\"false\">\n                  <p class=\"form-check-label\">Não</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Castrado</label> *<br>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" formControlName=\"castrado\" type=\"radio\" name=\"castrado\" value=\"true\"\n                    checked>\n                  <p class=\"form-check-label\" for=\"inlineCheckbox1\">Sim</p>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" formControlName=\"castrado\" type=\"radio\" name=\"castrado\" value=\"false\">\n                  <p class=\"form-check-label\">Não</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"nome\">Nome</label> *\n                <input type=\"text\" formControlName=\"nome\" class=\"form-control\" name=\"nome\" placeholder=\"Ex: João\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"cor\">Cor</label> *\n                <input type=\"text\" formControlName=\"cor\" class=\"form-control\" name=\"cor\" placeholder=\"Ex: Caramelo\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"porte\">Porte</label> *\n                <select name=\"porte\" formControlName=\"porte\" id=\"porte\" class=\"form-control\">\n                  <option value=\"Pequeno\" selected>Pequeno</option>\n                  <option value=\"Médio\">Médio</option>\n                  <option value=\"Grande\">Grande</option>\n                  <option value=\"Gigante\">Gigante</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"idade\">Idade</label> *\n                <select name=\"idade\" formControlName=\"idade\" id=\"idade\" class=\"form-control\">\n                  <option value=\"Filhote (0 a 2 anos)\" selected>Filhote (0 a 2 anos)</option>\n                  <option value=\"Adulto (2 a 8 anos)\">Adulto (2 a 8 anos)</option>\n                  <option value=\"Idoso (acima de 8 anos)\">Idoso (acima de 8 anos)</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"descricao\">Descrição</label> *\n                <textarea formControlName=\"descricao\" name=\"descricao\" id=\"\" cols=\"30\" rows=\"5\"\n                  class=\"form-control vertical-resize-forbidden\"></textarea>\n              </div>\n            </div>\n          </div>\n          <p class=\"text-center mbottom-0 mt-2\">\n            <button class=\"btn btn-info text-uppercase padhor-30\" id=\"btnCadastrar\" type=\"submit\"\n              [disabled]=\"!anuncioForm.valid\">Cadastrar</button>\n          </p>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cadastros/encontrado-edit/encontrado-edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cadastros/encontrado-edit/encontrado-edit.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid hidden\">\n  <div class=\"row\">\n    <div class=\"col-12 mt-3\">\n      <img src=\"../../../assets/img/1920x250-encontrados.png\" alt=\"Placeholder\" class=\"img-fluid d-none d-md-block rounded-corner\">\n      <img src=\"https://placehold.it/993x600\" alt=\"Placeholder\" class=\"img-fluid d-md-none rounded-corner\">\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid bg-f5f5f5 padver-50 padver-15-xs\">\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-12 col-md-10 col-lg-8 col-xl-6\">\n      <div class=\"padding-30 bg-fff rounded-corner\">\n        <form id=\"formulario\" [formGroup]=\"anuncioForm\" (ngSubmit)=\"onSubmit()\"\n          (keydown.enter)=\"$event.preventDefault()\">\n          <h1 class=\"font-700 mbottom-30 mtop-0 text-uppercase text-center font-1-3em color-blue\">Cadastro de animal\n            encontrado</h1>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"btn btn-imagem\">\n                  Fazer upload de imagens\n                  <input (change)=\"addFiles($event)\" type=\"file\" id=\"file\" name=\"file\" class=\"width-100per d-none\"\n                    multiple accept=\"image/*\">\n                </label>\n                <p class=\"help-block\">Dê preferência a fotos com aspecto wide (fotos tiradas com o celular virado) e\n                  com\n                  extensão .jpg ou .png <br>Ex: resolução 840x460.</p>\n              </div>\n              <ng-container *ngIf=\"previewUrl\">\n                <div class=\"row\">\n                  <div class=\"col-3 mb-3\" *ngFor=\"let item of previewUrl | keyvalue;\">\n                    <button (click)=\"removeFile(item.key)\" class=\"removeItem btn\"><i\n                        class=\"fas fa-times-circle\"></i></button>\n                    <img [src]=\"item.value\" class=\"img-preview img-fluid\" />\n                  </div>\n                  <ng-container *ngIf=\"animal\">\n                    <div class=\"col-3 mb-3\" *ngFor=\"let item of animal.imagens\">\n                      <button (click)=\"removeExistingFile(item)\" class=\"removeItem btn\"><i\n                          class=\"fas fa-times-circle\"></i></button>\n                      <img src=\"{{url}}arquivo/encontrado/{{anuncioEncontrado.id}}/{{item}}\"\n                        class=\"img-preview img-fluid\" />\n                    </div>\n                  </ng-container>\n                </div>\n              </ng-container>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"nome\">Título</label>\n                <input type=\"text\" formControlName=\"nome\" class=\"form-control\" name=\"nome\"\n                  placeholder=\"Ex: Gato branco perdido no campo da vila A em Foz\" maxlength=\"60\">\n              </div>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Tipo de animal</label>\n                <select name=\"tipo\" formControlName=\"tipo\" id=\"tipo\" class=\"form-control\">\n                  <option value=\"cachorro\">Cachorro</option>\n                  <option value=\"gato\">Gato</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-12\">\n              <div class=\"form-group\">\n                <label for=\"descricao\">Descrição</label>\n                <textarea formControlName=\"descricao\" id=\"\" cols=\"30\" rows=\"5\"\n                  class=\"form-control vertical-resize-forbidden\"></textarea>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Sexo</label>\n                <select name=\"sexo\" formControlName=\"sexo\" id=\"sexo\" class=\"form-control\">\n                  <option value=\"macho\">Macho</option>\n                  <option value=\"femea\">Fêmea</option>\n                  <option value=\"indefinido\">Indefinido</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"cor\">Cor</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"cor\" name=\"cor\" placeholder=\"Ex: Caramelo\">\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"raca\">Raça</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"raca\" name=\"raca\" placeholder=\"Ex: Caramelo\">\n              </div>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"porte\">Porte</label>\n                <select formControlName=\"porte\" name=\"porte\" id=\"porte\" class=\"form-control\">\n                  <option value=\"Pequeno\">Pequeno</option>\n                  <option value=\"Médio\">Médio</option>\n                  <option value=\"Grande\">Grande</option>\n                  <option value=\"Gigante\">Gigante</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"idade\">Idade</label>\n                <select formControlName=\"idade\" name=\"idade\" id=\"idade\" class=\"form-control\">\n                  <option value=\"Filhote (0 a 2 anos)\">Filhote (0 a 2 anos)</option>\n                  <option value=\"Adulto (2 a 8 anos)\">Adulto (2 a 8 anos)</option>\n                  <option value=\"Idoso (acima de 8 anos)\">Idoso (acima de 8 anos)</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-6 col-12\">\n              <div class=\"form-group\">\n                <label for=\"localizacao\">Localização</label>\n                <input type=\"text\" class=\"form-control\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\"\n                  type=\"text\" #search>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Resgatado</label> *<br>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" formControlName=\"resgatado\" type=\"radio\" name=\"resgatado\" value=\"true\"\n                    checked>\n                  <p class=\"form-check-label\" for=\"inlineCheckbox1\">Sim</p>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" formControlName=\"resgatado\" type=\"radio\" name=\"resgatado\"\n                    value=\"false\">\n                  <p class=\"form-check-label\">Não</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 mt-3\">\n              <ng-container *ngIf=\"latitude != null\">\n                <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" style=\"height: 300px\">\n                  <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\"\n                    (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\n                </agm-map>\n              </ng-container>\n            </div>\n            <div class=\"col-12\">\n              <p class=\"text-center mbottom-0 mt-3\">\n                <button class=\"btn btn-info text-uppercase padhor-30\" id=\"btnCadastrar\" type=\"submit\"\n                  [disabled]=\"!anuncioForm.valid\">Cadastrar</button>\n              </p>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cadastros/encontrado/encontrado.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cadastros/encontrado/encontrado.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid hidden\">\n  <div class=\"row\">\n    <div class=\"col-12 mt-3\">\n      <img src=\"../../../assets/img/1920x250-encontrados.png\" alt=\"Placeholder\" class=\"img-fluid d-none d-md-block rounded-corner\">\n      <img src=\"https://placehold.it/993x600\" alt=\"Placeholder\" class=\"img-fluid d-md-none rounded-corner\">\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid bg-f5f5f5 padver-50 padver-15-xs\">\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-12 col-md-10 col-lg-8 col-xl-6\">\n      <div class=\"padding-30 bg-fff rounded-corner\">\n        <form id=\"formulario\" [formGroup]=\"anuncioForm\" (ngSubmit)=\"onSubmit()\"\n          (keydown.enter)=\"$event.preventDefault()\">\n          <h1 class=\"font-700 mbottom-30 mtop-0 text-uppercase text-center font-1-3em color-blue\">Cadastro de animal\n            encontrado</h1>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12\">\n              <div class=\"form-group\">\n                <label class=\"btn btn-imagem\">\n                  Fazer upload de imagens\n                  <input (change)=\"addFiles($event)\" type=\"file\" id=\"file\" name=\"file\" class=\"width-100per d-none\"\n                    multiple accept=\"image/*\">\n                </label>\n                <p class=\"help-block\">Dê preferência a fotos com aspecto wide (fotos tiradas com o celular virado) e\n                  com\n                  extensão .jpg ou .png <br>Ex: resolução 840x460.</p>\n              </div>\n              <ng-container *ngIf=\"previewUrl\">\n                <div class=\"row\">\n                  <div class=\"col-3 mb-3\" *ngFor=\"let item of previewUrl | keyvalue;\">\n                    <button (click)=\"removeFile(item.key)\" class=\"removeItem btn\"><i\n                        class=\"fas fa-times-circle\"></i></button>\n                    <img [src]=\"item.value\" class=\"img-preview img-fluid\" />\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"nome\">Título</label>\n                <input type=\"text\" formControlName=\"nome\" class=\"form-control\" name=\"nome\"\n                  placeholder=\"Ex: Gato branco perdido no campo da vila A em Foz\" maxlength=\"60\">\n              </div>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Tipo de animal</label>\n                <select name=\"tipo\" formControlName=\"tipo\" id=\"tipo\" class=\"form-control\">\n                  <option value=\"cachorro\">Cachorro</option>\n                  <option value=\"gato\">Gato</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-12\">\n              <div class=\"form-group\">\n                <label for=\"descricao\">Descrição</label>\n                <textarea formControlName=\"descricao\" id=\"\" cols=\"30\" rows=\"5\"\n                  class=\"form-control vertical-resize-forbidden\"></textarea>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Sexo</label>\n                <select name=\"sexo\" formControlName=\"sexo\" id=\"sexo\" class=\"form-control\">\n                  <option value=\"macho\">Macho</option>\n                  <option value=\"femea\">Fêmea</option>\n                  <option value=\"indefinido\">Indefinido</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"cor\">Cor</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"cor\" name=\"cor\" placeholder=\"Ex: Caramelo\">\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"raca\">Raça</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"raca\" name=\"raca\" placeholder=\"Ex: Caramelo\">\n              </div>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"porte\">Porte</label>\n                <select formControlName=\"porte\" name=\"porte\" id=\"porte\" class=\"form-control\">\n                  <option value=\"Pequeno\">Pequeno</option>\n                  <option value=\"Médio\">Médio</option>\n                  <option value=\"Grande\">Grande</option>\n                  <option value=\"Gigante\">Gigante</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"idade\">Idade</label>\n                <select formControlName=\"idade\" name=\"idade\" id=\"idade\" class=\"form-control\">\n                  <option value=\"Filhote (0 a 2 anos)\">Filhote (0 a 2 anos)</option>\n                  <option value=\"Adulto (2 a 8 anos)\">Adulto (2 a 8 anos)</option>\n                  <option value=\"Idoso (acima de 8 anos)\">Idoso (acima de 8 anos)</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-6 col-12\">\n              <div class=\"form-group\">\n                <label for=\"localizacao\">Localização</label>\n                <input type=\"text\" class=\"form-control\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\"\n                  type=\"text\" #search>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Resgatado</label>\n                <div class=\"form-group\">\n                  <div class=\"form-check form-check-inline\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"resgatado\" value=\"true\">\n                    <label class=\"form-check-label\" for=\"inlineCheckbox1\">Sim</label>\n                  </div>\n                  <div class=\"form-check form-check-inline\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"resgatado\" value=\"false\">\n                    <label class=\"form-check-label\">Não</label>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 mt-3\">\n              <ng-container *ngIf=\"latitude != null\">\n                <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" style=\"height: 300px\">\n                  <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\"\n                    (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\n                </agm-map>\n              </ng-container>\n            </div>\n            <div class=\"col-12\">\n              <p class=\"text-center mbottom-0 mt-3\">\n                <button class=\"btn btn-info text-uppercase padhor-30\" id=\"btnCadastrar\" type=\"submit\" [disabled]=\"!anuncioForm.valid\">Cadastrar</button>\n              </p>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cadastros/perdido-edit/perdido-edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cadastros/perdido-edit/perdido-edit.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid hidden\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 mt-3\">\n      <img src=\"../../../assets/img/1920x250-perdidos.png\" alt=\"Placeholder\" class=\"img-fluid d-none d-md-block rounded-corner\">\n      <img src=\"https://placehold.it/993x600\" alt=\"Placeholder\" class=\"img-fluid d-md-none rounded-corner\">\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid bg-f5f5f5 padver-50 padver-15-xs\">\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-lg-6\">\n      <div class=\"padding-30 bg-fff\">\n        <form id=\"formulario\" [formGroup]=\"anuncioForm\" (ngSubmit)=\"onSubmit()\"\n          (keydown.enter)=\"$event.preventDefault()\">\n          <h1 class=\"font-700 mbottom-30 mtop-0 text-uppercase text-center font-1-3em color-blue\">Cadastro de animal\n            perdido</h1>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-12\">\n              <div class=\"form-group\">\n                <label class=\"btn btn-imagem\">\n                  Fazer upload de imagens\n                  <input (change)=\"addFiles($event)\" type=\"file\" id=\"file\" name=\"file\" class=\"width-100per d-none\"\n                    multiple accept=\"image/*\">\n                </label>\n                <p class=\"help-block\">Dê preferência a fotos com aspecto wide (fotos tiradas com o celular virado) e\n                  com\n                  extensão .jpg ou .png <br>Ex: resolução 840x460.</p>\n              </div>\n              <ng-container *ngIf=\"previewUrl\">\n                <div class=\"row\">\n                  <div class=\"col-3 mb-3\" *ngFor=\"let item of previewUrl | keyvalue;\">\n                    <button (click)=\"removeFile(item.key)\" class=\"removeItem btn\"><i\n                        class=\"fas fa-times-circle\"></i></button>\n                    <img [src]=\"item.value\" class=\"img-preview img-fluid\" />\n                  </div>\n                  <div class=\"col-3 mb-3\" *ngFor=\"let item of animal.imagens\">\n                    <button (click)=\"removeExistingFile(item)\" class=\"removeItem btn\"><i\n                        class=\"fas fa-times-circle\"></i></button>\n                    <img src=\"{{url}}arquivo/perdido/{{anuncioPerdido.id}}/{{item}}\"\n                      class=\"img-preview img-fluid\" />\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Tipo de animal</label>\n                <select formControlName=\"tipo\" name=\"tipo\" id=\"tipo\" class=\"form-control\">\n                  <option value=\"cachorro\" selected=\"selected\">Cachorro</option>\n                  <option value=\"gato\">Gato</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Sexo</label>\n                <select formControlName=\"sexo\" name=\"sexo\" id=\"sexo\" class=\"form-control\">\n                  <option value=\"macho\" selected=\"selected\">Macho</option>\n                  <option value=\"femea\">Fêmea</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-12\">\n              <div class=\"form-group\">\n                <label for=\"descricao\">Descrição</label>\n                <textarea name=\"descricao\" id=\"\" cols=\"30\" rows=\"5\"\n                  class=\"form-control vertical-resize-forbidden\"></textarea>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"nome\">Nome</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"nome\" name=\"nome\" placeholder=\"Ex: João\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"idade\">Idade</label>\n                <select formControlName=\"idade\" name=\"idade\" id=\"idade\" class=\"form-control\">\n                  <option value=\"Filhote (0 a 2 anos)\" selected=\"selected\">Filhote (0 a 2 anos)</option>\n                  <option value=\"Adulto (2 a 8 anos)\">Adulto (2 a 8 anos)</option>\n                  <option value=\"Idoso (acima de 8 anos)\">Idoso (acima de 8 anos)</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"raca\">Raça</label>\n                <input type=\"text\" class=\"form-control\" name=\"raca\" formControlName=\"raca\" placeholder=\"Ex: Vira-lata\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"cor\">Cor</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"cor\" name=\"cor\" placeholder=\"Ex: Caramelo\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"porte\">Porte</label>\n                <select formControlName=\"porte\" name=\"porte\" id=\"porte\" class=\"form-control\">\n                  <option value=\"Pequeno\" selected=\"selected\">Pequeno</option>\n                  <option value=\"Médio\">Médio</option>\n                  <option value=\"Grande\">Grande</option>\n                  <option value=\"Gigante\">Gigante</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-6\">\n              <div class=\"form-group\">\n                <label for=\"localizacao\">Localização</label>\n                <input type=\"text\" class=\"form-control\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\"\n                  type=\"text\" #search>\n              </div>\n            </div>\n            <div class=\"col-12 mt-2\">\n              <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" style=\"height: 300px\">\n                <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\"\n                  (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\n              </agm-map>\n            </div>\n            <div class=\"col-12\">\n              <p class=\"text-center mbottom-0 mt-3\">\n                <button class=\"btn btn-info text-uppercase padhor-30\" id=\"btnCadastrar\"\n                  type=\"submit\" [disabled]=\"!anuncioForm.valid\">Cadastrar</button>\n              </p>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cadastros/perdido/perdido.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cadastros/perdido/perdido.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid hidden\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 mt-3\">\n      <img src=\"../../../assets/img/1920x250-perdidos.png\" alt=\"Placeholder\" class=\"img-fluid d-none d-md-block rounded-corner\">\n      <img src=\"https://placehold.it/993x600\" alt=\"Placeholder\" class=\"img-fluid d-md-none rounded-corner\">\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid bg-f5f5f5 padver-50 padver-15-xs\">\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-lg-6\">\n      <div class=\"padding-30 bg-fff\">\n        <form id=\"formulario\" [formGroup]=\"anuncioForm\" (ngSubmit)=\"onSubmit()\"\n          (keydown.enter)=\"$event.preventDefault()\">\n          <h1 class=\"font-700 mbottom-30 mtop-0 text-uppercase text-center font-1-3em color-blue\">Cadastro de animal\n            perdido</h1>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-12\">\n              <div class=\"form-group\">\n                <label class=\"btn btn-imagem\">\n                  Fazer upload de imagens\n                  <input (change)=\"addFiles($event)\" type=\"file\" id=\"file\" name=\"file\" class=\"width-100per d-none\"\n                    multiple accept=\"image/*\">\n                </label>\n                <p class=\"help-block\">Dê preferência a fotos com aspecto wide (fotos tiradas com o celular virado) e\n                  com\n                  extensão .jpg ou .png <br>Ex: resolução 840x460.</p>\n              </div>\n              <ng-container *ngIf=\"previewUrl\">\n                <div class=\"row\">\n                  <div class=\"col-3 mb-3\" *ngFor=\"let item of previewUrl | keyvalue;\">\n                    <button (click)=\"removeFile(item.key)\" class=\"removeItem btn\"><i\n                        class=\"fas fa-times-circle\"></i></button>\n                    <img [src]=\"item.value\" class=\"img-preview img-fluid\" />\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Tipo de animal</label>\n                <select formControlName=\"tipo\" name=\"tipo\" id=\"tipo\" class=\"form-control\">\n                  <option value=\"cachorro\" selected=\"selected\">Cachorro</option>\n                  <option value=\"gato\">Gato</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label class=\"mbottom-5\">Sexo</label>\n                <select formControlName=\"sexo\" name=\"sexo\" id=\"sexo\" class=\"form-control\">\n                  <option value=\"macho\" selected=\"selected\">Macho</option>\n                  <option value=\"femea\">Fêmea</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-12\">\n              <div class=\"form-group\">\n                <label for=\"descricao\">Descrição</label>\n                <textarea name=\"descricao\" id=\"\" cols=\"30\" rows=\"5\"\n                  class=\"form-control vertical-resize-forbidden\"></textarea>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"nome\">Nome</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"nome\" name=\"nome\" placeholder=\"Ex: João\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"idade\">Idade</label>\n                <select formControlName=\"idade\" name=\"idade\" id=\"idade\" class=\"form-control\">\n                  <option value=\"Filhote (0 a 2 anos)\" selected=\"selected\">Filhote (0 a 2 anos)</option>\n                  <option value=\"Adulto (2 a 8 anos)\">Adulto (2 a 8 anos)</option>\n                  <option value=\"Idoso (acima de 8 anos)\">Idoso (acima de 8 anos)</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"raca\">Raça</label>\n                <input type=\"text\" class=\"form-control\" name=\"raca\" formControlName=\"raca\" placeholder=\"Ex: Vira-lata\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"cor\">Cor</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"cor\" name=\"cor\" placeholder=\"Ex: Caramelo\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"porte\">Porte</label>\n                <select formControlName=\"porte\" name=\"porte\" id=\"porte\" class=\"form-control\">\n                  <option value=\"Pequeno\" selected=\"selected\">Pequeno</option>\n                  <option value=\"Médio\">Médio</option>\n                  <option value=\"Grande\">Grande</option>\n                  <option value=\"Gigante\">Gigante</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-6\">\n              <div class=\"form-group\">\n                <label for=\"localizacao\">Localização</label>\n                <input type=\"text\" class=\"form-control\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\"\n                  type=\"text\" #search>\n              </div>\n            </div>\n            <div class=\"col-12 mt-2\">\n              <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" style=\"height: 300px\">\n                <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\"\n                  (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\n              </agm-map>\n            </div>\n            <div class=\"col-12\">\n              <p class=\"text-center mbottom-0 mt-3\">\n                <button class=\"btn btn-info text-uppercase padhor-30\" id=\"btnCadastrar\"\n                  type=\"submit\" [disabled]=\"!anuncioForm.valid\">Cadastrar</button>\n              </p>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cadastros/usuario-edit/usuario-edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cadastros/usuario-edit/usuario-edit.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-grey-home padver-50 padver-15-xs\">\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-lg-6\">\n      <div class=\"bg-fff px-4 py-4 rounded-corner\">\n        <form [formGroup]=\"usuarioForm\" (ngSubmit)=\"onSubmit()\">\n          <h1 class=\"font-700 mbottom-30 mtop-0 text-uppercase text-center color-blue pt-3\">Dados de\n            usuário</h1>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"nome\">Nome</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"nome\" name=\"nome\"\n                  placeholder=\"Ex: João das Neves\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"email\">E-mail</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"email\" name=\"email\"\n                  placeholder=\"Ex: joao@dasneves.com\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"celular\">Celular</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"celular\" name=\"celular\"\n                  placeholder=\"Ex: 45988776655\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"telefone\">Telefone</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"telefone\" name=\"telefone\"\n                  placeholder=\"Ex: 4535001122\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"senha\">Insira a senha</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"senha\" name=\"senha\" placeholder=\"******\"\n                  id=\"senhaUsuario\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-12\">\n              <div class=\"form-group\">\n                <ng-container *ngIf=\"this.fileData\">\n                  <img id=\"profilePicture\" class=\"hidden img-fluid\">\n                  <a (click)=\"removeFile()\" href=\"#\" class=\"alert-link\" class=\"hidden block mbottom-15 link-red\">Remover\n                    foto</a>\n                </ng-container>\n                <label class=\"btn btn-imagem\">\n                  Fazer upload de imagem\n                  <input type=\"file\" #myInput (change)=\"fileProgress($event)\" class=\"width-100per d-none\"\n                    accept=\"image/png, image/jpeg\">\n                </label>\n                <p class=\"help-block\">Dê preferência a fotos com aspecto quadrado e com extensão .jpg ou .png. Ex:\n                  resolução 200x200.</p>\n              </div>\n              <ng-container *ngIf=\"previewUrl\">\n                <div class=\"row\">\n                  <div class=\"col-3 mb-3\" *ngFor=\"let item of previewUrl\">\n                    <img [src]=\"item\" class=\"img-fluid\" />\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n          <p class=\"text-center mbottom-0 mt-2\"><button class=\"btn btn-info text-uppercase padhor-30\"\n              id=\"btnCadastrarUsuario\" type=\"submit\">Atualizar</button></p>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cadastros/usuario/usuario.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cadastros/usuario/usuario.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid hidden bg-grey-home\">\n  <div class=\"row\">\n    <div class=\"col-12 mt-3\">\n      <img src=\"https://placehold.it/1920x250\" alt=\"Placeholder\" class=\"img-fluid d-none d-md-block rounded-corner\">\n      <img src=\"https://placehold.it/993x600\" alt=\"Placeholder\" class=\"img-fluid d-md-none rounded-corner\">\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid bg-grey-home padver-50 padver-15-xs\">\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-lg-6\">\n      <div class=\"bg-fff px-4 py-4 rounded-corner\">\n        <form [formGroup]=\"usuarioForm\" (ngSubmit)=\"onSubmit()\">\n          <h1 class=\"font-700 mbottom-30 mtop-0 text-uppercase text-center color-blue pt-3\">Cadastro de\n            usuário</h1>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"nome\">Nome</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"nome\" name=\"nome\"\n                  placeholder=\"Ex: João das Neves\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"email\">E-mail</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"email\" name=\"email\"\n                  placeholder=\"Ex: joao@dasneves.com\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"celular\">Celular</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"celular\" name=\"celular\"\n                  placeholder=\"Ex: 45988776655\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"telefone\">Telefone</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"telefone\" name=\"telefone\"\n                  placeholder=\"Ex: 4535001122\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"senha\">Senha</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"senha\" name=\"senha\"\n                  placeholder=\"******\" id=\"senhaUsuario\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"senhaNovamente\">Digite a senha novamente</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"confirmasenha\" placeholder=\"******\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-12\">\n              <div class=\"form-group\">\n                <ng-container *ngIf=\"this.fileData\">\n                  <img id=\"profilePicture\" class=\"hidden img-fluid\">\n                  <a (click)=\"removeFile()\" href=\"#\" class=\"alert-link\" class=\"hidden block mbottom-15 link-red\">Remover\n                    foto</a>\n                </ng-container>\n                <label class=\"btn btn-imagem\">\n                  Fazer upload de imagem\n                  <input type=\"file\" #myInput (change)=\"fileProgress($event)\" class=\"width-100per d-none\"\n                    accept=\"image/png, image/jpeg\">\n                </label>\n                <p class=\"help-block\">Dê preferência a fotos com aspecto quadrado e com extensão .jpg ou .png. Ex:\n                  resolução 200x200.</p>\n              </div>\n              <ng-container *ngIf=\"previewUrl\">\n                <div class=\"row\">\n                  <div class=\"col-3 mb-3\" *ngFor=\"let item of previewUrl\">\n                    <img [src]=\"item\" class=\"img-fluid\" />\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n          <p class=\"text-center mbottom-0 mt-2\"><button class=\"btn btn-info text-uppercase padhor-30\"\n              id=\"btnCadastrarUsuario\" type=\"submit\">Cadastrar</button></p>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cards/card-doacao/card-doacao.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cards/card-doacao/card-doacao.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"card\">\n    <!-- <img src=\"{{this.url}} + arquivo/doacao/ + {{doacao.id}} + / + {{this.doacao.animal.imagens[0]}}\" class=\"img-fluid\" alt=\"\"> -->\n    <a routerLink=\"/doacao/{{doacao.id}}\">\n      <div class=\"img-todos-animais\" [style.background-image]=\"style | safe: 'style'\"></div>\n    </a>\n\n    <div class=\"absolute-pet-details d-flex\">\n      <div class=\"flex-fill\">\n        Nome: {{doacao.animal.nome}}\n      </div>\n      <ng-container *ngIf=\"type != 'dashboard'\">\n        {{doacao.cidade}}, {{doacao.estado}}\n      </ng-container>\n      <ng-container *ngIf=\"type == 'dashboard'\">\n        <div class=\"dropdown\">\n          <button class=\"btn btn-link justify-content-end\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: #fff\">\n            <i class=\"fas fa-ellipsis-v\"></i>\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" routerLink=\"/doacao/{{doacao.id}}\">Visualizar</a>\n            <a class=\"dropdown-item\" [routerLink]=\"[ '/editar-doacao', doacao.id ]\">Editar</a>\n            <!-- <a class=\"dropdown-item\" href=\"#\">Inativar</a> -->\n            <a class=\"dropdown-item\" (click)=\"removeDoacao()\">Excluir</a>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cards/card-encontrado/card-encontrado.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cards/card-encontrado/card-encontrado.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <a routerLink=\"/encontrado/{{encontrado.id}}\">\n    <div class=\"img-todos-animais\" [style.background-image]=\"style | safe: 'style'\"></div>\n  </a>\n  <div class=\"absolute-pet-details d-flex\">\n    <div class=\"flex-fill\">\n      Nome: {{encontrado.animal.nome}}\n    </div>\n    <ng-container *ngIf=\"type != 'dashboard'\">\n      {{encontrado.cidade}}, {{encontrado.estado}}\n    </ng-container>\n    <ng-container *ngIf=\"type == 'dashboard'\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-link justify-content-end\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: #fff\">\n          <i class=\"fas fa-ellipsis-v\"></i>\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" routerLink=\"/encontrado/{{encontrado.id}}\">Visualizar</a>\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/editar-encontrado', encontrado.id ]\">Editar</a>\n          <!-- <a class=\"dropdown-item\" href=\"#\">Inativar</a> -->\n          <a class=\"dropdown-item\" (click)=\"removeEncontrado()\">Excluir</a>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cards/card-perdido/card-perdido.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cards/card-perdido/card-perdido.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <a routerLink=\"/perdido/{{perdido.id}}\">\n    <div class=\"img-todos-animais\" [style.background-image]=\"style | safe: 'style'\"></div>\n  </a>\n  <div class=\"absolute-pet-details d-flex\">\n    <div class=\"flex-fill\">\n      Nome: {{perdido.animal.nome}}\n    </div>\n    <ng-container *ngIf=\"type != 'dashboard'\">\n      {{perdido.cidade}}, {{perdido.estado}}\n    </ng-container>\n    <ng-container *ngIf=\"type == 'dashboard'\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-link justify-content-end\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: #fff\">\n          <i class=\"fas fa-ellipsis-v\"></i>\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" routerLink=\"/perdido/{{perdido.id}}\">Visualizar</a>\n          <a class=\"dropdown-item\" [routerLink]=\"[ '/editar-perdido', perdido.id ]\">Editar</a>\n          <!-- <a class=\"dropdown-item\" href=\"#\">Inativar</a> -->\n          <a class=\"dropdown-item\" (click)=\"removePerdido()\">Excluir</a>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid bg-gray-f5f5f5\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-2 padhor-0 dashboard-height-hack bg-dashboard-1\">\n      <div class=\"dashboard padhor-15\">\n        <div class=\"py-4 padver-15-xs\">\n          <ul class=\"nav flex-column\" id=\"dashboardTabs\">\n            <h2>Meus anúncios</h2>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"[ 'doacao' ]\">Doações</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"[ 'perdido' ]\">Animal Perdido</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"[ 'encontrado' ]\">Animal Encontrado</a>\n            </li>\n            <h2 class=\"mt-4\">Meus dados</h2>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"[ 'editar-usuario', usuarioId ]\">Meu perfil</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-10 bg-f5f5f5 dashboard-height-hack\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/detalhes/detalhe-doacao/detalhe-doacao.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detalhes/detalhe-doacao/detalhe-doacao.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid bg-f5f5f5 padver-50 padver-15-xs\">\n  <div class=\"row\" *ngIf=\"doacao\">\n    <div class=\"col-12 col-lg-9 col-md-8 mbottom-15\">\n      <div id=\"carouselDoacao\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"0\">\n        <ol class=\"carousel-indicators width-70\">\n          <ng-container *ngFor=\"let item of doacao.animal.imagens; let i = index\">\n            <li data-target=\"#carouselDoacao\" attr.data-slide-to=\"{{i}}\" [ngClass]=\"{ active: i == 0 }\"></li>\n          </ng-container>\n        </ol>\n        <div class=\"carousel-inner\">\n          <ng-container *ngFor=\"let item of doacao.animal.imagens; let i = index\">\n            <div class=\"carousel-item\" [ngClass]=\"{ active: i == 0 }\">\n              <img src=\"{{url}}arquivo/doacao/{{doacao.id}}/{{item}}\" class=\"img-carousel\">\n            </div>\n          </ng-container>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselDoacao\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselDoacao\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n      <div class=\"padding-30 mbottom-15 bg-fff anuncio-infos\">\n        <div class=\"row\">\n          <div class=\"col-12 mb-3\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-1\">\n                <h2 class=\"atributo\">Descrição</h2>\n              </div>\n              <div class=\"col-12 col-md-10\">\n                <p class=\"atributo\">{{doacao.animal.descricao}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Nome</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{doacao.animal.nome}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Tipo</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{doacao.animal.tipo}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Sexo</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{doacao.animal.sexo}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Cor</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{doacao.animal.cor}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Porte</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{doacao.animal.porte}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Idade</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{doacao.animal.idade}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Vacinado</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <ng-container *ngIf=\"!doacao.animal.vacinado\">\n                  <p class=\"atributo\"><span class=\"icon-width\"><i class=\"fa fa-times color-red\"></i></span>Não</p>\n                </ng-container>\n                <ng-container *ngIf=\"doacao.animal.vacinado\">\n                  <p class=\"atributo\"><span class=\"icon-width\"><i class=\"fa fa-check color-green\"></i></span>Sim</p>\n                </ng-container>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Castrado</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <ng-container *ngIf=\"!doacao.animal.castrado\">\n                  <p class=\"atributo\"><span class=\"icon-width\"><i class=\"fa fa-times color-red\"></i></span>Não</p>\n                </ng-container>\n                <ng-container *ngIf=\"doacao.animal.castrado\">\n                  <p class=\"atributo\"><span class=\"icon-width\"><i class=\"fa fa-check color-green\"></i></span>Sim</p>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12 col-lg-3 col-md-4\">\n      <div class=\"bg-teal padding-15\">\n        <p class=\"color-fff text-uppercase font-700 mbottom-0\">Sobre o doador</p>\n      </div>\n      <div class=\"padding-15 bg-fff text-center\">\n        <img id=\"ajaxPerfilImagem\" src=\"https://placehold.it/768x768\" alt=\"\" class=\"img-fluid rounded-circle mx-auto\"\n          style=\"width: 200px;\">\n        <h3 id=\"ajaxPerfilNome\" class=\"text-center font-700 font-1-1em text-uppercase mtop-15 mbottom-0\">\n          {{doacao.animal.usuario.nome}}</h3>\n      </div>\n      <div class=\"padding-15 bg-fff\" id=\"listaDeContato\"></div> <a href=\"\"\n        class=\"btn btn-red mtop-15 width-100per text-uppercase denuncia\">\n        <i class=\"fa fa-flag mright-10\"></i>Denunciar\n        anúncio</a>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/detalhes/detalhe-encontrado/detalhe-encontrado.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detalhes/detalhe-encontrado/detalhe-encontrado.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid bg-f5f5f5 padver-50 padver-15-xs\">\n  <div class=\"row\" *ngIf=\"encontrado\">\n    <div class=\"col-12 col-lg-9 col-md-8 mbottom-15\">\n      <div id=\"carouselencontrado\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"0\">\n        <ol class=\"carousel-indicators width-70\">\n          <ng-container *ngFor=\"let item of encontrado.animal.imagens; let i = index\">\n            <li data-target=\"#carouselencontrado\" attr.data-slide-to=\"{{i}}\" [ngClass]=\"{ active: i == 0 }\"></li>\n          </ng-container>\n        </ol>\n        <div class=\"carousel-inner\">\n          <ng-container *ngFor=\"let item of encontrado.animal.imagens; let i = index\">\n            <div class=\"carousel-item\" [ngClass]=\"{ active: i == 0 }\">\n              <img src=\"{{url}}arquivo/encontrado/{{encontrado.id}}/{{item}}\" class=\"img-carousel\">\n            </div>\n          </ng-container>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselencontrado\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselencontrado\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n      <div class=\"padding-30 mbottom-15 bg-fff anuncio-infos\">\n        <div class=\"row\">\n          <div class=\"col-12 mb-3\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-1\">\n                <h2 class=\"atributo\">Descrição</h2>\n              </div>\n              <div class=\"col-12 col-md-10\">\n                <p class=\"atributo\">{{encontrado.animal.descricao}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Título</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{encontrado.animal.nome}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Tipo</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{encontrado.animal.tipo}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Sexo</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{encontrado.animal.sexo}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Cor</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{encontrado.animal.cor}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Raça</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{encontrado.animal.raca}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Porte</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{encontrado.animal.porte}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Idade</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{encontrado.animal.idade}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Resgatado</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <ng-container *ngIf=\"!encontrado.resgatado\">\n                  <p class=\"atributo\"><span class=\"icon-width\"><i class=\"fa fa-times color-red\"></i></span>Não</p>\n                </ng-container>\n                <ng-container *ngIf=\"encontrado.resgatado\">\n                  <p class=\"atributo\"><span class=\"icon-width\"><i class=\"fa fa-check color-green\"></i></span>Sim</p>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <agm-map [latitude]=\"encontrado.lat\" [longitude]=\"encontrado.lng\" [zoom]=\"centerZoom\" style=\"height: 300px\">\n              <agm-marker [latitude]=\"encontrado.lat\" [longitude]=\"encontrado.lng\" [markerDraggable]=\"false\">\n              </agm-marker>\n            </agm-map>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12 col-lg-3 col-md-4\">\n      <div class=\"bg-teal padding-15\">\n        <p class=\"color-fff text-uppercase font-700 mbottom-0\">Sobre o anunciante</p>\n      </div>\n      <div class=\"padding-15 bg-fff text-center\">\n        <img id=\"ajaxPerfilImagem\" src=\"{{url}}arquivo/{{encontrado.animal.usuario.id}}/{{encontrado.animal.usuario.imagem}}\" alt=\"\" class=\"img-fluid rounded-circle mx-auto\"\n          style=\"width: 200px;\">\n        <h3 id=\"ajaxPerfilNome\" class=\"text-center font-700 font-1-1em text-uppercase mtop-15 mbottom-0\">\n          {{encontrado.animal.usuario.nome}}</h3>\n      </div>\n      <div class=\"padding-15 bg-fff\" id=\"listaDeContato\"></div> <a href=\"\"\n        class=\"btn btn-red mtop-15 width-100per text-uppercase denuncia\">\n        <i class=\"fa fa-flag mright-10\"></i>Denunciar\n        anúncio</a>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/detalhes/detalhe-perdido/detalhe-perdido.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detalhes/detalhe-perdido/detalhe-perdido.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid bg-f5f5f5 padver-50 padver-15-xs\">\n  <div class=\"row\" *ngIf=\"perdido\">\n    <div class=\"col-12 col-lg-9 col-md-8 mbottom-15\">\n      <div id=\"carouselperdido\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"0\">\n        <ol class=\"carousel-indicators width-70\">\n          <ng-container *ngFor=\"let item of perdido.animal.imagens; let i = index\">\n            <li data-target=\"#carouselperdido\" attr.data-slide-to=\"{{i}}\" [ngClass]=\"{ active: i == 0 }\"></li>\n          </ng-container>\n        </ol>\n        <div class=\"carousel-inner\">\n          <ng-container *ngFor=\"let item of perdido.animal.imagens; let i = index\">\n            <div class=\"carousel-item\" [ngClass]=\"{ active: i == 0 }\">\n              <img src=\"{{url}}arquivo/perdido/{{perdido.id}}/{{item}}\" class=\"img-carousel\">\n            </div>\n          </ng-container>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselperdido\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselperdido\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n      <div class=\"padding-30 mbottom-15 bg-fff anuncio-infos\">\n        <div class=\"row\">\n          <div class=\"col-12 mb-3\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-1\">\n                <h2 class=\"atributo\">Descrição</h2>\n              </div>\n              <div class=\"col-12 col-md-10\">\n                <p class=\"atributo\">{{perdido.animal.descricao}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Título</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{perdido.animal.nome}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Tipo</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{perdido.animal.tipo}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Sexo</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{perdido.animal.sexo}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Cor</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{perdido.animal.cor}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Raça</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{perdido.animal.raca}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Porte</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{perdido.animal.porte}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Idade</h2>\n              </div>\n              <div class=\"col-12 col-md-9 col-lg-10\">\n                <p class=\"atributo\">{{perdido.animal.idade}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-3 col-lg-2\">\n                <h2 class=\"atributo\">Resgatado</h2>\n              </div>\n              <!-- <div class=\"col-12 col-md-9 col-lg-10\">\n                <ng-container *ngIf=\"!perdido.animal.resgatado\">\n                  <p class=\"atributo\"><span class=\"icon-width\"><i class=\"fa fa-times color-red\"></i></span>Não</p>\n                </ng-container>\n                <ng-container *ngIf=\"perdido.animal.resgatado\">\n                  <p class=\"atributo\"><span class=\"icon-width\"><i class=\"fa fa-check color-green\"></i></span>Sim</p>\n                </ng-container>\n              </div> -->\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <agm-map [latitude]=\"perdido.lat\" [longitude]=\"perdido.lng\" [zoom]=\"centerZoom\" style=\"height: 300px\">\n              <agm-marker [latitude]=\"perdido.lat\" [longitude]=\"perdido.lng\" [markerDraggable]=\"false\">\n              </agm-marker>\n            </agm-map>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12 col-lg-3 col-md-4\">\n      <div class=\"bg-teal padding-15\">\n        <p class=\"color-fff text-uppercase font-700 mbottom-0\">Sobre o anunciante</p>\n      </div>\n      <div class=\"padding-15 bg-fff text-center\">\n        <img id=\"ajaxPerfilImagem\" src=\"{{url}}arquivo/{{perdido.animal.usuario.id}}/{{perdido.animal.usuario.imagem}}\" alt=\"\" class=\"img-fluid rounded-circle mx-auto\"\n          style=\"width: 200px;\">\n        <h3 id=\"ajaxPerfilNome\" class=\"text-center font-700 font-1-1em text-uppercase mtop-15 mbottom-0\">\n          {{perdido.animal.usuario.nome}}</h3>\n      </div>\n      <div class=\"padding-15 bg-fff\" id=\"listaDeContato\"></div> <a href=\"\"\n        class=\"btn btn-red mtop-15 width-100per text-uppercase denuncia\">\n        <i class=\"fa fa-flag mright-10\"></i>Denunciar\n        anúncio</a>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-1BBCB6 padver-10\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 px-3\">\n      Pettix\n      <!-- <img src=\"../../assets/img/logo/lucky-pets-logo-white-336x98.png\" alt=\"Logo do Lucky Pets\" class=\"img-fluid center-block pull-left logo-footer\"> -->\n      <!-- <ul class=\"lucky-footer-links float-right\">\n                            <li><a href=\"quem-somos.php\">Sobre</a></li>\n                        </ul> -->\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid bg-333 padver-10\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 px-3\">\n      <p class=\"mbottom-0 color-fff text-center font-0-8em\">\n        Desenvolvido por Amanda Louise Acosta Morais\n      </p>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modalLocalizacao\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLocalizacaoLabel\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n            aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title text-center\" id=\"modalLocalizacaoLabel\">Localização</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p class=\"text-center font-300\">Não está em <strong id=\"naoEstaEmLocalizacao\"><?= $_SESSION[\"cidade\"]; ?> -\n            <?= $_SESSION[\"estado\"]; ?></strong>?</p>\n        <form action=\"\" id=\"formLocalizacao\" method=\"POST\" class=\"bg-fff padding-15 mbottom-0 mbottom-0-xs\">\n          <div class=\"form-group\">\n            <label for=\"estado\">Estado</label>\n            <select name=\"estado\" id=\"estado\" class=\"form-control  \" required>\n\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"cidade\">Cidade</label>\n            <select name=\"cidade\" id=\"cidade\" class=\"form-control  \" required>\n              <option value=\"\" disabled=\"disabled\" selected=\"selected\">Escolha um estado</option>\n            </select>\n          </div>\n          <button class=\"btnLocalizacao btn btn-gradient text-uppercase   width-100per\">Salvar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modalEsqueciSenha\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalEsqueciSenhaLabel\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n            aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title text-uppercase text-center font-700\" id=\"modalEsqueciSenhaLabel\">Esqueci a senha</h4>\n      </div>\n      <div class=\"modal-body\">\n        <!-- http://31.220.53.123:8080/luckypets-servidor/api/usuario/login -->\n        <form class=\"\" method=\"POST\">\n          <div class=\"form-group\">\n            <label for=\"email\" class=\"font-300\">E-mail</label>\n            <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"maria@gmail.com\">\n          </div>\n          <p class=\"text-center mbottom-0\"><button type=\"submit\" class=\"btn btn-gradient text-uppercase   padhor-30\">Recuperar senha</button></p>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <p class=\"text-center mbottom-0\"><a href=\"\" data-dismiss=\"modal\" data-toggle=\"modal\"\n            data-target=\"#modalLogin\">Lembrei minha senha</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <a class=\"navbar-brand pb-2\" href=\"#\">\n    <div class=\"col-xs-12 logo-txt\">\n      Pettix\n      <!-- <img src=\"../../assets/img/logo/lucky-pets-logo-180x260.png\" alt=\"Logo do Lucky Pets\"\n          class=\"img-fluid d-none d-md-block\" style=\"max-height: 55px;\">\n        <img src=\"../../assets/img/logo/lucky-pets-logo-336x98.png\" alt=\"Logo do Lucky Pets\" class=\"img-fluid d-md-none\"\n          style=\"max-height: 20px;\"> -->\n    </div>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n    aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Todos os animais\n        </a>\n        <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <li><a class=\"dropdown-item\" [routerLink]=\"['/listagem-doacao']\">Para doação</a></li>\n          <li><a class=\"dropdown-item\" [routerLink]=\"['/listagem-perdido']\">Perdidos</a></li>\n          <li><a class=\"dropdown-item\" [routerLink]=\"['/listagem-encontrado']\">Encontrados</a></li>\n        </ul>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Anunciar\n        </a>\n        <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <li><a class=\"dropdown-item\" [routerLink]=\"['/nova-doacao']\">Doação de animal</a></li>\n          <li><a class=\"dropdown-item\" [routerLink]=\"['/novo-perdido']\">Animal perdido</a></li>\n          <li><a class=\"dropdown-item\" [routerLink]=\"['/novo-encontrado']\">Animal encontrado</a></li>\n        </ul>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Sobre</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <ng-container *ngIf=\"this.usuario\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{usuario.nome}}\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"\" [routerLink]=\"[ '/dashboard' ]\">Dashboard</a>\n            <a class=\"dropdown-item\" href=\"\" (click)=\"logout()\">Logout</a>\n          </div>\n        </li>\n      </ng-container>\n      <ng-container *ngIf=\"this.usuario == null\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"[ '/novo-usuario' ]\">Registrar</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-signin\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalLogin\">Entrar</a>\n        </li>\n      </ng-container>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"modalLogin\" tabindex=\"-1\" aria-labelledby=\"modalLoginLabel\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Login</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"mbottom-15\" id=\"formLogin\">\n          <ng-container *ngIf=\"errorAlert\">\n            <div class=\"alert alert-danger\" role=\"alert\">\n              E-mail ou senha incorretos.\n            </div>\n          </ng-container>\n          <div class=\"form-group\">\n            <label for=\"formLoginEmail\" class=\"font-300\">E-mail</label>\n            <input type=\"text\" [(ngModel)]=\"formLoginEmail\" name=\"formLoginEmail\" class=\"form-control\"\n              placeholder=\"maria@gmail.com\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"formLoginSenha\" class=\"font-300\">Senha</label>\n            <input type=\"password\" [(ngModel)]=\"formLoginSenha\" name=\"formLoginSenha\" class=\"form-control\"\n              placeholder=\"******\">\n          </div>\n          <p class=\"text-center mbottom-0\"><button type=\"button\"\n              class=\"btn btn-secondary block width-100per text-uppercase padhor-30\" id=\"btnLogin\"\n              (click)=\"login()\">Fazer login</button></p>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <p class=\"text-center mbottom-0\"><a href=\"\" data-dismiss=\"modal\" data-toggle=\"modal\"\n            data-target=\"#modalEsqueciSenha\">Esqueci minha senha</a></p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"modalEsqueciSenha\" tabindex=\"-1\"\n    aria-labelledby=\"modalEsqueciSenhaLabel\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Esqueci a senha</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form class=\"\" method=\"POST\">\n            <div class=\"form-group\">\n              <label for=\"email\" class=\"font-300\">E-mail</label>\n              <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"maria@gmail.com\">\n            </div>\n            <p class=\"text-center mbottom-0\"><button type=\"submit\" class=\"btn btn-gradient text-uppercase   padhor-30\">Recuperar\n                senha</button></p>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <p class=\"text-center mbottom-0\"><a href=\"\" data-dismiss=\"modal\" data-toggle=\"modal\"\n              data-target=\"#modalLogin\">Fazer login</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page/landing-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page/landing-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-md-flex h-100vh align-items-center\">\n\n  <!-- First Half -->\n\n  <div class=\"col-md-4 p-0 bg-indigo h-100vh\">\n    <div class=\"text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center\">\n      <div class=\"logoarea pt-5 pb-5\">\n        First half content here\n      </div>\n    </div>\n  </div>\n\n  <!-- Second Half -->\n\n  <div class=\"col-md-8 p-0 bg-white h-100vh loginarea\">\n    <div class=\"d-md-flex align-items-center h-100vh p-5 justify-content-center\">\n      <div class=\"card p-3\" style=\"width: 70%\">\n        <form class=\"p-3\" action=\"\" method=\"POST\" id=\"formLogin\">\n          <ng-container *ngIf=\"errorAlert\">\n            <div class=\"alert alert-danger\" role=\"alert\">\n              E-mail ou senha incorretos.\n            </div>\n          </ng-container>\n          <div class=\"form-group\">\n            <label for=\"formLoginEmail\" class=\"font-300\">E-mail</label>\n            <input type=\"text\" [(ngModel)]=\"formLoginEmail\" name=\"formLoginEmail\" class=\"form-control\"\n              placeholder=\"maria@gmail.com\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"formLoginSenha\" class=\"font-300\">Senha</label>\n            <input type=\"password\" [(ngModel)]=\"formLoginSenha\" name=\"formLoginSenha\" class=\"form-control\"\n              placeholder=\"******\">\n          </div>\n          <p class=\"text-center mbottom-0\"><button type=\"button\"\n              class=\"btn btn-secondary block width-100per text-uppercase   padhor-30\" id=\"btnLogin\"\n              (click)=\"login()\">Fazer login</button></p>\n        </form>\n        <p class=\"px-3\"><a href=\"\">Esqueceu a senha?</a></p>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n<!-- <div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"d-flex justify-content-center align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-3 h-100\">\n          <img src=\"https://placehold.it/500x800\" class=\"img-fluid\" alt=\"\">\n        </div>\n        <div class=\"col-9 h-100\">\n          <div class=\"card\">\n            <form class=\"p-3\" action=\"\" method=\"POST\" id=\"formLogin\">\n              <div class=\"error height-0\">\n                <div class=\"alert alert-danger\" role=\"alert\">\n                  E-mail ou senha incorretos.\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"formLoginEmail\" class=\"font-300\">E-mail</label>\n                <input type=\"text\" name=\"formLoginEmail\" class=\"form-control\" placeholder=\"maria@gmail.com\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"formLoginSenha\" class=\"font-300\">Senha</label>\n                <input type=\"password\" name=\"formLoginSenha\" class=\"form-control\" placeholder=\"******\">\n              </div>\n              <p class=\"text-center mbottom-0\"><button type=\"button\"\n                  class=\"btn btn-gradient block width-100per text-uppercase   padhor-30\"\n                  id=\"btnLogin\">Logar</button></p>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n<!-- <div class=\"row align-items-center h-100\">\n    <div class=\"w-95 h-60\">\n      <div class=\"col-md-3 h-100\">\n        <img src=\"https://placehold.it/500x800\" class=\"img-fluid\" alt=\"\">\n      </div>\n      <div class=\"col-md-9 h-100\">\n        <div class=\"card\">\n          <form class=\"p-3\" action=\"\" method=\"POST\" id=\"formLogin\">\n            <div class=\"error height-0\">\n              <div class=\"alert alert-danger\" role=\"alert\">\n                E-mail ou senha incorretos.\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formLoginEmail\" class=\"font-300\">E-mail</label>\n              <input type=\"text\" name=\"formLoginEmail\" class=\"form-control\" placeholder=\"maria@gmail.com\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"formLoginSenha\" class=\"font-300\">Senha</label>\n              <input type=\"password\" name=\"formLoginSenha\" class=\"form-control\" placeholder=\"******\">\n            </div>\n            <p class=\"text-center mbottom-0\"><button type=\"button\"\n                class=\"btn btn-gradient block width-100per text-uppercase   padhor-30\"\n                id=\"btnLogin\">Logar</button></p>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/listagem/listagem-doacao/listagem-doacao.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listagem/listagem-doacao/listagem-doacao.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid bg-f5f5f5 padver-30 padver-15-xs\">\n  <img src=\"../../../assets/img/1920x250-doacao.png\" class=\"rounded img-fluid mb-4\" alt=\"\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"d-block d-md-flex bd-highlight\">\n        <div class=\"p-md-2 bd-highlight\">\n          <!-- tipo, porte, sexo, idade, castrado -->\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Espécie</option>\n            <option value=\"Todos\">Todos</option>\n            <option value=\"Cachorro\">Cachorro</option>\n            <option value=\"Gato\">Gato</option>\n            <option value=\"Outros\">Outros</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Porte</option>\n            <option value=\"Pequeno\">Pequeno</option>\n            <option value=\"Médio\">Médio</option>\n            <option value=\"Grande\">Grande</option>\n            <option value=\"Gigante\">Gigante</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Sexo</option>\n            <option value=\"Fêmea\">Fêmea</option>\n            <option value=\"Macho\">Macho</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Idade</option>\n            <option value=\"Filhote (0 a 2 anos)\">Filhote (0 a 2 anos)</option>\n            <option value=\"Adulto (2 a 8 anos)\">Adulto (2 a 8 anos)</option>\n            <option value=\"Idoso (acima de 8 anos)\">Idoso (acima de 8 anos)</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 mt-3 mt-md-0 p-md-2 bd-highlight float-right float-md-none\">\n          <button class=\"btn btn-info\">Buscar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row mt-4\">\n    <ng-container *ngIf=\"!doacoes\">\n      <div class=\"col-12\">\n        <div class=\"bg-fff w-100\" style=\"border-radius: 10px;\">\n          <div class=\"py-5\" style=\"height: 51.2vh\">\n            <h2 class=\"text-center font-2em text-uppercase font-700 mt-1\">Ops!</h2>\n            <p class=\"font-1-2em text-center font-300 mbottom-0\">Parece que a sua busca não retornou nenhum\n              resultado.<br>Mude os filtros e tente novamente.</p>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n  <ng-container *ngIf=\"doacoes\">\n    <div class=\"row\">\n      <ng-container *ngFor=\"let item of doacoes | paginate: config\">\n        <div class=\"col-12 col-md-3 mb-4\">\n          <app-card-doacao [doacao]=\"item\">\n          </app-card-doacao>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"row\" id=\"rowPagination\">\n      <div class=\"col-xs-12 align-center\">\n        <pagination-controls [previousLabel]=\"labels.previousLabel\" [nextLabel]=\"labels.nextLabel\"\n          [screenReaderPaginationLabel]=\"labels.screenReaderPaginationLabel\"\n          [screenReaderPageLabel]=\"labels.screenReaderPageLabel\"\n          [screenReaderCurrentLabel]=\"labels.screenReaderCurrentLabel\" (pageChange)=\"pageChanged($event)\">\n        </pagination-controls>\n      </div>\n    </div>\n  </ng-container>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/listagem/listagem-encontrado/listagem-encontrado.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listagem/listagem-encontrado/listagem-encontrado.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid bg-f5f5f5 padver-30 padver-15-xs\">\n  <img src=\"../../../assets/img/1920x250-encontrados.png\" class=\"rounded img-fluid mb-4\" alt=\"\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"d-block d-md-flex bd-highlight\">\n        <div class=\"p-md-2 bd-highlight\">\n          <!-- tipo, porte, sexo, idade, castrado -->\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Espécie</option>\n            <option value=\"Todos\">Todos</option>\n            <option value=\"Cachorro\">Cachorro</option>\n            <option value=\"Gato\">Gato</option>\n            <option value=\"Outros\">Outros</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Porte</option>\n            <option value=\"Pequeno\">Pequeno</option>\n            <option value=\"Médio\">Médio</option>\n            <option value=\"Grande\">Grande</option>\n            <option value=\"Gigante\">Gigante</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Sexo</option>\n            <option value=\"Fêmea\">Fêmea</option>\n            <option value=\"Macho\">Macho</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Idade</option>\n            <option value=\"Filhote (0 a 2 anos)\">Filhote (0 a 2 anos)</option>\n            <option value=\"Adulto (2 a 8 anos)\">Adulto (2 a 8 anos)</option>\n            <option value=\"Idoso (acima de 8 anos)\">Idoso (acima de 8 anos)</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 mt-3 mt-md-0 p-md-2 bd-highlight float-right float-md-none\">\n          <button class=\"btn btn-info\">Buscar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row mt-4\">\n    <ng-container *ngIf=\"!encontrados\">\n      <div class=\"col-12\">\n        <div class=\"bg-fff w-100\" style=\"border-radius: 10px;\">\n          <div class=\"py-5\" style=\"height: 51.2vh\">\n            <h2 class=\"text-center font-2em text-uppercase font-700 mt-1\">Ops!</h2>\n            <p class=\"font-1-2em text-center font-300 mbottom-0\">Parece que a sua busca não retornou nenhum\n              resultado.<br>Mude os filtros e tente novamente.</p>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n  <ng-container *ngIf=\"encontrados\">\n    <div class=\"row\">\n      <ng-container *ngFor=\"let item of encontrados | paginate: config\">\n        <div class=\"col-12 col-md-3 mb-4\">\n          <app-card-encontrado [encontrado]=\"item\">\n          </app-card-encontrado>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"row\" id=\"rowPagination\">\n      <div class=\"col-xs-12 align-center\">\n        <pagination-controls [previousLabel]=\"labels.previousLabel\" [nextLabel]=\"labels.nextLabel\"\n          [screenReaderPaginationLabel]=\"labels.screenReaderPaginationLabel\"\n          [screenReaderPageLabel]=\"labels.screenReaderPageLabel\"\n          [screenReaderCurrentLabel]=\"labels.screenReaderCurrentLabel\" (pageChange)=\"pageChanged($event)\">\n        </pagination-controls>\n      </div>\n    </div>\n  </ng-container>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/listagem/listagem-perdido/listagem-perdido.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listagem/listagem-perdido/listagem-perdido.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid bg-f5f5f5 padver-30 padver-15-xs\">\n  <img src=\"../../../assets/img/1920x250-perdidos.png\" class=\"rounded img-fluid mb-4\" alt=\"\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"d-block d-md-flex bd-highlight\">\n        <div class=\"p-md-2 bd-highlight\">\n          <!-- tipo, porte, sexo, idade, castrado -->\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Espécie</option>\n            <option value=\"Todos\">Todos</option>\n            <option value=\"Cachorro\">Cachorro</option>\n            <option value=\"Gato\">Gato</option>\n            <option value=\"Outros\">Outros</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Porte</option>\n            <option value=\"Pequeno\">Pequeno</option>\n            <option value=\"Médio\">Médio</option>\n            <option value=\"Grande\">Grande</option>\n            <option value=\"Gigante\">Gigante</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Sexo</option>\n            <option value=\"Fêmea\">Fêmea</option>\n            <option value=\"Macho\">Macho</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Idade</option>\n            <option value=\"Filhote (0 a 2 anos)\">Filhote (0 a 2 anos)</option>\n            <option value=\"Adulto (2 a 8 anos)\">Adulto (2 a 8 anos)</option>\n            <option value=\"Idoso (acima de 8 anos)\">Idoso (acima de 8 anos)</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 mt-3 mt-md-0 p-md-2 bd-highlight float-right float-md-none\">\n          <button class=\"btn btn-info\">Buscar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row mt-4\">\n    <ng-container *ngIf=\"!perdidos\">\n      <div class=\"col-12\">\n        <div class=\"bg-fff w-100\" style=\"border-radius: 10px;\">\n          <div class=\"py-5\" style=\"height: 51.2vh\">\n            <h2 class=\"text-center font-2em text-uppercase font-700 mt-1\">Ops!</h2>\n            <p class=\"font-1-2em text-center font-300 mbottom-0\">Parece que a sua busca não retornou nenhum\n              resultado.<br>Mude os filtros e tente novamente.</p>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n  <ng-container *ngIf=\"perdidos\">\n    <div class=\"row\">\n      <ng-container *ngFor=\"let item of perdidos | paginate: config\">\n        <div class=\"col-12 col-md-3 mb-4\">\n          <app-card-perdido [perdido]=\"item\">\n          </app-card-perdido>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"row\" id=\"rowPagination\">\n      <div class=\"col-xs-12 align-center\">\n        <pagination-controls [previousLabel]=\"labels.previousLabel\" [nextLabel]=\"labels.nextLabel\"\n          [screenReaderPaginationLabel]=\"labels.screenReaderPaginationLabel\"\n          [screenReaderPageLabel]=\"labels.screenReaderPageLabel\"\n          [screenReaderCurrentLabel]=\"labels.screenReaderCurrentLabel\" (pageChange)=\"pageChanged($event)\">\n        </pagination-controls>\n      </div>\n    </div>\n  </ng-container>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid py-5\">\n  <div class=\"container\">\n    <div class=\"row h-100 justify-content-center align-items-center\">\n      <div class=\"col-md-7 col-12 py-5\">\n        <h1 class=\"primary-text pr-md-5\">Quem somos nós?</h1>\n        <h2 class=\"secondary-text mt-3 pr-md-5\">Pettix é um sistema funcional, cujo os idealizadores são acadêmicos de\n          Medicina Veterinária da cidade de Foz do Iguaçu - PR, dos quais possuem parcerias com ONG’s e protetores, com\n          objetivo de achar um lar para animais que foram abandonados e com isso diminuir o índice de animais nas ruas e\n          a superlotação de ONG’s. </h2>\n        <button class=\"btn btn-primary mt-3\">Por que adotar?</button>\n      </div>\n      <div class=\"col-md-5 d-none d-sm-block\">\n        <img src=\"../../assets/img/dog.png\" class=\"img-fluid\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 text-center\">\n        <h1 class=\"primary-text mt-5 mb-5\">Funcionalidades do Pettix</h1>\n      </div>\n    </div>\n    <div class=\"row text-center d-flex justify-content-around\">\n      <div class=\"col-md-3 col-12\">\n        <img src=\"https://placehold.it/100x100\" class=\"img-responsive rounded-circle mb-3\" alt=\"\">\n        <p class=\"subtitle-text\">Doação ou Adoção de animais</p>\n        <p>Rerum aperiam praesentium.</p>\n      </div>\n      <div class=\"col-md-3 col-12\">\n        <img src=\"https://placehold.it/100x100\" class=\"img-responsive rounded-circle mb-3\" alt=\"\">\n        <p class=\"subtitle-text\">Perdi meu animal</p>\n        <p>Rerum aperiam praesentium.</p>\n      </div>\n      <div class=\"col-md-3 col-12\">\n        <img src=\"https://placehold.it/100x100\" class=\"img-responsive rounded-circle mb-3\" alt=\"\">\n        <p class=\"subtitle-text\">Encontrei um animal</p>\n        <p>Rerum aperiam praesentium.</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid padhor-0\">\n  <div class=\"container-fluid bg-grey-home padver-50\">\n    <div class=\"container container-fluid-sm\">\n      <h2 class=\"titulo\">Animais para doação</h2>\n      <ng-container *ngIf=\"doacoes\">\n        <div class=\"row\">\n          <ng-container *ngFor=\"let item of doacoes\">\n            <div class=\"col-12 col-md-4 mb-4 mb-md-0\">\n              <app-card-doacao [doacao]=\"item\"></app-card-doacao>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n      <div class=\"row mt-5\">\n        <div class=\"col-12\">\n          <p class=\"mbottom-0 text-center\"> <a href=\"#\" [routerLink]=\"['/listagem-doacao']\"\n              class=\"btn btn-info  text-uppercase padhor-30\">Ver todos os animais</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row py-5 h-100 justify-content-center align-items-center\">\n    <div class=\"col-md-4 d-none d-sm-block\">\n      <img src=\"../../assets/img/cat.png\" class=\"img-fluid\" alt=\"\">\n    </div>\n    <div class=\"col-md-8 col-12\">\n      <h1 class=\"primary-text pl-md-5 pl-3\">Encontrando e devolvendo lares aos animais</h1>\n      <h2 class=\"secondary-text mt-3 pl-md-5 pl-3\">Rerum aperiam praesentium adipisci accusantium. Quasi officiis veniam\n        quisquam\n        fugiat, libero vel,\n        voluptas officia aliquid inventore aliquam adipisci nihil repellendus quam veritatis!</h2>\n      <button class=\"btn btn-primary mt-3 ml-md-5 ml-3\">Saiba mais</button>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/anuncios/anuncio-doacao/anuncio-doacao.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/anuncios/anuncio-doacao/anuncio-doacao.component.ts ***!
  \*********************************************************************/
/*! exports provided: AnuncioDoacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioDoacaoComponent", function() { return AnuncioDoacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/doacao.service */ "./src/app/services/doacao.service.ts");




let AnuncioDoacaoComponent = class AnuncioDoacaoComponent {
    constructor(autenticacaoService, doacaoService) {
        this.autenticacaoService = autenticacaoService;
        this.doacaoService = doacaoService;
        this.labels = {
            previousLabel: 'Anterior',
            nextLabel: 'Próxima',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: `You're on page`
        };
    }
    ngOnInit() {
        this.userId = this.autenticacaoService.currentUserValue.id;
        this.listaDoacoesPorUsuario();
    }
    listaDoacoesPorUsuario() {
        this.doacaoService.getDoacoesByUser(this.userId).subscribe(data => {
            if (data.content.length > 0) {
                this.doacoes = data.content;
                this.config = {
                    itemsPerPage: 10,
                    currentPage: data.pageable.pageNumber,
                    totalItems: data.totalElements
                };
            }
        });
    }
};
AnuncioDoacaoComponent.ctorParameters = () => [
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
    { type: src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_3__["DoacaoService"] }
];
AnuncioDoacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anuncio-doacao',
        template: __webpack_require__(/*! raw-loader!./anuncio-doacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/anuncios/anuncio-doacao/anuncio-doacao.component.html")
    })
], AnuncioDoacaoComponent);



/***/ }),

/***/ "./src/app/anuncios/anuncio-encontrado/anuncio-encontrado.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/anuncios/anuncio-encontrado/anuncio-encontrado.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AnuncioEncontradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioEncontradoComponent", function() { return AnuncioEncontradoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/encontrado.service */ "./src/app/services/encontrado.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");




let AnuncioEncontradoComponent = class AnuncioEncontradoComponent {
    constructor(autenticacaoService, encontradoService) {
        this.autenticacaoService = autenticacaoService;
        this.encontradoService = encontradoService;
        this.labels = {
            previousLabel: 'Anterior',
            nextLabel: 'Próxima',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: `You're on page`
        };
    }
    ngOnInit() {
        this.userId = this.autenticacaoService.currentUserValue.id;
        this.listaEncontradosPorUsuario();
    }
    listaEncontradosPorUsuario() {
        this.encontradoService.getEncontradosByUser(this.userId).subscribe(data => {
            if (data.content.length > 0) {
                this.encontrados = data.content;
                this.config = {
                    itemsPerPage: 10,
                    currentPage: data.pageable.pageNumber,
                    totalItems: data.totalElements
                };
            }
        });
    }
};
AnuncioEncontradoComponent.ctorParameters = () => [
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"] },
    { type: src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_2__["EncontradoService"] }
];
AnuncioEncontradoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anuncio-encontrado',
        template: __webpack_require__(/*! raw-loader!./anuncio-encontrado.component.html */ "./node_modules/raw-loader/index.js!./src/app/anuncios/anuncio-encontrado/anuncio-encontrado.component.html")
    })
], AnuncioEncontradoComponent);



/***/ }),

/***/ "./src/app/anuncios/anuncio-landing/anuncio-landing.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/anuncios/anuncio-landing/anuncio-landing.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FudW5jaW9zL2FudW5jaW8tbGFuZGluZy9hbnVuY2lvLWxhbmRpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/anuncios/anuncio-landing/anuncio-landing.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/anuncios/anuncio-landing/anuncio-landing.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnuncioLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioLandingComponent", function() { return AnuncioLandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnuncioLandingComponent = class AnuncioLandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
AnuncioLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anuncio-landing',
        template: __webpack_require__(/*! raw-loader!./anuncio-landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/anuncios/anuncio-landing/anuncio-landing.component.html"),
        styles: [__webpack_require__(/*! ./anuncio-landing.component.scss */ "./src/app/anuncios/anuncio-landing/anuncio-landing.component.scss")]
    })
], AnuncioLandingComponent);



/***/ }),

/***/ "./src/app/anuncios/anuncio-perdido/anuncio-perdido.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/anuncios/anuncio-perdido/anuncio-perdido.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnuncioPerdidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioPerdidoComponent", function() { return AnuncioPerdidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/perdido.service */ "./src/app/services/perdido.service.ts");




let AnuncioPerdidoComponent = class AnuncioPerdidoComponent {
    constructor(autenticacaoService, perdidoService) {
        this.autenticacaoService = autenticacaoService;
        this.perdidoService = perdidoService;
        this.labels = {
            previousLabel: 'Anterior',
            nextLabel: 'Próxima',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: `You're on page`
        };
    }
    ngOnInit() {
        this.userId = this.autenticacaoService.currentUserValue.id;
        this.listaPerdidosByUser();
    }
    listaPerdidosByUser() {
        this.perdidoService.getPerdidosByUser(this.userId).subscribe(data => {
            if (data.content.length > 0) {
                this.perdidos = data.content;
                this.config = {
                    itemsPerPage: 10,
                    currentPage: data.pageable.pageNumber,
                    totalItems: data.totalElements
                };
            }
        });
    }
};
AnuncioPerdidoComponent.ctorParameters = () => [
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
    { type: src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_3__["PerdidoService"] }
];
AnuncioPerdidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anuncio-perdido',
        template: __webpack_require__(/*! raw-loader!./anuncio-perdido.component.html */ "./node_modules/raw-loader/index.js!./src/app/anuncios/anuncio-perdido/anuncio-perdido.component.html")
    })
], AnuncioPerdidoComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _cadastros_doacao_doacao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastros/doacao/doacao.component */ "./src/app/cadastros/doacao/doacao.component.ts");
/* harmony import */ var _cadastros_encontrado_encontrado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastros/encontrado/encontrado.component */ "./src/app/cadastros/encontrado/encontrado.component.ts");
/* harmony import */ var _cadastros_perdido_perdido_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cadastros/perdido/perdido.component */ "./src/app/cadastros/perdido/perdido.component.ts");
/* harmony import */ var _cadastros_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cadastros/usuario/usuario.component */ "./src/app/cadastros/usuario/usuario.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/auth.guard */ "./src/app/helpers/auth.guard.ts");
/* harmony import */ var _listagem_listagem_doacao_listagem_doacao_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./listagem/listagem-doacao/listagem-doacao.component */ "./src/app/listagem/listagem-doacao/listagem-doacao.component.ts");
/* harmony import */ var _detalhes_detalhe_doacao_detalhe_doacao_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detalhes/detalhe-doacao/detalhe-doacao.component */ "./src/app/detalhes/detalhe-doacao/detalhe-doacao.component.ts");
/* harmony import */ var _detalhes_detalhe_perdido_detalhe_perdido_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detalhes/detalhe-perdido/detalhe-perdido.component */ "./src/app/detalhes/detalhe-perdido/detalhe-perdido.component.ts");
/* harmony import */ var _detalhes_detalhe_encontrado_detalhe_encontrado_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./detalhes/detalhe-encontrado/detalhe-encontrado.component */ "./src/app/detalhes/detalhe-encontrado/detalhe-encontrado.component.ts");
/* harmony import */ var _listagem_listagem_encontrado_listagem_encontrado_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./listagem/listagem-encontrado/listagem-encontrado.component */ "./src/app/listagem/listagem-encontrado/listagem-encontrado.component.ts");
/* harmony import */ var _listagem_listagem_perdido_listagem_perdido_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./listagem/listagem-perdido/listagem-perdido.component */ "./src/app/listagem/listagem-perdido/listagem-perdido.component.ts");
/* harmony import */ var _anuncios_anuncio_landing_anuncio_landing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./anuncios/anuncio-landing/anuncio-landing.component */ "./src/app/anuncios/anuncio-landing/anuncio-landing.component.ts");
/* harmony import */ var _anuncios_anuncio_doacao_anuncio_doacao_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./anuncios/anuncio-doacao/anuncio-doacao.component */ "./src/app/anuncios/anuncio-doacao/anuncio-doacao.component.ts");
/* harmony import */ var _anuncios_anuncio_encontrado_anuncio_encontrado_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./anuncios/anuncio-encontrado/anuncio-encontrado.component */ "./src/app/anuncios/anuncio-encontrado/anuncio-encontrado.component.ts");
/* harmony import */ var _cadastros_doacao_edit_doacao_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cadastros/doacao-edit/doacao-edit.component */ "./src/app/cadastros/doacao-edit/doacao-edit.component.ts");
/* harmony import */ var _anuncios_anuncio_perdido_anuncio_perdido_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./anuncios/anuncio-perdido/anuncio-perdido.component */ "./src/app/anuncios/anuncio-perdido/anuncio-perdido.component.ts");
/* harmony import */ var _cadastros_perdido_edit_perdido_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cadastros/perdido-edit/perdido-edit.component */ "./src/app/cadastros/perdido-edit/perdido-edit.component.ts");
/* harmony import */ var _cadastros_encontrado_edit_encontrado_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cadastros/encontrado-edit/encontrado-edit.component */ "./src/app/cadastros/encontrado-edit/encontrado-edit.component.ts");
/* harmony import */ var _cadastros_usuario_edit_usuario_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cadastros/usuario-edit/usuario-edit.component */ "./src/app/cadastros/usuario-edit/usuario-edit.component.ts");

























const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
    { path: 'login', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"] },
    { path: 'nova-doacao', component: _cadastros_doacao_doacao_component__WEBPACK_IMPORTED_MODULE_5__["DoacaoComponent"] },
    { path: 'novo-encontrado', component: _cadastros_encontrado_encontrado_component__WEBPACK_IMPORTED_MODULE_6__["EncontradoComponent"] },
    { path: 'novo-perdido', component: _cadastros_perdido_perdido_component__WEBPACK_IMPORTED_MODULE_7__["PerdidoComponent"] },
    { path: 'novo-usuario', component: _cadastros_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_8__["UsuarioComponent"] },
    { path: 'listagem-doacao', component: _listagem_listagem_doacao_listagem_doacao_component__WEBPACK_IMPORTED_MODULE_11__["ListagemDoacaoComponent"] },
    { path: 'listagem-encontrado', component: _listagem_listagem_encontrado_listagem_encontrado_component__WEBPACK_IMPORTED_MODULE_15__["ListagemEncontradoComponent"] },
    { path: 'listagem-perdido', component: _listagem_listagem_perdido_listagem_perdido_component__WEBPACK_IMPORTED_MODULE_16__["ListagemPerdidoComponent"] },
    { path: 'doacao/:id', component: _detalhes_detalhe_doacao_detalhe_doacao_component__WEBPACK_IMPORTED_MODULE_12__["DetalheDoacaoComponent"] },
    { path: 'encontrado/:id', component: _detalhes_detalhe_encontrado_detalhe_encontrado_component__WEBPACK_IMPORTED_MODULE_14__["DetalheEncontradoComponent"] },
    { path: 'perdido/:id', component: _detalhes_detalhe_perdido_detalhe_perdido_component__WEBPACK_IMPORTED_MODULE_13__["DetalhePerdidoComponent"] },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        children: [
            { path: '', component: _anuncios_anuncio_landing_anuncio_landing_component__WEBPACK_IMPORTED_MODULE_17__["AnuncioLandingComponent"] },
            { path: 'doacao', component: _anuncios_anuncio_doacao_anuncio_doacao_component__WEBPACK_IMPORTED_MODULE_18__["AnuncioDoacaoComponent"] },
            { path: 'encontrado', component: _anuncios_anuncio_encontrado_anuncio_encontrado_component__WEBPACK_IMPORTED_MODULE_19__["AnuncioEncontradoComponent"] },
            { path: 'perdido', component: _anuncios_anuncio_perdido_anuncio_perdido_component__WEBPACK_IMPORTED_MODULE_21__["AnuncioPerdidoComponent"] },
            { path: 'editar-usuario/:id', component: _cadastros_usuario_edit_usuario_edit_component__WEBPACK_IMPORTED_MODULE_24__["UsuarioEditComponent"] }
        ]
    },
    { path: 'editar-doacao/:id', component: _cadastros_doacao_edit_doacao_edit_component__WEBPACK_IMPORTED_MODULE_20__["DoacaoEditComponent"] },
    { path: 'editar-perdido/:id', component: _cadastros_perdido_edit_perdido_edit_component__WEBPACK_IMPORTED_MODULE_22__["PerdidoEditComponent"] },
    { path: 'editar-encontrado/:id', component: _cadastros_encontrado_edit_encontrado_edit_component__WEBPACK_IMPORTED_MODULE_23__["EncontradoEditComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cbiAiLCJhZ20tbWFwIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'adotepets-front';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _cadastros_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cadastros/usuario/usuario.component */ "./src/app/cadastros/usuario/usuario.component.ts");
/* harmony import */ var _cadastros_doacao_doacao_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cadastros/doacao/doacao.component */ "./src/app/cadastros/doacao/doacao.component.ts");
/* harmony import */ var _cadastros_encontrado_encontrado_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cadastros/encontrado/encontrado.component */ "./src/app/cadastros/encontrado/encontrado.component.ts");
/* harmony import */ var _cadastros_perdido_perdido_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cadastros/perdido/perdido.component */ "./src/app/cadastros/perdido/perdido.component.ts");
/* harmony import */ var _anuncios_anuncio_doacao_anuncio_doacao_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./anuncios/anuncio-doacao/anuncio-doacao.component */ "./src/app/anuncios/anuncio-doacao/anuncio-doacao.component.ts");
/* harmony import */ var _anuncios_anuncio_perdido_anuncio_perdido_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./anuncios/anuncio-perdido/anuncio-perdido.component */ "./src/app/anuncios/anuncio-perdido/anuncio-perdido.component.ts");
/* harmony import */ var _anuncios_anuncio_encontrado_anuncio_encontrado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./anuncios/anuncio-encontrado/anuncio-encontrado.component */ "./src/app/anuncios/anuncio-encontrado/anuncio-encontrado.component.ts");
/* harmony import */ var _cards_card_doacao_card_doacao_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cards/card-doacao/card-doacao.component */ "./src/app/cards/card-doacao/card-doacao.component.ts");
/* harmony import */ var _cards_card_encontrado_card_encontrado_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cards/card-encontrado/card-encontrado.component */ "./src/app/cards/card-encontrado/card-encontrado.component.ts");
/* harmony import */ var _cards_card_perdido_card_perdido_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cards/card-perdido/card-perdido.component */ "./src/app/cards/card-perdido/card-perdido.component.ts");
/* harmony import */ var _listagem_listagem_doacao_listagem_doacao_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./listagem/listagem-doacao/listagem-doacao.component */ "./src/app/listagem/listagem-doacao/listagem-doacao.component.ts");
/* harmony import */ var _listagem_listagem_encontrado_listagem_encontrado_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./listagem/listagem-encontrado/listagem-encontrado.component */ "./src/app/listagem/listagem-encontrado/listagem-encontrado.component.ts");
/* harmony import */ var _listagem_listagem_perdido_listagem_perdido_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./listagem/listagem-perdido/listagem-perdido.component */ "./src/app/listagem/listagem-perdido/listagem-perdido.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _helpers_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./helpers/basic-auth.interceptor */ "./src/app/helpers/basic-auth.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helpers/error.interceptor */ "./src/app/helpers/error.interceptor.ts");
/* harmony import */ var _helpers_safe_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helpers/safe.pipe */ "./src/app/helpers/safe.pipe.ts");
/* harmony import */ var _detalhes_detalhe_doacao_detalhe_doacao_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./detalhes/detalhe-doacao/detalhe-doacao.component */ "./src/app/detalhes/detalhe-doacao/detalhe-doacao.component.ts");
/* harmony import */ var _detalhes_detalhe_encontrado_detalhe_encontrado_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./detalhes/detalhe-encontrado/detalhe-encontrado.component */ "./src/app/detalhes/detalhe-encontrado/detalhe-encontrado.component.ts");
/* harmony import */ var _detalhes_detalhe_perdido_detalhe_perdido_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./detalhes/detalhe-perdido/detalhe-perdido.component */ "./src/app/detalhes/detalhe-perdido/detalhe-perdido.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _anuncios_anuncio_landing_anuncio_landing_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./anuncios/anuncio-landing/anuncio-landing.component */ "./src/app/anuncios/anuncio-landing/anuncio-landing.component.ts");
/* harmony import */ var _cadastros_doacao_edit_doacao_edit_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./cadastros/doacao-edit/doacao-edit.component */ "./src/app/cadastros/doacao-edit/doacao-edit.component.ts");
/* harmony import */ var _cadastros_encontrado_edit_encontrado_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./cadastros/encontrado-edit/encontrado-edit.component */ "./src/app/cadastros/encontrado-edit/encontrado-edit.component.ts");
/* harmony import */ var _cadastros_perdido_edit_perdido_edit_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./cadastros/perdido-edit/perdido-edit.component */ "./src/app/cadastros/perdido-edit/perdido-edit.component.ts");
/* harmony import */ var _cadastros_usuario_edit_usuario_edit_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./cadastros/usuario-edit/usuario-edit.component */ "./src/app/cadastros/usuario-edit/usuario-edit.component.ts");
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "./node_modules/ng-bootstrap-form-validation/fesm2015/ng-bootstrap-form-validation.js");
/* harmony import */ var _helpers_error_messages__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./helpers/error-messages */ "./src/app/helpers/error-messages.ts");
/* harmony import */ var _cadastros_alteracao_senha_alteracao_senha_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./cadastros/alteracao-senha/alteracao-senha.component */ "./src/app/cadastros/alteracao-senha/alteracao-senha.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");










































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _helpers_safe_pipe__WEBPACK_IMPORTED_MODULE_27__["SafePipe"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
            _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__["LandingPageComponent"],
            _cadastros_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_11__["UsuarioComponent"],
            _cadastros_doacao_doacao_component__WEBPACK_IMPORTED_MODULE_12__["DoacaoComponent"],
            _cadastros_encontrado_encontrado_component__WEBPACK_IMPORTED_MODULE_13__["EncontradoComponent"],
            _cadastros_perdido_perdido_component__WEBPACK_IMPORTED_MODULE_14__["PerdidoComponent"],
            _anuncios_anuncio_doacao_anuncio_doacao_component__WEBPACK_IMPORTED_MODULE_15__["AnuncioDoacaoComponent"],
            _anuncios_anuncio_perdido_anuncio_perdido_component__WEBPACK_IMPORTED_MODULE_16__["AnuncioPerdidoComponent"],
            _anuncios_anuncio_encontrado_anuncio_encontrado_component__WEBPACK_IMPORTED_MODULE_17__["AnuncioEncontradoComponent"],
            _cards_card_doacao_card_doacao_component__WEBPACK_IMPORTED_MODULE_18__["CardDoacaoComponent"],
            _cards_card_encontrado_card_encontrado_component__WEBPACK_IMPORTED_MODULE_19__["CardEncontradoComponent"],
            _cards_card_perdido_card_perdido_component__WEBPACK_IMPORTED_MODULE_20__["CardPerdidoComponent"],
            _listagem_listagem_doacao_listagem_doacao_component__WEBPACK_IMPORTED_MODULE_21__["ListagemDoacaoComponent"],
            _listagem_listagem_encontrado_listagem_encontrado_component__WEBPACK_IMPORTED_MODULE_22__["ListagemEncontradoComponent"],
            _listagem_listagem_perdido_listagem_perdido_component__WEBPACK_IMPORTED_MODULE_23__["ListagemPerdidoComponent"],
            _detalhes_detalhe_doacao_detalhe_doacao_component__WEBPACK_IMPORTED_MODULE_28__["DetalheDoacaoComponent"],
            _detalhes_detalhe_encontrado_detalhe_encontrado_component__WEBPACK_IMPORTED_MODULE_29__["DetalheEncontradoComponent"],
            _detalhes_detalhe_perdido_detalhe_perdido_component__WEBPACK_IMPORTED_MODULE_30__["DetalhePerdidoComponent"],
            _anuncios_anuncio_landing_anuncio_landing_component__WEBPACK_IMPORTED_MODULE_33__["AnuncioLandingComponent"],
            _cadastros_doacao_edit_doacao_edit_component__WEBPACK_IMPORTED_MODULE_34__["DoacaoEditComponent"],
            _cadastros_encontrado_edit_encontrado_edit_component__WEBPACK_IMPORTED_MODULE_35__["EncontradoEditComponent"],
            _cadastros_perdido_edit_perdido_edit_component__WEBPACK_IMPORTED_MODULE_36__["PerdidoEditComponent"],
            _cadastros_usuario_edit_usuario_edit_component__WEBPACK_IMPORTED_MODULE_37__["UsuarioEditComponent"],
            _cadastros_alteracao_senha_alteracao_senha_component__WEBPACK_IMPORTED_MODULE_40__["AlteracaoSenhaComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_32__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_38__["NgBootstrapFormValidationModule"].forRoot(),
            ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_38__["NgBootstrapFormValidationModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCEiuCMybMtAnX3Hw0uAv-5mT3fzqwNsns',
                libraries: ['places']
            })
        ],
        providers: [
            { provide: ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_38__["CUSTOM_ERROR_MESSAGES"], useValue: _helpers_error_messages__WEBPACK_IMPORTED_MODULE_39__["CUSTOM_ERRORS"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"], useClass: _helpers_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__["BasicAuthInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_26__["ErrorInterceptor"], multi: true },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_41__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_41__["HashLocationStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cadastros/alteracao-senha/alteracao-senha.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/cadastros/alteracao-senha/alteracao-senha.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvcy9hbHRlcmFjYW8tc2VuaGEvYWx0ZXJhY2FvLXNlbmhhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cadastros/alteracao-senha/alteracao-senha.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/cadastros/alteracao-senha/alteracao-senha.component.ts ***!
  \************************************************************************/
/*! exports provided: AlteracaoSenhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlteracaoSenhaComponent", function() { return AlteracaoSenhaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlteracaoSenhaComponent = class AlteracaoSenhaComponent {
    constructor() { }
    ngOnInit() {
    }
    onSubmit() {
    }
};
AlteracaoSenhaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alteracao-senha',
        template: __webpack_require__(/*! raw-loader!./alteracao-senha.component.html */ "./node_modules/raw-loader/index.js!./src/app/cadastros/alteracao-senha/alteracao-senha.component.html"),
        styles: [__webpack_require__(/*! ./alteracao-senha.component.scss */ "./src/app/cadastros/alteracao-senha/alteracao-senha.component.scss")]
    })
], AlteracaoSenhaComponent);



/***/ }),

/***/ "./src/app/cadastros/doacao-edit/doacao-edit.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/cadastros/doacao-edit/doacao-edit.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-preview {\n  width: 100%;\n  height: auto;\n}\n\n.removeItem {\n  position: absolute;\n  top: -10px;\n  right: 5px;\n  background: white;\n  border-radius: 50%;\n  padding: 0;\n  width: 25px;\n  height: 25px;\n}\n\n.removeItem i {\n  font-size: 23px;\n  color: #ca0000;\n}\n\n.form-group > label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2NhZGFzdHJvcy9kb2FjYW8tZWRpdC9kb2FjYW8tZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FkYXN0cm9zL2RvYWNhby1lZGl0L2RvYWNhby1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvcy9kb2FjYW8tZWRpdC9kb2FjYW8tZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctcHJldmlldyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmVtb3ZlSXRlbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5yZW1vdmVJdGVtIGkge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogcmdiKDIwMiwgMCwgMCk7XG59XG5cbi5mb3JtLWdyb3VwID4gbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi5pbWctcHJldmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5yZW1vdmVJdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ucmVtb3ZlSXRlbSBpIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogI2NhMDAwMDtcbn1cblxuLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cadastros/doacao-edit/doacao-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cadastros/doacao-edit/doacao-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: DoacaoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoacaoEditComponent", function() { return DoacaoEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/doacao.service */ "./src/app/services/doacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");







let DoacaoEditComponent = class DoacaoEditComponent {
    constructor(activatedRoute, autenticacaoService, doacaoService, router, formBuilder) {
        this.activatedRoute = activatedRoute;
        this.autenticacaoService = autenticacaoService;
        this.doacaoService = doacaoService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.files = new Map();
        this.formDataFiles = [];
        this.previewUrl = new Map();
        this.imgToDelete = new Array();
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_6__["Global"].baseUrl;
        this.anuncioForm = this.createFormGroupWithBuilder(this.formBuilder);
    }
    createFormGroupWithBuilder(formBuilder) {
        return formBuilder.group({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            vacinado: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            castrado: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            cor: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            porte: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            idade: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            descricao: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
    }
    onSubmit() {
        this.animal.tipo = this.anuncioForm.value.tipo;
        this.animal.castrado = this.anuncioForm.value.castrado;
        this.animal.cor = this.anuncioForm.value.cor;
        this.animal.descricao = this.anuncioForm.value.descricao;
        this.animal.nome = this.anuncioForm.value.nome;
        this.animal.porte = this.anuncioForm.value.porte;
        this.animal.sexo = this.anuncioForm.value.sexo;
        this.animal.vacinado = this.anuncioForm.value.vacinado;
        this.animal.idade = this.anuncioForm.value.idade;
        this.anuncioDoacao.animal = this.animal;
        this.anuncioDoacao.cidade = "Foz do Iguaçu";
        this.anuncioDoacao.estado = "Paraná";
        this.editaDoacao();
    }
    ngOnInit() {
        this.doacaoId = this.activatedRoute.snapshot.params.id;
        this.getDoacao(this.doacaoId);
        if (this.autenticacaoService.currentUserValue == null) {
            this.router.navigate(['/']);
        }
    }
    getDoacao(id) {
        return this.doacaoService.getDoacaoById(id).then(doacao => {
            this.anuncioDoacao = doacao;
            this.animal = this.anuncioDoacao.animal;
            this.anuncioForm.controls.tipo.setValue(this.anuncioDoacao.animal.tipo);
            this.anuncioForm.controls.sexo.setValue(this.anuncioDoacao.animal.sexo);
            this.anuncioForm.controls.vacinado.setValue(this.anuncioDoacao.animal.vacinado.toString());
            this.anuncioForm.controls.castrado.setValue(this.anuncioDoacao.animal.castrado.toString());
            this.anuncioForm.controls.porte.setValue(this.anuncioDoacao.animal.porte);
            this.anuncioForm.controls.idade.setValue(this.anuncioDoacao.animal.idade);
            this.anuncioForm.controls.nome.setValue(this.anuncioDoacao.animal.nome);
            this.anuncioForm.controls.cor.setValue(this.anuncioDoacao.animal.cor);
            this.anuncioForm.controls.descricao.setValue(this.anuncioDoacao.animal.descricao);
            if (this.animal.usuario.id != this.autenticacaoService.currentUserValue.id) {
                this.router.navigate(['/']);
            }
        });
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
        this.previewUrl.delete(fileName);
        this.updateFileInput();
    }
    removeExistingFile(fileName) {
        this.imgToDelete.push(fileName);
        this.removeElement(this.animal.imagens, fileName);
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
                this.previewUrl.set(element.name, reader.result);
            };
        });
    }
    updateFileInput() {
        let input = document.getElementById("file");
        let list = new DataTransfer();
        for (const [value] of this.files.entries()) {
            list.items.add(value);
        }
        let myFileList = list.files;
        input.files = myFileList;
    }
    editaDoacao() {
        this.formDataFiles = Array.from(this.files.values());
        const formData = new FormData();
        formData.append('value', JSON.stringify(this.anuncioDoacao));
        this.formDataFiles.forEach(element => {
            formData.append('files', element);
        });
        this.imgToDelete.forEach(element => {
            formData.append('delete', element);
        });
        this.doacaoService.editDoacao(formData).subscribe(data => {
            if (data.ok) {
                this.router.navigate(['/dashboard/doacao']);
            }
        });
    }
    removeElement(array, elem) {
        var index = array.indexOf(elem);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
};
DoacaoEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"] },
    { type: src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_4__["DoacaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
DoacaoEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doacao-edit',
        template: __webpack_require__(/*! raw-loader!./doacao-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/cadastros/doacao-edit/doacao-edit.component.html"),
        styles: [__webpack_require__(/*! ./doacao-edit.component.scss */ "./src/app/cadastros/doacao-edit/doacao-edit.component.scss")]
    })
], DoacaoEditComponent);



/***/ }),

/***/ "./src/app/cadastros/doacao/doacao.component.scss":
/*!********************************************************!*\
  !*** ./src/app/cadastros/doacao/doacao.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-preview {\n  width: 100%;\n  height: auto;\n}\n\n.removeItem {\n  position: absolute;\n  top: -10px;\n  right: 5px;\n  background: white;\n  border-radius: 50%;\n  padding: 0;\n  width: 25px;\n  height: 25px;\n}\n\n.removeItem i {\n  font-size: 23px;\n  color: #ca0000;\n}\n\n.form-group > label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2NhZGFzdHJvcy9kb2FjYW8vZG9hY2FvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYWRhc3Ryb3MvZG9hY2FvL2RvYWNhby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYWRhc3Ryb3MvZG9hY2FvL2RvYWNhby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctcHJldmlldyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmVtb3ZlSXRlbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5yZW1vdmVJdGVtIGkge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogcmdiKDIwMiwgMCwgMCk7XG59XG5cbi5mb3JtLWdyb3VwID4gbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi5pbWctcHJldmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5yZW1vdmVJdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ucmVtb3ZlSXRlbSBpIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogI2NhMDAwMDtcbn1cblxuLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cadastros/doacao/doacao.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cadastros/doacao/doacao.component.ts ***!
  \******************************************************/
/*! exports provided: DoacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoacaoComponent", function() { return DoacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_model_anuncioDoacao_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/anuncioDoacao.model */ "./src/app/model/anuncioDoacao.model.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/doacao.service */ "./src/app/services/doacao.service.ts");
/* harmony import */ var src_app_model_animal_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/animal.model */ "./src/app/model/animal.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/usuario.model */ "./src/app/model/usuario.model.ts");









let DoacaoComponent = class DoacaoComponent {
    constructor(autenticacaoService, doacaoService, router, formBuilder) {
        this.autenticacaoService = autenticacaoService;
        this.doacaoService = doacaoService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.anuncioDoacao = new src_app_model_anuncioDoacao_model__WEBPACK_IMPORTED_MODULE_2__["AnuncioDoacao"]();
        this.animal = new src_app_model_animal_model__WEBPACK_IMPORTED_MODULE_5__["Animal"]();
        this.files = new Map();
        this.formDataFiles = [];
        this.previewUrl = new Map();
        this.usuario = new src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
        this.anuncioForm = this.createFormGroupWithBuilder(this.formBuilder);
        this.anuncioForm.controls.tipo.setValue("cachorro");
        this.anuncioForm.controls.sexo.setValue("macho");
        this.anuncioForm.controls.vacinado.setValue("false");
        this.anuncioForm.controls.castrado.setValue("false");
        this.anuncioForm.controls.porte.setValue("Pequeno");
        this.anuncioForm.controls.idade.setValue("Filhote (0 a 2 anos)");
    }
    ngOnInit() {
        if (this.autenticacaoService.currentUserValue != null) {
            this.usuario = this.autenticacaoService.currentUserValue;
        }
        else {
            this.router.navigate(['/']);
        }
    }
    createFormGroupWithBuilder(formBuilder) {
        return formBuilder.group({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            vacinado: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            castrado: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            cor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            porte: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            idade: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            descricao: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
        });
    }
    onSubmit() {
        this.animal.tipo = this.anuncioForm.value.tipo;
        this.animal.castrado = this.anuncioForm.value.castrado;
        this.animal.cor = this.anuncioForm.value.cor;
        this.animal.descricao = this.anuncioForm.value.descricao;
        this.animal.nome = this.anuncioForm.value.nome;
        this.animal.porte = this.anuncioForm.value.porte;
        this.animal.sexo = this.anuncioForm.value.sexo;
        this.animal.vacinado = this.anuncioForm.value.vacinado;
        this.animal.idade = this.anuncioForm.value.idade;
        this.anuncioDoacao.animal = this.animal;
        this.anuncioDoacao.animal.usuario = this.usuario;
        this.anuncioDoacao.cidade = "Foz do Iguaçu";
        this.anuncioDoacao.estado = "Paraná";
        this.cadastrarDoacao();
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
        this.previewUrl.delete(fileName);
        this.updateFileInput();
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
                this.previewUrl.set(element.name, reader.result);
            };
        });
    }
    updateFileInput() {
        let input = document.getElementById("file");
        let list = new DataTransfer();
        for (const [value] of this.files.entries()) {
            list.items.add(value);
        }
        let myFileList = list.files;
        input.files = myFileList;
    }
    cadastrarDoacao() {
        this.formDataFiles = Array.from(this.files.values());
        const formData = new FormData();
        formData.append('value', JSON.stringify(this.anuncioDoacao));
        this.formDataFiles.forEach(element => {
            formData.append('files', element);
        });
        this.doacaoService.registerDoacao(formData).subscribe(data => {
            if (data.ok) {
                this.router.navigate(['/dashboard/doacao']);
            }
        });
    }
};
DoacaoComponent.ctorParameters = () => [
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"] },
    { type: src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_4__["DoacaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
DoacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doacao',
        template: __webpack_require__(/*! raw-loader!./doacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/cadastros/doacao/doacao.component.html"),
        styles: [__webpack_require__(/*! ./doacao.component.scss */ "./src/app/cadastros/doacao/doacao.component.scss")]
    })
], DoacaoComponent);



/***/ }),

/***/ "./src/app/cadastros/encontrado-edit/encontrado-edit.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/cadastros/encontrado-edit/encontrado-edit.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-preview {\n  width: 100%;\n  height: auto;\n}\n\n.removeItem {\n  position: absolute;\n  top: -10px;\n  right: 5px;\n  background: white;\n  border-radius: 50%;\n  padding: 0;\n  width: 25px;\n  height: 25px;\n}\n\n.removeItem i {\n  font-size: 23px;\n  color: #ca0000;\n}\n\n.form-group > label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2NhZGFzdHJvcy9lbmNvbnRyYWRvLWVkaXQvZW5jb250cmFkby1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYWRhc3Ryb3MvZW5jb250cmFkby1lZGl0L2VuY29udHJhZG8tZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYWRhc3Ryb3MvZW5jb250cmFkby1lZGl0L2VuY29udHJhZG8tZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctcHJldmlldyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmVtb3ZlSXRlbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5yZW1vdmVJdGVtIGkge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogcmdiKDIwMiwgMCwgMCk7XG59XG5cbi5mb3JtLWdyb3VwID4gbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi5pbWctcHJldmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5yZW1vdmVJdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ucmVtb3ZlSXRlbSBpIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogI2NhMDAwMDtcbn1cblxuLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cadastros/encontrado-edit/encontrado-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/cadastros/encontrado-edit/encontrado-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: EncontradoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncontradoEditComponent", function() { return EncontradoEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/encontrado.service */ "./src/app/services/encontrado.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");








let EncontradoEditComponent = class EncontradoEditComponent {
    constructor(activatedRoute, autenticacaoService, encontradoService, router, mapsAPILoader, ngZone, formBuilder) {
        this.activatedRoute = activatedRoute;
        this.autenticacaoService = autenticacaoService;
        this.encontradoService = encontradoService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.formBuilder = formBuilder;
        this.files = new Map();
        this.formDataFiles = [];
        this.previewUrl = new Map();
        this.imgToDelete = new Array();
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_7__["Global"].baseUrl;
        this.anuncioForm = this.createFormGroupWithBuilder(this.formBuilder);
    }
    createFormGroupWithBuilder(formBuilder) {
        return formBuilder.group({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            resgatado: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            cor: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            porte: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            idade: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            descricao: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            raca: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
        });
    }
    ngOnInit() {
        this.encontradoId = this.activatedRoute.snapshot.params.id;
        this.getEncontrado(this.encontradoId);
        this.zoom = 12;
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            // this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder;
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 12;
                });
            });
        });
    }
    onSubmit() {
        this.animal.tipo = this.anuncioForm.value.tipo;
        this.animal.cor = this.anuncioForm.value.cor;
        this.animal.descricao = this.anuncioForm.value.descricao;
        this.animal.nome = this.anuncioForm.value.nome;
        this.animal.porte = this.anuncioForm.value.porte;
        this.animal.sexo = this.anuncioForm.value.sexo;
        this.animal.idade = this.anuncioForm.value.idade;
        this.animal.raca = this.anuncioForm.value.raca;
        this.anuncioEncontrado.resgatado = this.anuncioForm.value.resgatado;
        this.anuncioEncontrado.animal = this.animal;
        this.anuncioEncontrado.cidade = "Foz do Iguaçu";
        this.anuncioEncontrado.estado = "Paraná";
        this.anuncioEncontrado.lat = this.latitude;
        this.anuncioEncontrado.lng = this.longitude;
        this.editaEncontrado();
    }
    getEncontrado(id) {
        return this.encontradoService.getEncontradoById(id).then(encontrado => {
            this.anuncioEncontrado = encontrado;
            this.animal = this.anuncioEncontrado.animal;
            this.animal = this.anuncioEncontrado.animal;
            this.latitude = this.anuncioEncontrado.lat;
            this.longitude = this.anuncioEncontrado.lng;
            this.anuncioForm.controls.tipo.setValue(this.anuncioEncontrado.animal.tipo);
            this.anuncioForm.controls.sexo.setValue(this.anuncioEncontrado.animal.sexo);
            this.anuncioForm.controls.porte.setValue(this.anuncioEncontrado.animal.porte);
            this.anuncioForm.controls.idade.setValue(this.anuncioEncontrado.animal.idade);
            this.anuncioForm.controls.nome.setValue(this.anuncioEncontrado.animal.nome);
            this.anuncioForm.controls.cor.setValue(this.anuncioEncontrado.animal.cor);
            this.anuncioForm.controls.raca.setValue(this.anuncioEncontrado.animal.raca);
            this.anuncioForm.controls.descricao.setValue(this.anuncioEncontrado.animal.descricao);
            this.anuncioForm.controls.resgatado.setValue(this.anuncioEncontrado.resgatado.toString());
            if (this.animal.usuario.id != this.autenticacaoService.currentUserValue.id) {
                this.router.navigate(['/']);
            }
        });
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
        this.previewUrl.delete(fileName);
        this.updateFileInput();
    }
    removeExistingFile(fileName) {
        this.imgToDelete.push(fileName);
        this.removeElement(this.animal.imagens, fileName);
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
                this.previewUrl.set(element.name, reader.result);
            };
        });
    }
    updateFileInput() {
        let input = document.getElementById("file");
        let list = new DataTransfer();
        for (const [value] of this.files.entries()) {
            list.items.add(value);
        }
        let myFileList = list.files;
        input.files = myFileList;
    }
    editaEncontrado() {
        this.formDataFiles = Array.from(this.files.values());
        const formData = new FormData();
        formData.append('value', JSON.stringify(this.anuncioEncontrado));
        this.formDataFiles.forEach(element => {
            formData.append('files', element);
        });
        this.imgToDelete.forEach(element => {
            formData.append('delete', element);
        });
        this.encontradoService.editEncontrado(formData).subscribe(data => {
            if (data.ok) {
                this.router.navigate(['/dashboard/encontrado']);
            }
        });
    }
    removeElement(array, elem) {
        var index = array.indexOf(elem);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    markerDragEnd($event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    }
    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
    // Get Current Location Coordinates
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 15;
            });
        }
    }
};
EncontradoEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"] },
    { type: src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_3__["EncontradoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: false })
], EncontradoEditComponent.prototype, "searchElementRef", void 0);
EncontradoEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-encontrado-edit',
        template: __webpack_require__(/*! raw-loader!./encontrado-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/cadastros/encontrado-edit/encontrado-edit.component.html"),
        styles: [__webpack_require__(/*! ./encontrado-edit.component.scss */ "./src/app/cadastros/encontrado-edit/encontrado-edit.component.scss")]
    })
], EncontradoEditComponent);



/***/ }),

/***/ "./src/app/cadastros/encontrado/encontrado.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/cadastros/encontrado/encontrado.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".removeItem {\n  position: absolute;\n  top: -10px;\n  right: 5px;\n  background: white;\n  border-radius: 50%;\n  padding: 0;\n  width: 25px;\n  height: 25px;\n}\n\n.removeItem i {\n  font-size: 23px;\n  color: #ca0000;\n}\n\n.form-group > label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2NhZGFzdHJvcy9lbmNvbnRyYWRvL2VuY29udHJhZG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhZGFzdHJvcy9lbmNvbnRyYWRvL2VuY29udHJhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYWRhc3Ryb3MvZW5jb250cmFkby9lbmNvbnRyYWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlbW92ZUl0ZW0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xMHB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ucmVtb3ZlSXRlbSBpIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgY29sb3I6IHJnYigyMDIsIDAsIDApO1xufVxuXG4uZm9ybS1ncm91cCA+IGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIucmVtb3ZlSXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnJlbW92ZUl0ZW0gaSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICNjYTAwMDA7XG59XG5cbi5mb3JtLWdyb3VwID4gbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cadastros/encontrado/encontrado.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cadastros/encontrado/encontrado.component.ts ***!
  \**************************************************************/
/*! exports provided: EncontradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncontradoComponent", function() { return EncontradoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_model_anuncioEncontrado_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/anuncioEncontrado.model */ "./src/app/model/anuncioEncontrado.model.ts");
/* harmony import */ var src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/encontrado.service */ "./src/app/services/encontrado.service.ts");
/* harmony import */ var src_app_model_animal_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/animal.model */ "./src/app/model/animal.model.ts");
/* harmony import */ var src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/usuario.model */ "./src/app/model/usuario.model.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let EncontradoComponent = class EncontradoComponent {
    constructor(autenticacaoService, encontradoService, mapsAPILoader, ngZone, router, formBuilder) {
        this.autenticacaoService = autenticacaoService;
        this.encontradoService = encontradoService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.formBuilder = formBuilder;
        this.anuncioEncontrado = new src_app_model_anuncioEncontrado_model__WEBPACK_IMPORTED_MODULE_3__["AnuncioEncontrado"]();
        this.animal = new src_app_model_animal_model__WEBPACK_IMPORTED_MODULE_5__["Animal"]();
        this.files = new Map();
        this.formDataFiles = [];
        this.previewUrl = new Map();
        this.usuario = new src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_6__["Usuario"]();
        this.anuncioForm = this.createFormGroupWithBuilder(this.formBuilder);
        this.anuncioForm.controls.tipo.setValue("cachorro");
        this.anuncioForm.controls.sexo.setValue("macho");
        this.anuncioForm.controls.resgatado.setValue("false");
        this.anuncioForm.controls.porte.setValue("Pequeno");
        this.anuncioForm.controls.idade.setValue("Filhote (0 a 2 anos)");
    }
    ngOnInit() {
        if (this.autenticacaoService.currentUserValue != null) {
            this.usuario = this.autenticacaoService.currentUserValue;
        }
        else {
            this.router.navigate(['/']);
        }
        this.setCurrentLocation();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder;
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 12;
                });
            });
        });
    }
    createFormGroupWithBuilder(formBuilder) {
        return formBuilder.group({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            resgatado: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            cor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            porte: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            idade: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            descricao: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            raca: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required)
        });
    }
    onSubmit() {
        this.animal.tipo = this.anuncioForm.value.tipo;
        this.animal.cor = this.anuncioForm.value.cor;
        this.animal.descricao = this.anuncioForm.value.descricao;
        this.animal.nome = this.anuncioForm.value.nome;
        this.animal.porte = this.anuncioForm.value.porte;
        this.animal.sexo = this.anuncioForm.value.sexo;
        this.animal.idade = this.anuncioForm.value.idade;
        this.animal.raca = this.anuncioForm.value.raca;
        this.anuncioEncontrado.animal = this.animal;
        this.anuncioEncontrado.resgatado = this.anuncioForm.value.resgatado;
        this.anuncioEncontrado.animal.usuario = this.usuario;
        this.anuncioEncontrado.cidade = "Foz do Iguaçu";
        this.anuncioEncontrado.estado = "Paraná";
        this.anuncioEncontrado.lat = this.latitude;
        this.anuncioEncontrado.lng = this.longitude;
        this.cadastrarEncontrado();
    }
    updateFileInput() {
        let input = document.getElementById("file");
        let list = new DataTransfer();
        for (const [value] of this.files.entries()) {
            list.items.add(value);
        }
        let myFileList = list.files;
        input.files = myFileList;
    }
    markerDragEnd($event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    }
    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
    // Get Current Location Coordinates
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 15;
            });
        }
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
        this.previewUrl.delete(fileName);
        this.updateFileInput();
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
                this.previewUrl.set(element.name, reader.result);
            };
        });
    }
    cadastrarEncontrado() {
        this.formDataFiles = Array.from(this.files.values());
        const formData = new FormData();
        formData.append('value', JSON.stringify(this.anuncioEncontrado));
        this.formDataFiles.forEach(element => {
            formData.append('files', element);
        });
        this.encontradoService.registerEncontrado(formData).subscribe(data => {
            if (data.ok) {
                this.router.navigate(['/dashboard/encontrado']);
            }
        });
    }
};
EncontradoComponent.ctorParameters = () => [
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
    { type: src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_4__["EncontradoService"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: false })
], EncontradoComponent.prototype, "searchElementRef", void 0);
EncontradoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-encontrado',
        template: __webpack_require__(/*! raw-loader!./encontrado.component.html */ "./node_modules/raw-loader/index.js!./src/app/cadastros/encontrado/encontrado.component.html"),
        styles: [__webpack_require__(/*! ./encontrado.component.scss */ "./src/app/cadastros/encontrado/encontrado.component.scss")]
    })
], EncontradoComponent);



/***/ }),

/***/ "./src/app/cadastros/perdido-edit/perdido-edit.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/cadastros/perdido-edit/perdido-edit.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-preview {\n  width: 100%;\n  height: auto;\n}\n\n.removeItem {\n  position: absolute;\n  top: -10px;\n  right: 5px;\n  background: white;\n  border-radius: 50%;\n  padding: 0;\n  width: 25px;\n  height: 25px;\n}\n\n.removeItem i {\n  font-size: 23px;\n  color: #ca0000;\n}\n\n.form-group > label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2NhZGFzdHJvcy9wZXJkaWRvLWVkaXQvcGVyZGlkby1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYWRhc3Ryb3MvcGVyZGlkby1lZGl0L3BlcmRpZG8tZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYWRhc3Ryb3MvcGVyZGlkby1lZGl0L3BlcmRpZG8tZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctcHJldmlldyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmVtb3ZlSXRlbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5yZW1vdmVJdGVtIGkge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogcmdiKDIwMiwgMCwgMCk7XG59XG5cbi5mb3JtLWdyb3VwID4gbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi5pbWctcHJldmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5yZW1vdmVJdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ucmVtb3ZlSXRlbSBpIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogI2NhMDAwMDtcbn1cblxuLmZvcm0tZ3JvdXAgPiBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cadastros/perdido-edit/perdido-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/cadastros/perdido-edit/perdido-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PerdidoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerdidoEditComponent", function() { return PerdidoEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/perdido.service */ "./src/app/services/perdido.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");








let PerdidoEditComponent = class PerdidoEditComponent {
    constructor(activatedRoute, autenticacaoService, perdidoService, router, mapsAPILoader, ngZone, formBuilder) {
        this.activatedRoute = activatedRoute;
        this.autenticacaoService = autenticacaoService;
        this.perdidoService = perdidoService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.formBuilder = formBuilder;
        this.files = new Map();
        this.formDataFiles = [];
        this.previewUrl = new Map();
        this.imgToDelete = new Array();
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_7__["Global"].baseUrl;
        this.zoom = 12;
        this.anuncioForm = this.createFormGroupWithBuilder(this.formBuilder);
    }
    createFormGroupWithBuilder(formBuilder) {
        return formBuilder.group({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            resgatado: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            cor: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            porte: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            idade: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            descricao: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
        });
    }
    ngOnInit() {
        this.perdidoId = this.activatedRoute.snapshot.params.id;
        this.getPerdido(this.perdidoId);
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder;
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 12;
                });
            });
        });
    }
    onSubmit() {
        this.animal.tipo = this.anuncioForm.value.tipo;
        this.animal.cor = this.anuncioForm.value.cor;
        this.animal.descricao = this.anuncioForm.value.descricao;
        this.animal.nome = this.anuncioForm.value.nome;
        this.animal.porte = this.anuncioForm.value.porte;
        this.animal.sexo = this.anuncioForm.value.sexo;
        this.animal.raca = this.anuncioForm.value.raca;
        this.animal.idade = this.anuncioForm.value.idade;
        this.anuncioPerdido.animal = this.animal;
        this.anuncioPerdido.cidade = "Foz do Iguaçu";
        this.anuncioPerdido.estado = "Paraná";
        this.anuncioPerdido.lng = this.longitude;
        this.anuncioPerdido.lat = this.latitude;
        this.editaEncontrado();
    }
    getPerdido(id) {
        return this.perdidoService.getPerdidoById(id).then(perdido => {
            this.anuncioPerdido = perdido;
            this.animal = this.anuncioPerdido.animal;
            this.animal = this.anuncioPerdido.animal;
            this.latitude = this.anuncioPerdido.lat;
            this.longitude = this.anuncioPerdido.lng;
            this.anuncioForm.controls.tipo.setValue(this.anuncioPerdido.animal.tipo);
            this.anuncioForm.controls.sexo.setValue(this.anuncioPerdido.animal.sexo);
            this.anuncioForm.controls.porte.setValue(this.anuncioPerdido.animal.porte);
            this.anuncioForm.controls.idade.setValue(this.anuncioPerdido.animal.idade);
            this.anuncioForm.controls.nome.setValue(this.anuncioPerdido.animal.nome);
            this.anuncioForm.controls.cor.setValue(this.anuncioPerdido.animal.cor);
            this.anuncioForm.controls.raca.setValue(this.anuncioPerdido.animal.raca);
            if (this.animal.usuario.id != this.autenticacaoService.currentUserValue.id) {
                this.router.navigate(['/']);
            }
        });
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
        this.previewUrl.delete(fileName);
        this.updateFileInput();
    }
    removeExistingFile(fileName) {
        this.imgToDelete.push(fileName);
        this.removeElement(this.animal.imagens, fileName);
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
                this.previewUrl.set(element.name, reader.result);
            };
        });
    }
    updateFileInput() {
        let input = document.getElementById("file");
        let list = new DataTransfer();
        for (const [value] of this.files.entries()) {
            list.items.add(value);
        }
        let myFileList = list.files;
        input.files = myFileList;
    }
    editaEncontrado() {
        this.formDataFiles = Array.from(this.files.values());
        const formData = new FormData();
        formData.append('value', JSON.stringify(this.anuncioPerdido));
        this.formDataFiles.forEach(element => {
            formData.append('files', element);
        });
        this.imgToDelete.forEach(element => {
            formData.append('delete', element);
        });
        this.perdidoService.editPerdido(formData).subscribe(data => {
            if (data.ok) {
                this.router.navigate(['/dashboard/perdido']);
            }
        });
    }
    removeElement(array, elem) {
        var index = array.indexOf(elem);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    markerDragEnd($event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    }
    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
    // Get Current Location Coordinates
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 15;
            });
        }
    }
};
PerdidoEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"] },
    { type: src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_2__["PerdidoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: false })
], PerdidoEditComponent.prototype, "searchElementRef", void 0);
PerdidoEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perdido-edit',
        template: __webpack_require__(/*! raw-loader!./perdido-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/cadastros/perdido-edit/perdido-edit.component.html"),
        styles: [__webpack_require__(/*! ./perdido-edit.component.scss */ "./src/app/cadastros/perdido-edit/perdido-edit.component.scss")]
    })
], PerdidoEditComponent);



/***/ }),

/***/ "./src/app/cadastros/perdido/perdido.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/cadastros/perdido/perdido.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".removeItem {\n  position: absolute;\n  top: -10px;\n  right: 5px;\n  background: white;\n  border-radius: 50%;\n  padding: 0;\n  width: 25px;\n  height: 25px;\n}\n\n.removeItem i {\n  font-size: 23px;\n  color: #ca0000;\n}\n\n.form-group > label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2NhZGFzdHJvcy9wZXJkaWRvL3BlcmRpZG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhZGFzdHJvcy9wZXJkaWRvL3BlcmRpZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYWRhc3Ryb3MvcGVyZGlkby9wZXJkaWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlbW92ZUl0ZW0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xMHB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ucmVtb3ZlSXRlbSBpIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgY29sb3I6IHJnYigyMDIsIDAsIDApO1xufVxuXG4uZm9ybS1ncm91cCA+IGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIucmVtb3ZlSXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnJlbW92ZUl0ZW0gaSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICNjYTAwMDA7XG59XG5cbi5mb3JtLWdyb3VwID4gbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cadastros/perdido/perdido.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cadastros/perdido/perdido.component.ts ***!
  \********************************************************/
/*! exports provided: PerdidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerdidoComponent", function() { return PerdidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_model_anuncioPerdido_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/anuncioPerdido.model */ "./src/app/model/anuncioPerdido.model.ts");
/* harmony import */ var src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/perdido.service */ "./src/app/services/perdido.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_model_animal_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/animal.model */ "./src/app/model/animal.model.ts");
/* harmony import */ var src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/usuario.model */ "./src/app/model/usuario.model.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let PerdidoComponent = class PerdidoComponent {
    constructor(autenticacaoService, perdidoService, mapsAPILoader, ngZone, router, formBuilder) {
        this.autenticacaoService = autenticacaoService;
        this.perdidoService = perdidoService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.formBuilder = formBuilder;
        this.anuncioPerdido = new src_app_model_anuncioPerdido_model__WEBPACK_IMPORTED_MODULE_2__["AnuncioPerdido"]();
        this.files = new Map();
        this.formDataFiles = [];
        this.previewUrl = [];
        this.animal = new src_app_model_animal_model__WEBPACK_IMPORTED_MODULE_5__["Animal"]();
        this.usuario = new src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_6__["Usuario"]();
        this.anuncioForm = this.createFormGroupWithBuilder(this.formBuilder);
        this.anuncioForm.controls.tipo.setValue("cachorro");
        this.anuncioForm.controls.sexo.setValue("macho");
        this.anuncioForm.controls.porte.setValue("Pequeno");
        this.anuncioForm.controls.idade.setValue("Filhote (0 a 2 anos)");
    }
    createFormGroupWithBuilder(formBuilder) {
        return formBuilder.group({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            raca: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            cor: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            porte: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            idade: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            descricao: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
        });
    }
    ngOnInit() {
        if (this.autenticacaoService.currentUserValue != null) {
            this.usuario = this.autenticacaoService.currentUserValue;
        }
        else {
            this.router.navigate(['/']);
        }
        this.setCurrentLocation();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder;
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 12;
                });
            });
        });
    }
    onSubmit() {
        this.animal.tipo = this.anuncioForm.value.tipo;
        this.animal.cor = this.anuncioForm.value.cor;
        this.animal.descricao = this.anuncioForm.value.descricao;
        this.animal.nome = this.anuncioForm.value.nome;
        this.animal.porte = this.anuncioForm.value.porte;
        this.animal.sexo = this.anuncioForm.value.sexo;
        this.animal.idade = this.anuncioForm.value.idade;
        this.animal.raca = this.anuncioForm.value.raca;
        this.anuncioPerdido.animal = this.animal;
        this.anuncioPerdido.animal.usuario = this.usuario;
        this.anuncioPerdido.cidade = "Foz do Iguaçu";
        this.anuncioPerdido.estado = "Paraná";
        this.anuncioPerdido.lng = this.longitude;
        this.anuncioPerdido.lat = this.latitude;
        this.cadastrarPerdido();
    }
    updateFileInput() {
        let input = document.getElementById("file");
        let list = new DataTransfer();
        for (const [value] of this.files.entries()) {
            list.items.add(value);
        }
        let myFileList = list.files;
        input.files = myFileList;
    }
    markerDragEnd($event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    }
    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
    // Get Current Location Coordinates
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 15;
            });
        }
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
        this.previewUrl.delete(fileName);
        this.updateFileInput();
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
    cadastrarPerdido() {
        this.formDataFiles = Array.from(this.files.values());
        this.anuncioPerdido.lat = this.latitude;
        this.anuncioPerdido.lng = this.longitude;
        const formData = new FormData();
        formData.append('value', JSON.stringify(this.anuncioPerdido));
        this.formDataFiles.forEach(element => {
            formData.append('files', element);
        });
        this.perdidoService.registerPerdido(formData).subscribe(data => {
            if (data.ok) {
                this.router.navigate(['/dashboard/perdido']);
            }
        });
    }
};
PerdidoComponent.ctorParameters = () => [
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"] },
    { type: src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_3__["PerdidoService"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: false })
], PerdidoComponent.prototype, "searchElementRef", void 0);
PerdidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perdido',
        template: __webpack_require__(/*! raw-loader!./perdido.component.html */ "./node_modules/raw-loader/index.js!./src/app/cadastros/perdido/perdido.component.html"),
        styles: [__webpack_require__(/*! ./perdido.component.scss */ "./src/app/cadastros/perdido/perdido.component.scss")]
    })
], PerdidoComponent);



/***/ }),

/***/ "./src/app/cadastros/usuario-edit/usuario-edit.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/cadastros/usuario-edit/usuario-edit.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvcy91c3VhcmlvLWVkaXQvdXN1YXJpby1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cadastros/usuario-edit/usuario-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/cadastros/usuario-edit/usuario-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: UsuarioEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioEditComponent", function() { return UsuarioEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/usuario.model */ "./src/app/model/usuario.model.ts");







let UsuarioEditComponent = class UsuarioEditComponent {
    constructor(usuarioService, autenticacaoService, router, formBuilder) {
        this.usuarioService = usuarioService;
        this.autenticacaoService = autenticacaoService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.usuario = new src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_6__["Usuario"];
        this.previewUrl = [];
        this.usuarioForm = this.createFormGroupWithBuilder(this.formBuilder);
    }
    ngOnInit() {
        this.getUsuario(this.autenticacaoService.currentUserValue.id);
        if (this.autenticacaoService.currentUserValue == null || this.autenticacaoService.currentUserValue.authdata == null) {
            this.router.navigate(['/']);
        }
    }
    getUsuario(id) {
        return this.usuarioService.getUserById(id).then(user => {
            this.usuario = user;
            this.usuarioForm.controls.nome.setValue(this.usuario.nome);
            this.usuarioForm.controls.email.setValue(this.usuario.email);
            this.usuarioForm.controls.telefone.setValue(this.usuario.telefone);
            this.usuarioForm.controls.celular.setValue(this.usuario.celular);
        });
    }
    createFormGroupWithBuilder(formBuilder) {
        return formBuilder.group({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            celular: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            telefone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            senha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    onSubmit() {
        this.usuario.nome = this.usuarioForm.value.nome;
        this.usuario.email = this.usuarioForm.value.email;
        this.usuario.celular = this.usuarioForm.value.celular;
        this.usuario.telefone = this.usuarioForm.value.telefone;
        let token = window.btoa(this.autenticacaoService.currentUserValue.email + ':' + this.usuarioForm.value.senha);
        if (this.usuarioForm.invalid) {
            return;
        }
        if (token != this.autenticacaoService.currentUserValue.authdata) {
            return;
        }
        else {
            this.editarUsuario();
        }
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
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
        this.myInputVariable.nativeElement.value = "";
        return false;
    }
    editarUsuario() {
        const formData = new FormData();
        formData.append('value', JSON.stringify(this.usuario));
        formData.append('file', this.fileData);
        this.usuarioService.registerUser(formData);
    }
};
UsuarioEditComponent.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput', { static: false })
], UsuarioEditComponent.prototype, "myInputVariable", void 0);
UsuarioEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuario-edit',
        template: __webpack_require__(/*! raw-loader!./usuario-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/cadastros/usuario-edit/usuario-edit.component.html"),
        styles: [__webpack_require__(/*! ./usuario-edit.component.scss */ "./src/app/cadastros/usuario-edit/usuario-edit.component.scss")]
    })
], UsuarioEditComponent);



/***/ }),

/***/ "./src/app/cadastros/usuario/usuario.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/cadastros/usuario/usuario.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvcy91c3VhcmlvL3VzdWFyaW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cadastros/usuario/usuario.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cadastros/usuario/usuario.component.ts ***!
  \********************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/usuario.model */ "./src/app/model/usuario.model.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




// import { Prestador } from 'src/app/model/prestador.model';
// import { PrestadorService } from 'src/app/services/prestador.service';



let UsuarioComponent = class UsuarioComponent {
    constructor(usuarioService, 
    // private prestadorService: PrestadorService,
    autenticacaoService, router, formBuilder) {
        this.usuarioService = usuarioService;
        this.autenticacaoService = autenticacaoService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.usuario = new src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_2__["Usuario"];
        this.previewUrl = [];
        this.usuarioForm = this.createFormGroupWithBuilder(this.formBuilder);
    }
    ngOnInit() {
        if (this.autenticacaoService.currentUserValue !== null && this.autenticacaoService.currentUserValue.authdata !== null) {
            this.router.navigate(['/']);
        }
    }
    createFormGroupWithBuilder(formBuilder) {
        return formBuilder.group({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            celular: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            telefone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            senha: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            confirmasenha: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
        }, {
            validator: this.MustMatch('senha', 'confirmasenha')
        });
    }
    MustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    onSubmit() {
        this.usuario.nome = this.usuarioForm.value.nome;
        this.usuario.email = this.usuarioForm.value.email;
        this.usuario.celular = this.usuarioForm.value.celular;
        this.usuario.telefone = this.usuarioForm.value.telefone;
        this.usuario.senha = this.usuarioForm.value.senha;
        if (this.usuarioForm.invalid) {
            return;
        }
        this.cadastrarUsuario();
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
        this.preview(fileInput);
    }
    // fileProgressPrestador(fileInput: any) {
    //   this.filePrestador = <File>fileInput.target.files[0];
    //   this.preview(fileInput);
    // }
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
        this.myInputVariable.nativeElement.value = "";
        return false;
    }
    cadastrarUsuario() {
        const formData = new FormData();
        formData.append('value', JSON.stringify(this.usuario));
        formData.append('file', this.fileData);
        this.usuarioService.registerUser(formData);
    }
};
UsuarioComponent.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput', { static: false })
], UsuarioComponent.prototype, "myInputVariable", void 0);
UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuario',
        template: __webpack_require__(/*! raw-loader!./usuario.component.html */ "./node_modules/raw-loader/index.js!./src/app/cadastros/usuario/usuario.component.html"),
        styles: [__webpack_require__(/*! ./usuario.component.scss */ "./src/app/cadastros/usuario/usuario.component.scss")]
    })
], UsuarioComponent);



/***/ }),

/***/ "./src/app/cards/card-doacao/card-doacao.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/cards/card-doacao/card-doacao.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-fluid {\n  width: auto;\n  height: auto;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.card, .img-todos-animais {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2NhcmRzL2NhcmQtZG9hY2FvL2NhcmQtZG9hY2FvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJkcy9jYXJkLWRvYWNhby9jYXJkLWRvYWNhby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2FyZHMvY2FyZC1kb2FjYW8vY2FyZC1kb2FjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWZsdWlkIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQgOiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZCwgLmltZy10b2Rvcy1hbmltYWlzIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4iLCIuaW1nLWZsdWlkIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZCwgLmltZy10b2Rvcy1hbmltYWlzIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cards/card-doacao/card-doacao.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cards/card-doacao/card-doacao.component.ts ***!
  \************************************************************/
/*! exports provided: CardDoacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDoacaoComponent", function() { return CardDoacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");
/* harmony import */ var src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/doacao.service */ "./src/app/services/doacao.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let CardDoacaoComponent = class CardDoacaoComponent {
    constructor(sanitizer, doacaoService, authService, router) {
        this.sanitizer = sanitizer;
        this.doacaoService = doacaoService;
        this.authService = authService;
        this.router = router;
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl;
    }
    ngOnInit() {
        this.style = "url(" + this.url + "arquivo/doacao/" + this.doacao.id + "/" + this.doacao.animal.imagens[0] + ")";
    }
    sanitizeImage(id, file) {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + src_app_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + 'arquivo/doacao/' + id + '/' + file + ")");
    }
    removeDoacao() {
        const formData = new FormData();
        formData.append('userId', this.authService.currentUserValue.id.toString());
        this.doacaoService.removeDoacao(this.doacao.id, formData).subscribe(data => {
            if (data.ok) {
                this.router.navigate(['/dashboard']);
            }
        });
    }
};
CardDoacaoComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_4__["DoacaoService"] },
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardDoacaoComponent.prototype, "doacao", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardDoacaoComponent.prototype, "type", void 0);
CardDoacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-doacao',
        template: __webpack_require__(/*! raw-loader!./card-doacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/cards/card-doacao/card-doacao.component.html"),
        styles: [__webpack_require__(/*! ./card-doacao.component.scss */ "./src/app/cards/card-doacao/card-doacao.component.scss")]
    })
], CardDoacaoComponent);



/***/ }),

/***/ "./src/app/cards/card-encontrado/card-encontrado.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/cards/card-encontrado/card-encontrado.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmRzL2NhcmQtZW5jb250cmFkby9jYXJkLWVuY29udHJhZG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cards/card-encontrado/card-encontrado.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/cards/card-encontrado/card-encontrado.component.ts ***!
  \********************************************************************/
/*! exports provided: CardEncontradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardEncontradoComponent", function() { return CardEncontradoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");
/* harmony import */ var src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/encontrado.service */ "./src/app/services/encontrado.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");







let CardEncontradoComponent = class CardEncontradoComponent {
    constructor(sanitizer, encontradoService, authService, router) {
        this.sanitizer = sanitizer;
        this.encontradoService = encontradoService;
        this.authService = authService;
        this.router = router;
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl;
    }
    ngOnInit() {
        this.style = "url(" + this.url + "arquivo/encontrado/" + this.encontrado.id + "/" + this.encontrado.animal.imagens[0] + ")";
    }
    sanitizeImage(id, file) {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + src_app_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + 'arquivo/encontrado/' + id + '/' + file + ")");
    }
    removeEncontrado() {
        const formData = new FormData();
        formData.append('userId', this.authService.currentUserValue.id.toString());
        this.encontradoService.removeEncontrado(this.encontrado.id, formData).subscribe(data => {
            if (data.ok) {
                this.router.navigate(['/dashboard']);
            }
        });
    }
};
CardEncontradoComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_4__["EncontradoService"] },
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardEncontradoComponent.prototype, "encontrado", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardEncontradoComponent.prototype, "type", void 0);
CardEncontradoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-encontrado',
        template: __webpack_require__(/*! raw-loader!./card-encontrado.component.html */ "./node_modules/raw-loader/index.js!./src/app/cards/card-encontrado/card-encontrado.component.html"),
        styles: [__webpack_require__(/*! ./card-encontrado.component.scss */ "./src/app/cards/card-encontrado/card-encontrado.component.scss")]
    })
], CardEncontradoComponent);



/***/ }),

/***/ "./src/app/cards/card-perdido/card-perdido.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/cards/card-perdido/card-perdido.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmRzL2NhcmQtcGVyZGlkby9jYXJkLXBlcmRpZG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cards/card-perdido/card-perdido.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cards/card-perdido/card-perdido.component.ts ***!
  \**************************************************************/
/*! exports provided: CardPerdidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPerdidoComponent", function() { return CardPerdidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");
/* harmony import */ var src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/perdido.service */ "./src/app/services/perdido.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let CardPerdidoComponent = class CardPerdidoComponent {
    constructor(sanitizer, perdidoService, authService, router) {
        this.sanitizer = sanitizer;
        this.perdidoService = perdidoService;
        this.authService = authService;
        this.router = router;
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl;
    }
    ngOnInit() {
        this.style = "url(" + this.url + "arquivo/perdido/" + this.perdido.id + "/" + this.perdido.animal.imagens[0] + ")";
    }
    sanitizeImage(id, file) {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + src_app_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + 'arquivo/perdido/' + id + '/' + file + ")");
    }
    removePerdido() {
        const formData = new FormData();
        formData.append('userId', this.authService.currentUserValue.id.toString());
        this.perdidoService.removePerdido(this.perdido.id, formData).subscribe(data => {
            if (data.ok) {
                this.router.navigate(['/dashboard']);
            }
        });
    }
};
CardPerdidoComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_4__["PerdidoService"] },
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardPerdidoComponent.prototype, "perdido", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardPerdidoComponent.prototype, "type", void 0);
CardPerdidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-perdido',
        template: __webpack_require__(/*! raw-loader!./card-perdido.component.html */ "./node_modules/raw-loader/index.js!./src/app/cards/card-perdido/card-perdido.component.html"),
        styles: [__webpack_require__(/*! ./card-perdido.component.scss */ "./src/app/cards/card-perdido/card-perdido.component.scss")]
    })
], CardPerdidoComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.usuarioId = this.authService.currentUserValue.id;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/detalhes/detalhe-doacao/detalhe-doacao.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/detalhes/detalhe-doacao/detalhe-doacao.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item {\n  text-align: center;\n  background: grey;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.img-carousel {\n  height: 500px;\n  width: auto;\n}\n\n.anuncio-infos {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2RldGFsaGVzL2RldGFsaGUtZG9hY2FvL2RldGFsaGUtZG9hY2FvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZXRhbGhlcy9kZXRhbGhlLWRvYWNhby9kZXRhbGhlLWRvYWNhby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGV0YWxoZXMvZGV0YWxoZS1kb2FjYW8vZGV0YWxoZS1kb2FjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbWctY2Fyb3VzZWwge1xuICAgIGhlaWdodDogNTAwcHg7IFxuICAgIHdpZHRoOiBhdXRvOyAgICBcbn1cblxuLmFudW5jaW8taW5mb3Mge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59IiwiLmNhcm91c2VsLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1nLWNhcm91c2VsIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5hbnVuY2lvLWluZm9zIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/detalhes/detalhe-doacao/detalhe-doacao.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/detalhes/detalhe-doacao/detalhe-doacao.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetalheDoacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheDoacaoComponent", function() { return DetalheDoacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/doacao.service */ "./src/app/services/doacao.service.ts");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");





let DetalheDoacaoComponent = class DetalheDoacaoComponent {
    constructor(activatedRoute, doacaoService) {
        this.activatedRoute = activatedRoute;
        this.doacaoService = doacaoService;
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_4__["Global"].baseUrl;
    }
    ngOnInit() {
        this.doacaoId = this.activatedRoute.snapshot.params.id;
        this.getDoacao(this.doacaoId);
    }
    getDoacao(id) {
        return this.doacaoService.getDoacaoById(id).then(doacao => {
            this.doacao = doacao;
        });
    }
};
DetalheDoacaoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_3__["DoacaoService"] }
];
DetalheDoacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalhe-doacao',
        template: __webpack_require__(/*! raw-loader!./detalhe-doacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/detalhes/detalhe-doacao/detalhe-doacao.component.html"),
        styles: [__webpack_require__(/*! ./detalhe-doacao.component.scss */ "./src/app/detalhes/detalhe-doacao/detalhe-doacao.component.scss")]
    })
], DetalheDoacaoComponent);



/***/ }),

/***/ "./src/app/detalhes/detalhe-encontrado/detalhe-encontrado.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/detalhes/detalhe-encontrado/detalhe-encontrado.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item {\n  text-align: center;\n  background: grey;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.img-carousel {\n  height: 500px;\n  width: auto;\n}\n\n.anuncio-infos {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2RldGFsaGVzL2RldGFsaGUtZW5jb250cmFkby9kZXRhbGhlLWVuY29udHJhZG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RldGFsaGVzL2RldGFsaGUtZW5jb250cmFkby9kZXRhbGhlLWVuY29udHJhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RldGFsaGVzL2RldGFsaGUtZW5jb250cmFkby9kZXRhbGhlLWVuY29udHJhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbWctY2Fyb3VzZWwge1xuICAgIGhlaWdodDogNTAwcHg7IFxuICAgIHdpZHRoOiBhdXRvOyAgICBcbn1cblxuLmFudW5jaW8taW5mb3Mge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59IiwiLmNhcm91c2VsLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1nLWNhcm91c2VsIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5hbnVuY2lvLWluZm9zIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/detalhes/detalhe-encontrado/detalhe-encontrado.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/detalhes/detalhe-encontrado/detalhe-encontrado.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DetalheEncontradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheEncontradoComponent", function() { return DetalheEncontradoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/encontrado.service */ "./src/app/services/encontrado.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");





let DetalheEncontradoComponent = class DetalheEncontradoComponent {
    constructor(activatedRoute, encontradoService) {
        this.activatedRoute = activatedRoute;
        this.encontradoService = encontradoService;
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_4__["Global"].baseUrl;
    }
    ngOnInit() {
        this.encontradoId = this.activatedRoute.snapshot.params.id;
        this.getEncontrado(this.encontradoId);
        this.centerZoom = 15;
    }
    getEncontrado(id) {
        return this.encontradoService.getEncontradoById(id).then(encontrado => {
            this.encontrado = encontrado;
        });
    }
};
DetalheEncontradoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_2__["EncontradoService"] }
];
DetalheEncontradoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalhe-encontrado',
        template: __webpack_require__(/*! raw-loader!./detalhe-encontrado.component.html */ "./node_modules/raw-loader/index.js!./src/app/detalhes/detalhe-encontrado/detalhe-encontrado.component.html"),
        styles: [__webpack_require__(/*! ./detalhe-encontrado.component.scss */ "./src/app/detalhes/detalhe-encontrado/detalhe-encontrado.component.scss")]
    })
], DetalheEncontradoComponent);



/***/ }),

/***/ "./src/app/detalhes/detalhe-perdido/detalhe-perdido.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/detalhes/detalhe-perdido/detalhe-perdido.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item {\n  text-align: center;\n  background: grey;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.img-carousel {\n  height: 500px;\n  width: auto;\n}\n\n.anuncio-infos {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2RldGFsaGVzL2RldGFsaGUtcGVyZGlkby9kZXRhbGhlLXBlcmRpZG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RldGFsaGVzL2RldGFsaGUtcGVyZGlkby9kZXRhbGhlLXBlcmRpZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RldGFsaGVzL2RldGFsaGUtcGVyZGlkby9kZXRhbGhlLXBlcmRpZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbWctY2Fyb3VzZWwge1xuICAgIGhlaWdodDogNTAwcHg7IFxuICAgIHdpZHRoOiBhdXRvOyAgICBcbn1cblxuLmFudW5jaW8taW5mb3Mge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59IiwiLmNhcm91c2VsLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1nLWNhcm91c2VsIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5hbnVuY2lvLWluZm9zIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/detalhes/detalhe-perdido/detalhe-perdido.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/detalhes/detalhe-perdido/detalhe-perdido.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetalhePerdidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhePerdidoComponent", function() { return DetalhePerdidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/perdido.service */ "./src/app/services/perdido.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");





let DetalhePerdidoComponent = class DetalhePerdidoComponent {
    constructor(activatedRoute, perdidoService) {
        this.activatedRoute = activatedRoute;
        this.perdidoService = perdidoService;
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_4__["Global"].baseUrl;
    }
    ngOnInit() {
        this.centerZoom = 15;
        this.perdidoId = this.activatedRoute.snapshot.params.id;
        this.getPerdido(this.perdidoId);
    }
    getPerdido(id) {
        return this.perdidoService.getPerdidoById(id).then(perdido => {
            this.perdido = perdido;
            (this.perdido);
        });
    }
};
DetalhePerdidoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_2__["PerdidoService"] }
];
DetalhePerdidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalhe-perdido',
        template: __webpack_require__(/*! raw-loader!./detalhe-perdido.component.html */ "./node_modules/raw-loader/index.js!./src/app/detalhes/detalhe-perdido/detalhe-perdido.component.html"),
        styles: [__webpack_require__(/*! ./detalhe-perdido.component.scss */ "./src/app/detalhes/detalhe-perdido/detalhe-perdido.component.scss")]
    })
], DetalhePerdidoComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/global.ts":
/*!***************************!*\
  !*** ./src/app/global.ts ***!
  \***************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global;
(function (Global) {
    Global.baseUrl = '/api/';
    // export var baseUrl: string = 'http://localhost:8080/api/';
})(Global || (Global = {}));


/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-signin {\n  border: solid 1px rgba(85, 85, 85, 0.548);\n  color: #464646;\n  width: 80px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 14px;\n  font-weight: bold;\n}\n\nli.nav-item.dropdown, .nav-item {\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n\n.bg-light {\n  background: #fff !important;\n  box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.068);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0ksMkJBQUE7RUFDQSw0Q0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tc2lnbmluIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSg4NSwgODUsIDg1LCAwLjU0OCk7XG4gIGNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XG4gIHdpZHRoOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5saS5uYXYtaXRlbS5kcm9wZG93biwgLm5hdi1pdGVte1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJnLWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMnB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA2OCk7XG59IiwiLmJ0bi1zaWduaW4ge1xuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDg1LCA4NSwgODUsIDAuNTQ4KTtcbiAgY29sb3I6ICM0NjQ2NDY7XG4gIHdpZHRoOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5saS5uYXYtaXRlbS5kcm9wZG93biwgLm5hdi1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMnB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA2OCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




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
        this.autenticacaoService.login(this.formLoginEmail, this.formLoginSenha).subscribe(data => {
            if (data == null) {
                this.errorAlert = true;
            }
            else {
                window.location.reload();
            }
        }, error => {
            this.errorAlert = true;
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/helpers/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");




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
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/helpers/basic-auth.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/helpers/basic-auth.interceptor.ts ***!
  \***************************************************/
/*! exports provided: BasicAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return BasicAuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");



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
BasicAuthInterceptor.ctorParameters = () => [
    { type: _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] }
];
BasicAuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BasicAuthInterceptor);



/***/ }),

/***/ "./src/app/helpers/error-messages.ts":
/*!*******************************************!*\
  !*** ./src/app/helpers/error-messages.ts ***!
  \*******************************************/
/*! exports provided: CUSTOM_ERRORS, requiredFormat, emailFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_ERRORS", function() { return CUSTOM_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFormat", function() { return requiredFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailFormat", function() { return emailFormat; });
const CUSTOM_ERRORS = [
    {
        error: "required",
        format: requiredFormat
    }, {
        error: "email",
        format: emailFormat
    }
];
function requiredFormat(label, error) {
    return `${label} é obrigatório.`;
}
function emailFormat(label, error) {
    return `${label} doesn't look like a valid email address.`;
}


/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(autenticacaoService) {
        this.autenticacaoService = autenticacaoService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.autenticacaoService.logout();
                // location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/helpers/safe.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/helpers/safe.pipe.ts ***!
  \**************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Unable to bypass security for invalid type: ${type}`);
        }
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




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
        this.autenticacaoService.login(this.formLoginEmail, this.formLoginSenha).subscribe(data => {
            if (data == null) {
                this.errorAlert = true;
            }
            else {
                window.location.reload();
            }
        }, error => {
            this.errorAlert = true;
        });
    }
};
LandingPageComponent.ctorParameters = () => [
    { type: _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: __webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page/landing-page.component.html"),
        styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/landing-page/landing-page.component.scss")]
    })
], LandingPageComponent);



/***/ }),

/***/ "./src/app/listagem/listagem-doacao/listagem-doacao.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/listagem/listagem-doacao/listagem-doacao.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #d16d79 !important;\n  font-size: 14px !important;\n  font-weight: bold !important;\n  background-color: #f5f5f5 !important;\n  background-clip: padding-box;\n  border: 1px solid #f5f5f5 !important;\n  border-bottom: 1px solid #d16d79 !important;\n  border-radius: 0 !important;\n  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\nselect {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2xpc3RhZ2VtL2xpc3RhZ2VtLWRvYWNhby9saXN0YWdlbS1kb2FjYW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpc3RhZ2VtL2xpc3RhZ2VtLWRvYWNhby9saXN0YWdlbS1kb2FjYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSxnRkFBQTtFQUNBLHdFQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhZ2VtL2xpc3RhZ2VtLWRvYWNhby9saXN0YWdlbS1kb2FjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICNkMTZkNzkgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxNmQ3OSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbnNlbGVjdCB7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufSIsIi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjZDE2ZDc5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMTZkNzkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG5zZWxlY3Qge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/listagem/listagem-doacao/listagem-doacao.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/listagem/listagem-doacao/listagem-doacao.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListagemDoacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListagemDoacaoComponent", function() { return ListagemDoacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/doacao.service */ "./src/app/services/doacao.service.ts");




let ListagemDoacaoComponent = class ListagemDoacaoComponent {
    constructor(autenticacaoService, doacaoService) {
        this.autenticacaoService = autenticacaoService;
        this.doacaoService = doacaoService;
        this.labels = {
            previousLabel: 'Anterior',
            nextLabel: 'Próxima',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: `You're on page`
        };
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
    ngOnInit() {
        this.listaDoacoesGeral();
    }
    listaDoacoesGeral() {
        this.doacaoService.getDoacoesGeral().subscribe(data => {
            if (data.content.length > 0) {
                this.doacoes = data.content;
                this.config = {
                    itemsPerPage: 10,
                    currentPage: data.pageable.pageNumber,
                    totalItems: data.totalElements
                };
            }
        });
    }
};
ListagemDoacaoComponent.ctorParameters = () => [
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
    { type: src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_3__["DoacaoService"] }
];
ListagemDoacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listagem-doacao',
        template: __webpack_require__(/*! raw-loader!./listagem-doacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/listagem/listagem-doacao/listagem-doacao.component.html"),
        styles: [__webpack_require__(/*! ./listagem-doacao.component.scss */ "./src/app/listagem/listagem-doacao/listagem-doacao.component.scss")]
    })
], ListagemDoacaoComponent);



/***/ }),

/***/ "./src/app/listagem/listagem-encontrado/listagem-encontrado.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/listagem/listagem-encontrado/listagem-encontrado.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #d16d79 !important;\n  font-size: 14px !important;\n  font-weight: bold !important;\n  background-color: #f5f5f5 !important;\n  background-clip: padding-box;\n  border: 1px solid #f5f5f5 !important;\n  border-bottom: 1px solid #d16d79 !important;\n  border-radius: 0 !important;\n  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\nselect {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2xpc3RhZ2VtL2xpc3RhZ2VtLWVuY29udHJhZG8vbGlzdGFnZW0tZW5jb250cmFkby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlzdGFnZW0vbGlzdGFnZW0tZW5jb250cmFkby9saXN0YWdlbS1lbmNvbnRyYWRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0ZBQUE7RUFDQSx3RUFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9saXN0YWdlbS9saXN0YWdlbS1lbmNvbnRyYWRvL2xpc3RhZ2VtLWVuY29udHJhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICNkMTZkNzkgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxNmQ3OSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbnNlbGVjdCB7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufSIsIi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjZDE2ZDc5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMTZkNzkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG5zZWxlY3Qge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/listagem/listagem-encontrado/listagem-encontrado.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/listagem/listagem-encontrado/listagem-encontrado.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListagemEncontradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListagemEncontradoComponent", function() { return ListagemEncontradoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/encontrado.service */ "./src/app/services/encontrado.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");




let ListagemEncontradoComponent = class ListagemEncontradoComponent {
    constructor(autenticacaoService, encontradosService) {
        this.autenticacaoService = autenticacaoService;
        this.encontradosService = encontradosService;
        this.labels = {
            previousLabel: 'Anterior',
            nextLabel: 'Próxima',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: `You're on page`
        };
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
    ngOnInit() {
        this.listaEncontradoGeral();
    }
    listaEncontradoGeral() {
        this.encontradosService.getEncontradosGeral().subscribe(data => {
            if (data.content.length > 0) {
                this.encontrados = data.content;
                this.config = {
                    itemsPerPage: 10,
                    currentPage: data.pageable.pageNumber,
                    totalItems: data.totalElements
                };
            }
        });
    }
};
ListagemEncontradoComponent.ctorParameters = () => [
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"] },
    { type: src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_2__["EncontradoService"] }
];
ListagemEncontradoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listagem-encontrado',
        template: __webpack_require__(/*! raw-loader!./listagem-encontrado.component.html */ "./node_modules/raw-loader/index.js!./src/app/listagem/listagem-encontrado/listagem-encontrado.component.html"),
        styles: [__webpack_require__(/*! ./listagem-encontrado.component.scss */ "./src/app/listagem/listagem-encontrado/listagem-encontrado.component.scss")]
    })
], ListagemEncontradoComponent);



/***/ }),

/***/ "./src/app/listagem/listagem-perdido/listagem-perdido.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/listagem/listagem-perdido/listagem-perdido.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #d16d79 !important;\n  font-size: 14px !important;\n  font-weight: bold !important;\n  background-color: #f5f5f5 !important;\n  background-clip: padding-box;\n  border: 1px solid #f5f5f5 !important;\n  border-bottom: 1px solid #d16d79 !important;\n  border-radius: 0 !important;\n  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\nselect {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtYW5kYS9Eb2N1bWVudG9zL2Fkb3RlcGV0cy1mcm9udC9zcmMvYXBwL2xpc3RhZ2VtL2xpc3RhZ2VtLXBlcmRpZG8vbGlzdGFnZW0tcGVyZGlkby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlzdGFnZW0vbGlzdGFnZW0tcGVyZGlkby9saXN0YWdlbS1wZXJkaWRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0ZBQUE7RUFDQSx3RUFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9saXN0YWdlbS9saXN0YWdlbS1wZXJkaWRvL2xpc3RhZ2VtLXBlcmRpZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICNkMTZkNzkgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxNmQ3OSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbnNlbGVjdCB7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufSIsIi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjZDE2ZDc5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMTZkNzkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG5zZWxlY3Qge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/listagem/listagem-perdido/listagem-perdido.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/listagem/listagem-perdido/listagem-perdido.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListagemPerdidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListagemPerdidoComponent", function() { return ListagemPerdidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/perdido.service */ "./src/app/services/perdido.service.ts");




let ListagemPerdidoComponent = class ListagemPerdidoComponent {
    constructor(autenticacaoService, perdidoService) {
        this.autenticacaoService = autenticacaoService;
        this.perdidoService = perdidoService;
        this.labels = {
            previousLabel: 'Anterior',
            nextLabel: 'Próxima',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: `You're on page`
        };
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
    ngOnInit() {
        this.listaEncontradoGeral();
    }
    listaEncontradoGeral() {
        this.perdidoService.getPerdidosGeral().subscribe(data => {
            if (data.content.length > 0) {
                this.perdidos = data.content;
                this.config = {
                    itemsPerPage: 10,
                    currentPage: data.pageable.pageNumber,
                    totalItems: data.totalElements
                };
            }
        });
    }
};
ListagemPerdidoComponent.ctorParameters = () => [
    { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
    { type: src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_3__["PerdidoService"] }
];
ListagemPerdidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listagem-perdido',
        template: __webpack_require__(/*! raw-loader!./listagem-perdido.component.html */ "./node_modules/raw-loader/index.js!./src/app/listagem/listagem-perdido/listagem-perdido.component.html"),
        styles: [__webpack_require__(/*! ./listagem-perdido.component.scss */ "./src/app/listagem/listagem-perdido/listagem-perdido.component.scss")]
    })
], ListagemPerdidoComponent);



/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_doacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/doacao.service */ "./src/app/services/doacao.service.ts");



let MainComponent = class MainComponent {
    constructor(doacaoService) {
        this.doacaoService = doacaoService;
    }
    ngOnInit() {
        this.listaDoacoesGeral();
    }
    listaDoacoesGeral() {
        this.doacaoService.getDoacoesGeral(0, 3).subscribe(data => {
            if (data.content.length > 0) {
                this.doacoes = data.content;
            }
        });
    }
};
MainComponent.ctorParameters = () => [
    { type: _services_doacao_service__WEBPACK_IMPORTED_MODULE_2__["DoacaoService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/model/animal.model.ts":
/*!***************************************!*\
  !*** ./src/app/model/animal.model.ts ***!
  \***************************************/
/*! exports provided: Animal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animal", function() { return Animal; });
class Animal {
}


/***/ }),

/***/ "./src/app/model/anuncio.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/anuncio.model.ts ***!
  \****************************************/
/*! exports provided: Anuncio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anuncio", function() { return Anuncio; });
class Anuncio {
}


/***/ }),

/***/ "./src/app/model/anuncioDoacao.model.ts":
/*!**********************************************!*\
  !*** ./src/app/model/anuncioDoacao.model.ts ***!
  \**********************************************/
/*! exports provided: AnuncioDoacao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioDoacao", function() { return AnuncioDoacao; });
/* harmony import */ var _anuncio_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anuncio.model */ "./src/app/model/anuncio.model.ts");

class AnuncioDoacao extends _anuncio_model__WEBPACK_IMPORTED_MODULE_0__["Anuncio"] {
}


/***/ }),

/***/ "./src/app/model/anuncioEncontrado.model.ts":
/*!**************************************************!*\
  !*** ./src/app/model/anuncioEncontrado.model.ts ***!
  \**************************************************/
/*! exports provided: AnuncioEncontrado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioEncontrado", function() { return AnuncioEncontrado; });
/* harmony import */ var _anuncio_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anuncio.model */ "./src/app/model/anuncio.model.ts");

class AnuncioEncontrado extends _anuncio_model__WEBPACK_IMPORTED_MODULE_0__["Anuncio"] {
}


/***/ }),

/***/ "./src/app/model/anuncioPerdido.model.ts":
/*!***********************************************!*\
  !*** ./src/app/model/anuncioPerdido.model.ts ***!
  \***********************************************/
/*! exports provided: AnuncioPerdido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnuncioPerdido", function() { return AnuncioPerdido; });
/* harmony import */ var _anuncio_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anuncio.model */ "./src/app/model/anuncio.model.ts");

class AnuncioPerdido extends _anuncio_model__WEBPACK_IMPORTED_MODULE_0__["Anuncio"] {
}


/***/ }),

/***/ "./src/app/model/usuario.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/usuario.model.ts ***!
  \****************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
}


/***/ }),

/***/ "./src/app/services/autenticacao.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/autenticacao.service.ts ***!
  \**************************************************/
/*! exports provided: AutenticacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoService", function() { return AutenticacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AutenticacaoService = class AutenticacaoService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        let token = window.btoa(username + ':' + password);
        let formData = new FormData;
        formData.append('token', token);
        return this.http.post(`${_global__WEBPACK_IMPORTED_MODULE_4__["Global"].baseUrl}usuario/autenticar`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(user => {
            if (user != null) {
                var usuario = user;
                // login successful if there's a jwt token in the response
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                usuario.authdata = token;
                localStorage.setItem('currentUser', JSON.stringify(usuario));
                this.currentUserSubject.next(usuario);
            }
            return usuario;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
AutenticacaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AutenticacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AutenticacaoService);



/***/ }),

/***/ "./src/app/services/doacao.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/doacao.service.ts ***!
  \********************************************/
/*! exports provided: DoacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoacaoService", function() { return DoacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let DoacaoService = class DoacaoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    registerDoacao(formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "doacao/upload", formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
    getDoacoesGeral(page = 0, size = 12) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "doacao?page=" + page + "&size=" + size, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((page) => page));
    }
    getDoacaoById(id) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "doacao/" + id, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((doacao) => doacao)).toPromise();
    }
    getDoacoesByUser(id, page = 0, size = 12) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "doacao/porUsuario/" + id + "?page=" + page + "&size=" + size, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((page) => page));
    }
    editDoacao(formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "doacao/edit", formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
    removeDoacao(id, formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "doacao/delete/" + id, formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
};
DoacaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DoacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DoacaoService);



/***/ }),

/***/ "./src/app/services/encontrado.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/encontrado.service.ts ***!
  \************************************************/
/*! exports provided: EncontradoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncontradoService", function() { return EncontradoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let EncontradoService = class EncontradoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    registerEncontrado(formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "encontrado/upload", formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
    getEncontradosGeral(page = 0, size = 12) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "encontrado?page=" + page + "&size=" + size, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((page) => page));
    }
    getEncontradoById(id) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "encontrado/" + id, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((encontrado) => encontrado)).toPromise();
    }
    getEncontradosByUser(id, page = 0, size = 12) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "encontrado/porUsuario/" + id + "?page=" + page + "&size=" + size, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((page) => page));
    }
    editEncontrado(formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "encontrado/edit", formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
    removeEncontrado(id, formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "encontrado/delete/" + id, formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
};
EncontradoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EncontradoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EncontradoService);



/***/ }),

/***/ "./src/app/services/perdido.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/perdido.service.ts ***!
  \*********************************************/
/*! exports provided: PerdidoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerdidoService", function() { return PerdidoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let PerdidoService = class PerdidoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    registerPerdido(formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].baseUrl + "perdido/upload", formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
    getPerdidosGeral(page = 0, size = 12) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].baseUrl + "perdido?page=" + page + "&size=" + size, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((page) => page));
    }
    getPerdidoById(id) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].baseUrl + "perdido/" + id, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((Perdido) => Perdido)).toPromise();
    }
    getPerdidosByUser(id, page = 0, size = 12) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].baseUrl + "perdido/porUsuario/" + id + "?page=" + page + "&size=" + size, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((page) => page));
    }
    editPerdido(formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].baseUrl + "perdido/edit", formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
    removePerdido(id, formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].baseUrl + "perdido/delete/" + id, formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
};
PerdidoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
PerdidoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PerdidoService);



/***/ }),

/***/ "./src/app/services/usuario.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UsuarioService = class UsuarioService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    registerUser(formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "usuario/upload", formData, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
    getUserById(id) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "usuario/" + id, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((usuario) => usuario)).toPromise();
    }
    getUserByEmail(email) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "usuario/poremail/" + email, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((usuario) => usuario)).toPromise();
    }
};
UsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuarioService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zone.js */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/amanda/Documentos/adotepets-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map