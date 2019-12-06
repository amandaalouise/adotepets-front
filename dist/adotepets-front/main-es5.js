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

module.exports = "<app-header></app-header>\n<div class=\"container-fluid bg-f5f5f5 padver-30 padver-15-xs\">\n  <img src=\"../../../assets/img/1920x250-doacao.png\" class=\"rounded img-fluid mb-4\" alt=\"\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"d-block d-md-flex bd-highlight\">\n        <div class=\"p-md-2 bd-highlight\">\n          <!-- tipo, porte, sexo, idade, castrado -->\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Tipo</option>\n            <option value=\"Todos\">Todos</option>\n            <option value=\"Cachorro\">Cachorro</option>\n            <option value=\"Gato\">Gato</option>\n            <option value=\"Outros\">Outros</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Porte</option>\n            <option value=\"Pequeno\">Pequeno</option>\n            <option value=\"Médio\">Médio</option>\n            <option value=\"Grande\">Grande</option>\n            <option value=\"Gigante\">Gigante</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Sexo</option>\n            <option value=\"Fêmea\">Fêmea</option>\n            <option value=\"Macho\">Macho</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Idade</option>\n            <option value=\"Filhote (0 a 2 anos)\">Filhote (0 a 2 anos)</option>\n            <option value=\"Adulto (2 a 8 anos)\">Adulto (2 a 8 anos)</option>\n            <option value=\"Idoso (acima de 8 anos)\">Idoso (acima de 8 anos)</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 mt-3 mt-md-0 p-md-2 bd-highlight float-right float-md-none\">\n          <button class=\"btn btn-info\">Buscar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row mt-4\">\n    <ng-container *ngIf=\"!doacoes\">\n      <div class=\"col-12\">\n        <div class=\"bg-fff w-100\" style=\"border-radius: 10px;\">\n          <div class=\"py-5\" style=\"height: 51.2vh\">\n            <h2 class=\"text-center font-2em text-uppercase font-700 mt-1\">Ops!</h2>\n            <p class=\"font-1-2em text-center font-300 mbottom-0\">Parece que a sua busca não retornou nenhum\n              resultado.<br>Mude os filtros e tente novamente.</p>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n  <ng-container *ngIf=\"doacoes\">\n    <div class=\"row\">\n      <ng-container *ngFor=\"let item of doacoes | paginate: config\">\n        <div class=\"col-12 col-md-3 mb-4\">\n          <app-card-doacao [doacao]=\"item\">\n          </app-card-doacao>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"row\" id=\"rowPagination\">\n      <div class=\"col-xs-12 align-center\">\n        <pagination-controls [previousLabel]=\"labels.previousLabel\" [nextLabel]=\"labels.nextLabel\"\n          [screenReaderPaginationLabel]=\"labels.screenReaderPaginationLabel\"\n          [screenReaderPageLabel]=\"labels.screenReaderPageLabel\"\n          [screenReaderCurrentLabel]=\"labels.screenReaderCurrentLabel\" (pageChange)=\"pageChanged($event)\">\n        </pagination-controls>\n      </div>\n    </div>\n  </ng-container>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/listagem/listagem-encontrado/listagem-encontrado.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listagem/listagem-encontrado/listagem-encontrado.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid bg-f5f5f5 padver-30 padver-15-xs\">\n  <img src=\"../../../assets/img/1920x250-encontrados.png\" class=\"rounded img-fluid mb-4\" alt=\"\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"d-block d-md-flex bd-highlight\">\n        <div class=\"p-md-2 bd-highlight\">\n          <!-- tipo, porte, sexo, idade, castrado -->\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Tipo</option>\n            <option value=\"Todos\">Todos</option>\n            <option value=\"Cachorro\">Cachorro</option>\n            <option value=\"Gato\">Gato</option>\n            <option value=\"Outros\">Outros</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Porte</option>\n            <option value=\"Pequeno\">Pequeno</option>\n            <option value=\"Médio\">Médio</option>\n            <option value=\"Grande\">Grande</option>\n            <option value=\"Gigante\">Gigante</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Sexo</option>\n            <option value=\"Fêmea\">Fêmea</option>\n            <option value=\"Macho\">Macho</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Idade</option>\n            <option value=\"Filhote (0 a 2 anos)\">Filhote (0 a 2 anos)</option>\n            <option value=\"Adulto (2 a 8 anos)\">Adulto (2 a 8 anos)</option>\n            <option value=\"Idoso (acima de 8 anos)\">Idoso (acima de 8 anos)</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 mt-3 mt-md-0 p-md-2 bd-highlight float-right float-md-none\">\n          <button class=\"btn btn-info\">Buscar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row mt-4\">\n    <ng-container *ngIf=\"!encontrados\">\n      <div class=\"col-12\">\n        <div class=\"bg-fff w-100\" style=\"border-radius: 10px;\">\n          <div class=\"py-5\" style=\"height: 51.2vh\">\n            <h2 class=\"text-center font-2em text-uppercase font-700 mt-1\">Ops!</h2>\n            <p class=\"font-1-2em text-center font-300 mbottom-0\">Parece que a sua busca não retornou nenhum\n              resultado.<br>Mude os filtros e tente novamente.</p>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n  <ng-container *ngIf=\"encontrados\">\n    <div class=\"row\">\n      <ng-container *ngFor=\"let item of encontrados | paginate: config\">\n        <div class=\"col-12 col-md-3 mb-4\">\n          <app-card-encontrado [encontrado]=\"item\">\n          </app-card-encontrado>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"row\" id=\"rowPagination\">\n      <div class=\"col-xs-12 align-center\">\n        <pagination-controls [previousLabel]=\"labels.previousLabel\" [nextLabel]=\"labels.nextLabel\"\n          [screenReaderPaginationLabel]=\"labels.screenReaderPaginationLabel\"\n          [screenReaderPageLabel]=\"labels.screenReaderPageLabel\"\n          [screenReaderCurrentLabel]=\"labels.screenReaderCurrentLabel\" (pageChange)=\"pageChanged($event)\">\n        </pagination-controls>\n      </div>\n    </div>\n  </ng-container>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/listagem/listagem-perdido/listagem-perdido.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listagem/listagem-perdido/listagem-perdido.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid bg-f5f5f5 padver-30 padver-15-xs\">\n  <img src=\"../../../assets/img/1920x250-perdidos.png\" class=\"rounded img-fluid mb-4\" alt=\"\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"d-block d-md-flex bd-highlight\">\n        <div class=\"p-md-2 bd-highlight\">\n          <!-- tipo, porte, sexo, idade, castrado -->\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Tipo</option>\n            <option value=\"Todos\">Todos</option>\n            <option value=\"Cachorro\">Cachorro</option>\n            <option value=\"Gato\">Gato</option>\n            <option value=\"Outros\">Outros</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Porte</option>\n            <option value=\"Pequeno\">Pequeno</option>\n            <option value=\"Médio\">Médio</option>\n            <option value=\"Grande\">Grande</option>\n            <option value=\"Gigante\">Gigante</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Sexo</option>\n            <option value=\"Fêmea\">Fêmea</option>\n            <option value=\"Macho\">Macho</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 bd-highlight\">\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Idade</option>\n            <option value=\"Filhote (0 a 2 anos)\">Filhote (0 a 2 anos)</option>\n            <option value=\"Adulto (2 a 8 anos)\">Adulto (2 a 8 anos)</option>\n            <option value=\"Idoso (acima de 8 anos)\">Idoso (acima de 8 anos)</option>\n          </select>\n        </div>\n        <div class=\"p-md-2 mt-3 mt-md-0 p-md-2 bd-highlight float-right float-md-none\">\n          <button class=\"btn btn-info\">Buscar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row mt-4\">\n    <ng-container *ngIf=\"!perdidos\">\n      <div class=\"col-12\">\n        <div class=\"bg-fff w-100\" style=\"border-radius: 10px;\">\n          <div class=\"py-5\" style=\"height: 51.2vh\">\n            <h2 class=\"text-center font-2em text-uppercase font-700 mt-1\">Ops!</h2>\n            <p class=\"font-1-2em text-center font-300 mbottom-0\">Parece que a sua busca não retornou nenhum\n              resultado.<br>Mude os filtros e tente novamente.</p>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n  <ng-container *ngIf=\"perdidos\">\n    <div class=\"row\">\n      <ng-container *ngFor=\"let item of perdidos | paginate: config\">\n        <div class=\"col-12 col-md-3 mb-4\">\n          <app-card-perdido [perdido]=\"item\">\n          </app-card-perdido>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"row\" id=\"rowPagination\">\n      <div class=\"col-xs-12 align-center\">\n        <pagination-controls [previousLabel]=\"labels.previousLabel\" [nextLabel]=\"labels.nextLabel\"\n          [screenReaderPaginationLabel]=\"labels.screenReaderPaginationLabel\"\n          [screenReaderPageLabel]=\"labels.screenReaderPageLabel\"\n          [screenReaderCurrentLabel]=\"labels.screenReaderCurrentLabel\" (pageChange)=\"pageChanged($event)\">\n        </pagination-controls>\n      </div>\n    </div>\n  </ng-container>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid py-5\">\n  <div class=\"container\">\n    <div class=\"row h-100 justify-content-center align-items-center\">\n      <div class=\"col-md-7 col-12 py-5\">\n        <h1 class=\"primary-text pr-md-5\">Quem somos nós?</h1>\n        <h2 class=\"secondary-text mt-3 pr-md-5\">Pettix é um sistema funcional, cujo os idealizadores são acadêmicos de\n          Medicina Veterinária da cidade de Foz do Iguaçu - PR, dos quais possuem parcerias com ONG’s e protetores, com\n          objetivo de achar um lar para animais que foram abandonados e com isso diminuir o índice de animais nas ruas e\n          a superlotação de ONG’s. </h2>\n        <button class=\"btn btn-primary mt-3\">Por que adotar?</button>\n      </div>\n      <div class=\"col-md-5 d-none d-sm-block\">\n        <img src=\"../../assets/img/dog.png\" class=\"img-fluid\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 text-center\">\n        <h1 class=\"primary-text mt-5 mb-5\">Funcionalidades do Pettix</h1>\n      </div>\n    </div>\n    <div class=\"row text-center d-flex justify-content-around\">\n      <div class=\"col-md-3 col-12\">\n        <img src=\"https://placehold.it/100x100\" class=\"img-responsive rounded-circle mb-3\" alt=\"\">\n        <p class=\"subtitle-text\">Doação ou Adoção de animais</p>\n        <p>Rerum aperiam praesentium.</p>\n      </div>\n      <div class=\"col-md-3 col-12\">\n        <img src=\"https://placehold.it/100x100\" class=\"img-responsive rounded-circle mb-3\" alt=\"\">\n        <p class=\"subtitle-text\">Perdi meu animal</p>\n        <p>Rerum aperiam praesentium.</p>\n      </div>\n      <div class=\"col-md-3 col-12\">\n        <img src=\"https://placehold.it/100x100\" class=\"img-responsive rounded-circle mb-3\" alt=\"\">\n        <p class=\"subtitle-text\">Encontrei um animal</p>\n        <p>Rerum aperiam praesentium.</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid padhor-0\">\n  <div class=\"container-fluid bg-grey-home padver-50\">\n    <div class=\"container container-fluid-sm\">\n      <h2 class=\"titulo\">Animais para doação</h2>\n      <ng-container *ngIf=\"doacoes\">\n        <div class=\"row\">\n          <ng-container *ngFor=\"let item of doacoes\">\n            <div class=\"col-12 col-md-4 mb-4 mb-md-0\">\n              <app-card-doacao [doacao]=\"item\"></app-card-doacao>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n      <div class=\"row mt-5\">\n        <div class=\"col-12\">\n          <p class=\"mbottom-0 text-center\"> <a href=\"#\" [routerLink]=\"['/listagem-doacao']\"\n              class=\"btn btn-info  text-uppercase padhor-30\">Ver todos os animais</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row py-5 h-100 justify-content-center align-items-center\">\n    <div class=\"col-md-4 d-none d-sm-block\">\n      <img src=\"../../assets/img/cat.png\" class=\"img-fluid\" alt=\"\">\n    </div>\n    <div class=\"col-md-8 col-12\">\n      <h1 class=\"primary-text pl-md-5 pl-3\">Encontrando e devolvendo lares aos animais</h1>\n      <h2 class=\"secondary-text mt-3 pl-md-5 pl-3\">Rerum aperiam praesentium adipisci accusantium. Quasi officiis veniam\n        quisquam\n        fugiat, libero vel,\n        voluptas officia aliquid inventore aliquam adipisci nihil repellendus quam veritatis!</h2>\n      <button class=\"btn btn-primary mt-3 ml-md-5 ml-3\">Saiba mais</button>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        patchMacroTask: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
        patchEventPrototype: function () { return noop; },
        isIEOrEdge: function () { return false; },
        getGlobalObjects: function () { return undefined; },
        ObjectDefineProperty: function () { return noop; },
        ObjectGetOwnPropertyDescriptor: function () { return undefined; },
        ObjectCreate: function () { return undefined; },
        ArraySlice: function () { return []; },
        patchClass: function () { return noop; },
        wrapWithCurrentZone: function () { return noop; },
        filterProperties: function () { return []; },
        attachOriginToPatched: function () { return noop; },
        _redefineProperty: function () { return noop; },
        patchCallbacks: function () { return noop; }
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
            get: function () {
                return 'Promise';
            },
            enumerable: true,
            configurable: true
        });
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global[api.symbol('fetch')] = fetch_1;
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
    }
    catch (error) {
    }
    return ieOrEdge;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.call(originalDelegate);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.call(nativePromise);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.call(nativeError);
                }
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                        api._redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var zoneSymbol$1 = Zone.__symbol__;
var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol$1('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    var ignoreProperties = _global['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    if (isBrowser) {
        var internalWindow = window;
        var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
        if (typeof internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }
        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
        if (HTMLMarqueeElement_1) {
            patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
        }
        var Worker_1 = internalWindow['Worker'];
        if (Worker_1) {
            patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
        }
    }
    var XMLHttpRequest = _global['XMLHttpRequest'];
    if (XMLHttpRequest) {
        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }
    if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
            global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = _redefineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = function () { return ({
        globalSources: globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames$1,
        eventNames: eventNames,
        isBrowser: isBrowser,
        isMix: isMix,
        isNode: isNode,
        TRUE_STR: TRUE_STR,
        FALSE_STR: FALSE_STR,
        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
    }); };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetLegacyPatch(_global, api) {
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, globalSources = _a.globalSources, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = api.isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    api.patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
    return true;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var _a = api.getGlobalObjects(), ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        api.patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = api.ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = api.ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
function propertyDescriptorLegacyPatch(api, _global) {
    var _a = api.getGlobalObjects(), isNode = _a.isNode, isMix = _a.isMix;
    if (isNode && !isMix) {
        return;
    }
    if (!canPatchViaPropertyDescriptor(api, _global)) {
        var supportsWebSocket = typeof WebSocket !== 'undefined';
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents(api);
        api.patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
        Zone[api.symbol('patchEvents')] = true;
    }
}
function canPatchViaPropertyDescriptor(api, _global) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((isBrowser || isMix) &&
        !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
        // try to use onclick to detect whether we can patch via propertyDescriptor
        // because XMLHttpRequest is not available in service worker
        if (desc) {
            api.ObjectDefineProperty(Element.prototype, 'onclick', {
                enumerable: true,
                configurable: true,
                get: function () {
                    return true;
                }
            });
            var div = document.createElement('div');
            var result = !!div.onclick;
            api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
            return result;
        }
    }
    var XMLHttpRequest = _global['XMLHttpRequest'];
    if (!XMLHttpRequest) {
        // XMLHttpRequest is not available in service worker
        return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
        api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents(api) {
    var eventNames = api.getGlobalObjects().eventNames;
    var unboundKey = api.symbol('unbound');
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = api.wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
(function (_global) {
    _global['__zone_symbol__legacyPatch'] = function () {
        var Zone = _global['Zone'];
        Zone.__load_patch('registerElement', function (global, Zone, api) {
            registerElementPatch(global, api);
        });
        Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
            eventTargetLegacyPatch(global, api);
            propertyDescriptorLegacyPatch(api, global);
        });
    };
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
    var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
    if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
    }
    var _a = api.getGlobalObjects(), eventNames = _a.eventNames, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    var EVENT_TARGET = _global['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
    }
    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
}
function patchEvent$1(global, api) {
    api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('legacy', function (global) {
    var legacyPatch = global[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) {
        legacyPatch();
    }
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    patchEvent$1(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    patchCustomElements(global, api);
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequest = window['XMLHttpRequest'];
        if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
        }
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/doacao.service */ "./src/app/services/doacao.service.ts");




var AnuncioDoacaoComponent = /** @class */ (function () {
    function AnuncioDoacaoComponent(autenticacaoService, doacaoService) {
        this.autenticacaoService = autenticacaoService;
        this.doacaoService = doacaoService;
        this.labels = {
            previousLabel: 'Anterior',
            nextLabel: 'Próxima',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: "You're on page"
        };
    }
    AnuncioDoacaoComponent.prototype.ngOnInit = function () {
        this.userId = this.autenticacaoService.currentUserValue.id;
        this.listaDoacoesPorUsuario();
    };
    AnuncioDoacaoComponent.prototype.listaDoacoesPorUsuario = function () {
        var _this = this;
        this.doacaoService.getDoacoesByUser(this.userId).subscribe(function (data) {
            if (data.content.length > 0) {
                _this.doacoes = data.content;
                _this.config = {
                    itemsPerPage: 10,
                    currentPage: data.pageable.pageNumber,
                    totalItems: data.totalElements
                };
            }
        });
    };
    AnuncioDoacaoComponent.ctorParameters = function () { return [
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
        { type: src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_3__["DoacaoService"] }
    ]; };
    AnuncioDoacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anuncio-doacao',
            template: __webpack_require__(/*! raw-loader!./anuncio-doacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/anuncios/anuncio-doacao/anuncio-doacao.component.html")
        })
    ], AnuncioDoacaoComponent);
    return AnuncioDoacaoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/encontrado.service */ "./src/app/services/encontrado.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");




var AnuncioEncontradoComponent = /** @class */ (function () {
    function AnuncioEncontradoComponent(autenticacaoService, encontradoService) {
        this.autenticacaoService = autenticacaoService;
        this.encontradoService = encontradoService;
        this.labels = {
            previousLabel: 'Anterior',
            nextLabel: 'Próxima',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: "You're on page"
        };
    }
    AnuncioEncontradoComponent.prototype.ngOnInit = function () {
        this.userId = this.autenticacaoService.currentUserValue.id;
        this.listaEncontradosPorUsuario();
    };
    AnuncioEncontradoComponent.prototype.listaEncontradosPorUsuario = function () {
        var _this = this;
        this.encontradoService.getEncontradosByUser(this.userId).subscribe(function (data) {
            if (data.content.length > 0) {
                _this.encontrados = data.content;
                _this.config = {
                    itemsPerPage: 10,
                    currentPage: data.pageable.pageNumber,
                    totalItems: data.totalElements
                };
            }
        });
    };
    AnuncioEncontradoComponent.ctorParameters = function () { return [
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"] },
        { type: src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_2__["EncontradoService"] }
    ]; };
    AnuncioEncontradoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anuncio-encontrado',
            template: __webpack_require__(/*! raw-loader!./anuncio-encontrado.component.html */ "./node_modules/raw-loader/index.js!./src/app/anuncios/anuncio-encontrado/anuncio-encontrado.component.html")
        })
    ], AnuncioEncontradoComponent);
    return AnuncioEncontradoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnuncioLandingComponent = /** @class */ (function () {
    function AnuncioLandingComponent() {
    }
    AnuncioLandingComponent.prototype.ngOnInit = function () {
    };
    AnuncioLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anuncio-landing',
            template: __webpack_require__(/*! raw-loader!./anuncio-landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/anuncios/anuncio-landing/anuncio-landing.component.html"),
            styles: [__webpack_require__(/*! ./anuncio-landing.component.scss */ "./src/app/anuncios/anuncio-landing/anuncio-landing.component.scss")]
        })
    ], AnuncioLandingComponent);
    return AnuncioLandingComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/perdido.service */ "./src/app/services/perdido.service.ts");




var AnuncioPerdidoComponent = /** @class */ (function () {
    function AnuncioPerdidoComponent(autenticacaoService, perdidoService) {
        this.autenticacaoService = autenticacaoService;
        this.perdidoService = perdidoService;
        this.labels = {
            previousLabel: 'Anterior',
            nextLabel: 'Próxima',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: "You're on page"
        };
    }
    AnuncioPerdidoComponent.prototype.ngOnInit = function () {
        this.userId = this.autenticacaoService.currentUserValue.id;
        this.listaPerdidosByUser();
    };
    AnuncioPerdidoComponent.prototype.listaPerdidosByUser = function () {
        var _this = this;
        this.perdidoService.getPerdidosByUser(this.userId).subscribe(function (data) {
            if (data.content.length > 0) {
                _this.perdidos = data.content;
                _this.config = {
                    itemsPerPage: 10,
                    currentPage: data.pageable.pageNumber,
                    totalItems: data.totalElements
                };
            }
        });
    };
    AnuncioPerdidoComponent.ctorParameters = function () { return [
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
        { type: src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_3__["PerdidoService"] }
    ]; };
    AnuncioPerdidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anuncio-perdido',
            template: __webpack_require__(/*! raw-loader!./anuncio-perdido.component.html */ "./node_modules/raw-loader/index.js!./src/app/anuncios/anuncio-perdido/anuncio-perdido.component.html")
        })
    ], AnuncioPerdidoComponent);
    return AnuncioPerdidoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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

























var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'adotepets-front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./helpers/basic-auth.interceptor */ "./src/app/helpers/basic-auth.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helpers/error.interceptor */ "./src/app/helpers/error.interceptor.ts");
/* harmony import */ var _helpers_safe_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helpers/safe.pipe */ "./src/app/helpers/safe.pipe.ts");
/* harmony import */ var _detalhes_detalhe_doacao_detalhe_doacao_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./detalhes/detalhe-doacao/detalhe-doacao.component */ "./src/app/detalhes/detalhe-doacao/detalhe-doacao.component.ts");
/* harmony import */ var _detalhes_detalhe_encontrado_detalhe_encontrado_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./detalhes/detalhe-encontrado/detalhe-encontrado.component */ "./src/app/detalhes/detalhe-encontrado/detalhe-encontrado.component.ts");
/* harmony import */ var _detalhes_detalhe_perdido_detalhe_perdido_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./detalhes/detalhe-perdido/detalhe-perdido.component */ "./src/app/detalhes/detalhe-perdido/detalhe-perdido.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _anuncios_anuncio_landing_anuncio_landing_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./anuncios/anuncio-landing/anuncio-landing.component */ "./src/app/anuncios/anuncio-landing/anuncio-landing.component.ts");
/* harmony import */ var _cadastros_doacao_edit_doacao_edit_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./cadastros/doacao-edit/doacao-edit.component */ "./src/app/cadastros/doacao-edit/doacao-edit.component.ts");
/* harmony import */ var _cadastros_encontrado_edit_encontrado_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./cadastros/encontrado-edit/encontrado-edit.component */ "./src/app/cadastros/encontrado-edit/encontrado-edit.component.ts");
/* harmony import */ var _cadastros_perdido_edit_perdido_edit_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./cadastros/perdido-edit/perdido-edit.component */ "./src/app/cadastros/perdido-edit/perdido-edit.component.ts");
/* harmony import */ var _cadastros_usuario_edit_usuario_edit_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./cadastros/usuario-edit/usuario-edit.component */ "./src/app/cadastros/usuario-edit/usuario-edit.component.ts");
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "./node_modules/ng-bootstrap-form-validation/fesm5/ng-bootstrap-form-validation.js");
/* harmony import */ var _helpers_error_messages__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./helpers/error-messages */ "./src/app/helpers/error-messages.ts");
/* harmony import */ var _cadastros_alteracao_senha_alteracao_senha_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./cadastros/alteracao-senha/alteracao-senha.component */ "./src/app/cadastros/alteracao-senha/alteracao-senha.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlteracaoSenhaComponent = /** @class */ (function () {
    function AlteracaoSenhaComponent() {
    }
    AlteracaoSenhaComponent.prototype.ngOnInit = function () {
    };
    AlteracaoSenhaComponent.prototype.onSubmit = function () {
    };
    AlteracaoSenhaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alteracao-senha',
            template: __webpack_require__(/*! raw-loader!./alteracao-senha.component.html */ "./node_modules/raw-loader/index.js!./src/app/cadastros/alteracao-senha/alteracao-senha.component.html"),
            styles: [__webpack_require__(/*! ./alteracao-senha.component.scss */ "./src/app/cadastros/alteracao-senha/alteracao-senha.component.scss")]
        })
    ], AlteracaoSenhaComponent);
    return AlteracaoSenhaComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/doacao.service */ "./src/app/services/doacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");







var DoacaoEditComponent = /** @class */ (function () {
    function DoacaoEditComponent(activatedRoute, autenticacaoService, doacaoService, router, formBuilder) {
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
    DoacaoEditComponent.prototype.createFormGroupWithBuilder = function (formBuilder) {
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
    };
    DoacaoEditComponent.prototype.onSubmit = function () {
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
    };
    DoacaoEditComponent.prototype.ngOnInit = function () {
        this.doacaoId = this.activatedRoute.snapshot.params.id;
        this.getDoacao(this.doacaoId);
        if (this.autenticacaoService.currentUserValue == null) {
            this.router.navigate(['/']);
        }
    };
    DoacaoEditComponent.prototype.getDoacao = function (id) {
        var _this = this;
        return this.doacaoService.getDoacaoById(id).then(function (doacao) {
            _this.anuncioDoacao = doacao;
            _this.animal = _this.anuncioDoacao.animal;
            _this.anuncioForm.controls.tipo.setValue(_this.anuncioDoacao.animal.tipo);
            _this.anuncioForm.controls.sexo.setValue(_this.anuncioDoacao.animal.sexo);
            _this.anuncioForm.controls.vacinado.setValue(_this.anuncioDoacao.animal.vacinado.toString());
            _this.anuncioForm.controls.castrado.setValue(_this.anuncioDoacao.animal.castrado.toString());
            _this.anuncioForm.controls.porte.setValue(_this.anuncioDoacao.animal.porte);
            _this.anuncioForm.controls.idade.setValue(_this.anuncioDoacao.animal.idade);
            _this.anuncioForm.controls.nome.setValue(_this.anuncioDoacao.animal.nome);
            _this.anuncioForm.controls.cor.setValue(_this.anuncioDoacao.animal.cor);
            _this.anuncioForm.controls.descricao.setValue(_this.anuncioDoacao.animal.descricao);
            if (_this.animal.usuario.id != _this.autenticacaoService.currentUserValue.id) {
                _this.router.navigate(['/']);
            }
        });
    };
    DoacaoEditComponent.prototype.addFiles = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            _this.files.set(element.name, element);
        });
        this.preview(fileInput);
    };
    DoacaoEditComponent.prototype.removeFile = function (fileName) {
        this.files.delete(fileName);
        this.previewUrl.delete(fileName);
        this.updateFileInput();
    };
    DoacaoEditComponent.prototype.removeExistingFile = function (fileName) {
        this.imgToDelete.push(fileName);
        this.removeElement(this.animal.imagens, fileName);
    };
    DoacaoEditComponent.prototype.preview = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            var mimeType = element.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(element);
            reader.onload = function (_event) {
                _this.previewUrl.set(element.name, reader.result);
            };
        });
    };
    DoacaoEditComponent.prototype.updateFileInput = function () {
        var e_1, _a;
        var input = document.getElementById("file");
        var list = new DataTransfer();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.files.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 1), value = _d[0];
                list.items.add(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var myFileList = list.files;
        input.files = myFileList;
    };
    DoacaoEditComponent.prototype.editaDoacao = function () {
        var _this = this;
        this.formDataFiles = Array.from(this.files.values());
        var formData = new FormData();
        formData.append('value', JSON.stringify(this.anuncioDoacao));
        this.formDataFiles.forEach(function (element) {
            formData.append('files', element);
        });
        this.imgToDelete.forEach(function (element) {
            formData.append('delete', element);
        });
        this.doacaoService.editDoacao(formData).subscribe(function (data) {
            if (data.ok) {
                _this.router.navigate(['/dashboard/doacao']);
            }
        });
    };
    DoacaoEditComponent.prototype.removeElement = function (array, elem) {
        var index = array.indexOf(elem);
        if (index > -1) {
            array.splice(index, 1);
        }
    };
    DoacaoEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"] },
        { type: src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_4__["DoacaoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    DoacaoEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doacao-edit',
            template: __webpack_require__(/*! raw-loader!./doacao-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/cadastros/doacao-edit/doacao-edit.component.html"),
            styles: [__webpack_require__(/*! ./doacao-edit.component.scss */ "./src/app/cadastros/doacao-edit/doacao-edit.component.scss")]
        })
    ], DoacaoEditComponent);
    return DoacaoEditComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_anuncioDoacao_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/anuncioDoacao.model */ "./src/app/model/anuncioDoacao.model.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/doacao.service */ "./src/app/services/doacao.service.ts");
/* harmony import */ var src_app_model_animal_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/animal.model */ "./src/app/model/animal.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/usuario.model */ "./src/app/model/usuario.model.ts");









var DoacaoComponent = /** @class */ (function () {
    function DoacaoComponent(autenticacaoService, doacaoService, router, formBuilder) {
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
    DoacaoComponent.prototype.ngOnInit = function () {
        if (this.autenticacaoService.currentUserValue != null) {
            this.usuario = this.autenticacaoService.currentUserValue;
        }
        else {
            this.router.navigate(['/']);
        }
    };
    DoacaoComponent.prototype.createFormGroupWithBuilder = function (formBuilder) {
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
    };
    DoacaoComponent.prototype.onSubmit = function () {
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
    };
    DoacaoComponent.prototype.addFiles = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            _this.files.set(element.name, element);
        });
        this.preview(fileInput);
    };
    DoacaoComponent.prototype.removeFile = function (fileName) {
        this.files.delete(fileName);
        this.previewUrl.delete(fileName);
        this.updateFileInput();
    };
    DoacaoComponent.prototype.preview = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            var mimeType = element.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(element);
            reader.onload = function (_event) {
                _this.previewUrl.set(element.name, reader.result);
            };
        });
    };
    DoacaoComponent.prototype.updateFileInput = function () {
        var e_1, _a;
        var input = document.getElementById("file");
        var list = new DataTransfer();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.files.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 1), value = _d[0];
                list.items.add(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var myFileList = list.files;
        input.files = myFileList;
    };
    DoacaoComponent.prototype.cadastrarDoacao = function () {
        var _this = this;
        this.formDataFiles = Array.from(this.files.values());
        var formData = new FormData();
        formData.append('value', JSON.stringify(this.anuncioDoacao));
        this.formDataFiles.forEach(function (element) {
            formData.append('files', element);
        });
        this.doacaoService.registerDoacao(formData).subscribe(function (data) {
            if (data.ok) {
                _this.router.navigate(['/dashboard/doacao']);
            }
        });
    };
    DoacaoComponent.ctorParameters = function () { return [
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"] },
        { type: src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_4__["DoacaoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
    ]; };
    DoacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doacao',
            template: __webpack_require__(/*! raw-loader!./doacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/cadastros/doacao/doacao.component.html"),
            styles: [__webpack_require__(/*! ./doacao.component.scss */ "./src/app/cadastros/doacao/doacao.component.scss")]
        })
    ], DoacaoComponent);
    return DoacaoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/encontrado.service */ "./src/app/services/encontrado.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");








var EncontradoEditComponent = /** @class */ (function () {
    function EncontradoEditComponent(activatedRoute, autenticacaoService, encontradoService, router, mapsAPILoader, ngZone, formBuilder) {
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
    EncontradoEditComponent.prototype.createFormGroupWithBuilder = function (formBuilder) {
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
    };
    EncontradoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.encontradoId = this.activatedRoute.snapshot.params.id;
        this.getEncontrado(this.encontradoId);
        this.zoom = 12;
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            // this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    EncontradoEditComponent.prototype.onSubmit = function () {
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
    };
    EncontradoEditComponent.prototype.getEncontrado = function (id) {
        var _this = this;
        return this.encontradoService.getEncontradoById(id).then(function (encontrado) {
            _this.anuncioEncontrado = encontrado;
            _this.animal = _this.anuncioEncontrado.animal;
            _this.animal = _this.anuncioEncontrado.animal;
            _this.latitude = _this.anuncioEncontrado.lat;
            _this.longitude = _this.anuncioEncontrado.lng;
            _this.anuncioForm.controls.tipo.setValue(_this.anuncioEncontrado.animal.tipo);
            _this.anuncioForm.controls.sexo.setValue(_this.anuncioEncontrado.animal.sexo);
            _this.anuncioForm.controls.porte.setValue(_this.anuncioEncontrado.animal.porte);
            _this.anuncioForm.controls.idade.setValue(_this.anuncioEncontrado.animal.idade);
            _this.anuncioForm.controls.nome.setValue(_this.anuncioEncontrado.animal.nome);
            _this.anuncioForm.controls.cor.setValue(_this.anuncioEncontrado.animal.cor);
            _this.anuncioForm.controls.raca.setValue(_this.anuncioEncontrado.animal.raca);
            _this.anuncioForm.controls.descricao.setValue(_this.anuncioEncontrado.animal.descricao);
            _this.anuncioForm.controls.resgatado.setValue(_this.anuncioEncontrado.resgatado.toString());
            if (_this.animal.usuario.id != _this.autenticacaoService.currentUserValue.id) {
                _this.router.navigate(['/']);
            }
        });
    };
    EncontradoEditComponent.prototype.addFiles = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            _this.files.set(element.name, element);
        });
        this.preview(fileInput);
    };
    EncontradoEditComponent.prototype.removeFile = function (fileName) {
        this.files.delete(fileName);
        this.previewUrl.delete(fileName);
        this.updateFileInput();
    };
    EncontradoEditComponent.prototype.removeExistingFile = function (fileName) {
        this.imgToDelete.push(fileName);
        this.removeElement(this.animal.imagens, fileName);
    };
    EncontradoEditComponent.prototype.preview = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            var mimeType = element.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(element);
            reader.onload = function (_event) {
                _this.previewUrl.set(element.name, reader.result);
            };
        });
    };
    EncontradoEditComponent.prototype.updateFileInput = function () {
        var e_1, _a;
        var input = document.getElementById("file");
        var list = new DataTransfer();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.files.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 1), value = _d[0];
                list.items.add(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var myFileList = list.files;
        input.files = myFileList;
    };
    EncontradoEditComponent.prototype.editaEncontrado = function () {
        var _this = this;
        this.formDataFiles = Array.from(this.files.values());
        var formData = new FormData();
        formData.append('value', JSON.stringify(this.anuncioEncontrado));
        this.formDataFiles.forEach(function (element) {
            formData.append('files', element);
        });
        this.imgToDelete.forEach(function (element) {
            formData.append('delete', element);
        });
        this.encontradoService.editEncontrado(formData).subscribe(function (data) {
            if (data.ok) {
                _this.router.navigate(['/dashboard/encontrado']);
            }
        });
    };
    EncontradoEditComponent.prototype.removeElement = function (array, elem) {
        var index = array.indexOf(elem);
        if (index > -1) {
            array.splice(index, 1);
        }
    };
    EncontradoEditComponent.prototype.markerDragEnd = function ($event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    };
    EncontradoEditComponent.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.zoom = 12;
                    _this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    // Get Current Location Coordinates
    EncontradoEditComponent.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 15;
            });
        }
    };
    EncontradoEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"] },
        { type: src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_3__["EncontradoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
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
    return EncontradoEditComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_model_anuncioEncontrado_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/anuncioEncontrado.model */ "./src/app/model/anuncioEncontrado.model.ts");
/* harmony import */ var src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/encontrado.service */ "./src/app/services/encontrado.service.ts");
/* harmony import */ var src_app_model_animal_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/animal.model */ "./src/app/model/animal.model.ts");
/* harmony import */ var src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/usuario.model */ "./src/app/model/usuario.model.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var EncontradoComponent = /** @class */ (function () {
    function EncontradoComponent(autenticacaoService, encontradoService, mapsAPILoader, ngZone, router, formBuilder) {
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
    EncontradoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.autenticacaoService.currentUserValue != null) {
            this.usuario = this.autenticacaoService.currentUserValue;
        }
        else {
            this.router.navigate(['/']);
        }
        this.setCurrentLocation();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    EncontradoComponent.prototype.createFormGroupWithBuilder = function (formBuilder) {
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
    };
    EncontradoComponent.prototype.onSubmit = function () {
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
    };
    EncontradoComponent.prototype.updateFileInput = function () {
        var e_1, _a;
        var input = document.getElementById("file");
        var list = new DataTransfer();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.files.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 1), value = _d[0];
                list.items.add(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var myFileList = list.files;
        input.files = myFileList;
    };
    EncontradoComponent.prototype.markerDragEnd = function ($event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    };
    EncontradoComponent.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.zoom = 12;
                    _this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    // Get Current Location Coordinates
    EncontradoComponent.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 15;
            });
        }
    };
    EncontradoComponent.prototype.addFiles = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            _this.files.set(element.name, element);
        });
        this.preview(fileInput);
    };
    EncontradoComponent.prototype.removeFile = function (fileName) {
        this.files.delete(fileName);
        this.previewUrl.delete(fileName);
        this.updateFileInput();
    };
    EncontradoComponent.prototype.preview = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            var mimeType = element.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(element);
            reader.onload = function (_event) {
                _this.previewUrl.set(element.name, reader.result);
            };
        });
    };
    EncontradoComponent.prototype.cadastrarEncontrado = function () {
        var _this = this;
        this.formDataFiles = Array.from(this.files.values());
        var formData = new FormData();
        formData.append('value', JSON.stringify(this.anuncioEncontrado));
        this.formDataFiles.forEach(function (element) {
            formData.append('files', element);
        });
        this.encontradoService.registerEncontrado(formData).subscribe(function (data) {
            if (data.ok) {
                _this.router.navigate(['/dashboard/encontrado']);
            }
        });
    };
    EncontradoComponent.ctorParameters = function () { return [
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
        { type: src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_4__["EncontradoService"] },
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }
    ]; };
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
    return EncontradoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/perdido.service */ "./src/app/services/perdido.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");








var PerdidoEditComponent = /** @class */ (function () {
    function PerdidoEditComponent(activatedRoute, autenticacaoService, perdidoService, router, mapsAPILoader, ngZone, formBuilder) {
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
    PerdidoEditComponent.prototype.createFormGroupWithBuilder = function (formBuilder) {
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
    };
    PerdidoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.perdidoId = this.activatedRoute.snapshot.params.id;
        this.getPerdido(this.perdidoId);
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    PerdidoEditComponent.prototype.onSubmit = function () {
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
    };
    PerdidoEditComponent.prototype.getPerdido = function (id) {
        var _this = this;
        return this.perdidoService.getPerdidoById(id).then(function (perdido) {
            _this.anuncioPerdido = perdido;
            _this.animal = _this.anuncioPerdido.animal;
            _this.animal = _this.anuncioPerdido.animal;
            _this.latitude = _this.anuncioPerdido.lat;
            _this.longitude = _this.anuncioPerdido.lng;
            _this.anuncioForm.controls.tipo.setValue(_this.anuncioPerdido.animal.tipo);
            _this.anuncioForm.controls.sexo.setValue(_this.anuncioPerdido.animal.sexo);
            _this.anuncioForm.controls.porte.setValue(_this.anuncioPerdido.animal.porte);
            _this.anuncioForm.controls.idade.setValue(_this.anuncioPerdido.animal.idade);
            _this.anuncioForm.controls.nome.setValue(_this.anuncioPerdido.animal.nome);
            _this.anuncioForm.controls.cor.setValue(_this.anuncioPerdido.animal.cor);
            _this.anuncioForm.controls.raca.setValue(_this.anuncioPerdido.animal.raca);
            if (_this.animal.usuario.id != _this.autenticacaoService.currentUserValue.id) {
                _this.router.navigate(['/']);
            }
        });
    };
    PerdidoEditComponent.prototype.addFiles = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            _this.files.set(element.name, element);
        });
        this.preview(fileInput);
    };
    PerdidoEditComponent.prototype.removeFile = function (fileName) {
        this.files.delete(fileName);
        this.previewUrl.delete(fileName);
        this.updateFileInput();
    };
    PerdidoEditComponent.prototype.removeExistingFile = function (fileName) {
        this.imgToDelete.push(fileName);
        this.removeElement(this.animal.imagens, fileName);
    };
    PerdidoEditComponent.prototype.preview = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            var mimeType = element.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(element);
            reader.onload = function (_event) {
                _this.previewUrl.set(element.name, reader.result);
            };
        });
    };
    PerdidoEditComponent.prototype.updateFileInput = function () {
        var e_1, _a;
        var input = document.getElementById("file");
        var list = new DataTransfer();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.files.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 1), value = _d[0];
                list.items.add(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var myFileList = list.files;
        input.files = myFileList;
    };
    PerdidoEditComponent.prototype.editaEncontrado = function () {
        var _this = this;
        this.formDataFiles = Array.from(this.files.values());
        var formData = new FormData();
        formData.append('value', JSON.stringify(this.anuncioPerdido));
        this.formDataFiles.forEach(function (element) {
            formData.append('files', element);
        });
        this.imgToDelete.forEach(function (element) {
            formData.append('delete', element);
        });
        this.perdidoService.editPerdido(formData).subscribe(function (data) {
            if (data.ok) {
                _this.router.navigate(['/dashboard/perdido']);
            }
        });
    };
    PerdidoEditComponent.prototype.removeElement = function (array, elem) {
        var index = array.indexOf(elem);
        if (index > -1) {
            array.splice(index, 1);
        }
    };
    PerdidoEditComponent.prototype.markerDragEnd = function ($event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    };
    PerdidoEditComponent.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.zoom = 12;
                    _this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    // Get Current Location Coordinates
    PerdidoEditComponent.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 15;
            });
        }
    };
    PerdidoEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"] },
        { type: src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_2__["PerdidoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
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
    return PerdidoEditComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_anuncioPerdido_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/anuncioPerdido.model */ "./src/app/model/anuncioPerdido.model.ts");
/* harmony import */ var src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/perdido.service */ "./src/app/services/perdido.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_model_animal_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/animal.model */ "./src/app/model/animal.model.ts");
/* harmony import */ var src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/usuario.model */ "./src/app/model/usuario.model.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var PerdidoComponent = /** @class */ (function () {
    function PerdidoComponent(autenticacaoService, perdidoService, mapsAPILoader, ngZone, router, formBuilder) {
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
    PerdidoComponent.prototype.createFormGroupWithBuilder = function (formBuilder) {
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
    };
    PerdidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.autenticacaoService.currentUserValue != null) {
            this.usuario = this.autenticacaoService.currentUserValue;
        }
        else {
            this.router.navigate(['/']);
        }
        this.setCurrentLocation();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    PerdidoComponent.prototype.onSubmit = function () {
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
    };
    PerdidoComponent.prototype.updateFileInput = function () {
        var e_1, _a;
        var input = document.getElementById("file");
        var list = new DataTransfer();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.files.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 1), value = _d[0];
                list.items.add(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var myFileList = list.files;
        input.files = myFileList;
    };
    PerdidoComponent.prototype.markerDragEnd = function ($event) {
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    };
    PerdidoComponent.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.zoom = 12;
                    _this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    // Get Current Location Coordinates
    PerdidoComponent.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 15;
            });
        }
    };
    PerdidoComponent.prototype.addFiles = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            _this.files.set(element.name, element);
        });
        this.preview(fileInput);
    };
    PerdidoComponent.prototype.removeFile = function (fileName) {
        this.files.delete(fileName);
        this.previewUrl.delete(fileName);
        this.updateFileInput();
    };
    PerdidoComponent.prototype.preview = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            var mimeType = element.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(element);
            reader.onload = function (_event) {
                _this.previewUrl.push(reader.result);
            };
        });
    };
    PerdidoComponent.prototype.cadastrarPerdido = function () {
        var _this = this;
        this.formDataFiles = Array.from(this.files.values());
        this.anuncioPerdido.lat = this.latitude;
        this.anuncioPerdido.lng = this.longitude;
        var formData = new FormData();
        formData.append('value', JSON.stringify(this.anuncioPerdido));
        this.formDataFiles.forEach(function (element) {
            formData.append('files', element);
        });
        this.perdidoService.registerPerdido(formData).subscribe(function (data) {
            if (data.ok) {
                _this.router.navigate(['/dashboard/perdido']);
            }
        });
    };
    PerdidoComponent.ctorParameters = function () { return [
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"] },
        { type: src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_3__["PerdidoService"] },
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }
    ]; };
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
    return PerdidoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/usuario.model */ "./src/app/model/usuario.model.ts");







var UsuarioEditComponent = /** @class */ (function () {
    function UsuarioEditComponent(usuarioService, autenticacaoService, router, formBuilder) {
        this.usuarioService = usuarioService;
        this.autenticacaoService = autenticacaoService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.usuario = new src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_6__["Usuario"];
        this.previewUrl = [];
        this.usuarioForm = this.createFormGroupWithBuilder(this.formBuilder);
    }
    UsuarioEditComponent.prototype.ngOnInit = function () {
        this.getUsuario(this.autenticacaoService.currentUserValue.id);
        if (this.autenticacaoService.currentUserValue == null || this.autenticacaoService.currentUserValue.authdata == null) {
            this.router.navigate(['/']);
        }
    };
    UsuarioEditComponent.prototype.getUsuario = function (id) {
        var _this = this;
        return this.usuarioService.getUserById(id).then(function (user) {
            _this.usuario = user;
            _this.usuarioForm.controls.nome.setValue(_this.usuario.nome);
            _this.usuarioForm.controls.email.setValue(_this.usuario.email);
            _this.usuarioForm.controls.telefone.setValue(_this.usuario.telefone);
            _this.usuarioForm.controls.celular.setValue(_this.usuario.celular);
        });
    };
    UsuarioEditComponent.prototype.createFormGroupWithBuilder = function (formBuilder) {
        return formBuilder.group({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            celular: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            telefone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            senha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    UsuarioEditComponent.prototype.onSubmit = function () {
        this.usuario.nome = this.usuarioForm.value.nome;
        this.usuario.email = this.usuarioForm.value.email;
        this.usuario.celular = this.usuarioForm.value.celular;
        this.usuario.telefone = this.usuarioForm.value.telefone;
        var token = window.btoa(this.autenticacaoService.currentUserValue.email + ':' + this.usuarioForm.value.senha);
        if (this.usuarioForm.invalid) {
            return;
        }
        if (token != this.autenticacaoService.currentUserValue.authdata) {
            return;
        }
        else {
            this.editarUsuario();
        }
    };
    UsuarioEditComponent.prototype.fileProgress = function (fileInput) {
        this.fileData = fileInput.target.files[0];
        this.preview(fileInput);
    };
    UsuarioEditComponent.prototype.preview = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            var mimeType = element.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(element);
            reader.onload = function (_event) {
                _this.previewUrl.push(reader.result);
            };
        });
    };
    UsuarioEditComponent.prototype.removeFile = function () {
        this.previewUrl = [];
        this.fileData = null;
        this.myInputVariable.nativeElement.value = "";
        return false;
    };
    UsuarioEditComponent.prototype.editarUsuario = function () {
        var formData = new FormData();
        formData.append('value', JSON.stringify(this.usuario));
        formData.append('file', this.fileData);
        this.usuarioService.registerUser(formData);
    };
    UsuarioEditComponent.ctorParameters = function () { return [
        { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
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
    return UsuarioEditComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_usuario_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/usuario.model */ "./src/app/model/usuario.model.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




// import { Prestador } from 'src/app/model/prestador.model';
// import { PrestadorService } from 'src/app/services/prestador.service';



var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(usuarioService, 
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
    UsuarioComponent.prototype.ngOnInit = function () {
        if (this.autenticacaoService.currentUserValue !== null && this.autenticacaoService.currentUserValue.authdata !== null) {
            this.router.navigate(['/']);
        }
    };
    UsuarioComponent.prototype.createFormGroupWithBuilder = function (formBuilder) {
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
    };
    UsuarioComponent.prototype.MustMatch = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
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
    };
    UsuarioComponent.prototype.onSubmit = function () {
        this.usuario.nome = this.usuarioForm.value.nome;
        this.usuario.email = this.usuarioForm.value.email;
        this.usuario.celular = this.usuarioForm.value.celular;
        this.usuario.telefone = this.usuarioForm.value.telefone;
        this.usuario.senha = this.usuarioForm.value.senha;
        if (this.usuarioForm.invalid) {
            return;
        }
        this.cadastrarUsuario();
    };
    UsuarioComponent.prototype.fileProgress = function (fileInput) {
        this.fileData = fileInput.target.files[0];
        this.preview(fileInput);
    };
    // fileProgressPrestador(fileInput: any) {
    //   this.filePrestador = <File>fileInput.target.files[0];
    //   this.preview(fileInput);
    // }
    UsuarioComponent.prototype.preview = function (fileInput) {
        var _this = this;
        var arr = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fileInput.target.files);
        arr.forEach(function (element) {
            var mimeType = element.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(element);
            reader.onload = function (_event) {
                _this.previewUrl.push(reader.result);
            };
        });
    };
    UsuarioComponent.prototype.removeFile = function () {
        this.previewUrl = [];
        this.fileData = null;
        this.filePrestador = null;
        this.myInputVariable.nativeElement.value = "";
        return false;
    };
    UsuarioComponent.prototype.cadastrarUsuario = function () {
        var formData = new FormData();
        formData.append('value', JSON.stringify(this.usuario));
        formData.append('file', this.fileData);
        this.usuarioService.registerUser(formData);
    };
    UsuarioComponent.ctorParameters = function () { return [
        { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
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
    return UsuarioComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");
/* harmony import */ var src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/doacao.service */ "./src/app/services/doacao.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CardDoacaoComponent = /** @class */ (function () {
    function CardDoacaoComponent(sanitizer, doacaoService, authService, router) {
        this.sanitizer = sanitizer;
        this.doacaoService = doacaoService;
        this.authService = authService;
        this.router = router;
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl;
    }
    CardDoacaoComponent.prototype.ngOnInit = function () {
        this.style = "url(" + this.url + "arquivo/doacao/" + this.doacao.id + "/" + this.doacao.animal.imagens[0] + ")";
    };
    CardDoacaoComponent.prototype.sanitizeImage = function (id, file) {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + src_app_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + 'arquivo/doacao/' + id + '/' + file + ")");
    };
    CardDoacaoComponent.prototype.removeDoacao = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('userId', this.authService.currentUserValue.id.toString());
        this.doacaoService.removeDoacao(this.doacao.id, formData).subscribe(function (data) {
            if (data.ok) {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    CardDoacaoComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_4__["DoacaoService"] },
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
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
    return CardDoacaoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");
/* harmony import */ var src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/encontrado.service */ "./src/app/services/encontrado.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");







var CardEncontradoComponent = /** @class */ (function () {
    function CardEncontradoComponent(sanitizer, encontradoService, authService, router) {
        this.sanitizer = sanitizer;
        this.encontradoService = encontradoService;
        this.authService = authService;
        this.router = router;
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl;
    }
    CardEncontradoComponent.prototype.ngOnInit = function () {
        this.style = "url(" + this.url + "arquivo/encontrado/" + this.encontrado.id + "/" + this.encontrado.animal.imagens[0] + ")";
    };
    CardEncontradoComponent.prototype.sanitizeImage = function (id, file) {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + src_app_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + 'arquivo/encontrado/' + id + '/' + file + ")");
    };
    CardEncontradoComponent.prototype.removeEncontrado = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('userId', this.authService.currentUserValue.id.toString());
        this.encontradoService.removeEncontrado(this.encontrado.id, formData).subscribe(function (data) {
            if (data.ok) {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    CardEncontradoComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_4__["EncontradoService"] },
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
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
    return CardEncontradoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");
/* harmony import */ var src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/perdido.service */ "./src/app/services/perdido.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CardPerdidoComponent = /** @class */ (function () {
    function CardPerdidoComponent(sanitizer, perdidoService, authService, router) {
        this.sanitizer = sanitizer;
        this.perdidoService = perdidoService;
        this.authService = authService;
        this.router = router;
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl;
    }
    CardPerdidoComponent.prototype.ngOnInit = function () {
        this.style = "url(" + this.url + "arquivo/perdido/" + this.perdido.id + "/" + this.perdido.animal.imagens[0] + ")";
    };
    CardPerdidoComponent.prototype.sanitizeImage = function (id, file) {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + src_app_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + 'arquivo/perdido/' + id + '/' + file + ")");
    };
    CardPerdidoComponent.prototype.removePerdido = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('userId', this.authService.currentUserValue.id.toString());
        this.perdidoService.removePerdido(this.perdido.id, formData).subscribe(function (data) {
            if (data.ok) {
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    CardPerdidoComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_4__["PerdidoService"] },
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
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
    return CardPerdidoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.usuarioId = this.authService.currentUserValue.id;
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/doacao.service */ "./src/app/services/doacao.service.ts");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");





var DetalheDoacaoComponent = /** @class */ (function () {
    function DetalheDoacaoComponent(activatedRoute, doacaoService) {
        this.activatedRoute = activatedRoute;
        this.doacaoService = doacaoService;
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_4__["Global"].baseUrl;
    }
    DetalheDoacaoComponent.prototype.ngOnInit = function () {
        this.doacaoId = this.activatedRoute.snapshot.params.id;
        this.getDoacao(this.doacaoId);
    };
    DetalheDoacaoComponent.prototype.getDoacao = function (id) {
        var _this = this;
        return this.doacaoService.getDoacaoById(id).then(function (doacao) {
            _this.doacao = doacao;
        });
    };
    DetalheDoacaoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_3__["DoacaoService"] }
    ]; };
    DetalheDoacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalhe-doacao',
            template: __webpack_require__(/*! raw-loader!./detalhe-doacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/detalhes/detalhe-doacao/detalhe-doacao.component.html"),
            styles: [__webpack_require__(/*! ./detalhe-doacao.component.scss */ "./src/app/detalhes/detalhe-doacao/detalhe-doacao.component.scss")]
        })
    ], DetalheDoacaoComponent);
    return DetalheDoacaoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/encontrado.service */ "./src/app/services/encontrado.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");





var DetalheEncontradoComponent = /** @class */ (function () {
    function DetalheEncontradoComponent(activatedRoute, encontradoService) {
        this.activatedRoute = activatedRoute;
        this.encontradoService = encontradoService;
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_4__["Global"].baseUrl;
    }
    DetalheEncontradoComponent.prototype.ngOnInit = function () {
        this.encontradoId = this.activatedRoute.snapshot.params.id;
        this.getEncontrado(this.encontradoId);
        this.centerZoom = 15;
    };
    DetalheEncontradoComponent.prototype.getEncontrado = function (id) {
        var _this = this;
        return this.encontradoService.getEncontradoById(id).then(function (encontrado) {
            _this.encontrado = encontrado;
        });
    };
    DetalheEncontradoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_2__["EncontradoService"] }
    ]; };
    DetalheEncontradoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalhe-encontrado',
            template: __webpack_require__(/*! raw-loader!./detalhe-encontrado.component.html */ "./node_modules/raw-loader/index.js!./src/app/detalhes/detalhe-encontrado/detalhe-encontrado.component.html"),
            styles: [__webpack_require__(/*! ./detalhe-encontrado.component.scss */ "./src/app/detalhes/detalhe-encontrado/detalhe-encontrado.component.scss")]
        })
    ], DetalheEncontradoComponent);
    return DetalheEncontradoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/perdido.service */ "./src/app/services/perdido.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");





var DetalhePerdidoComponent = /** @class */ (function () {
    function DetalhePerdidoComponent(activatedRoute, perdidoService) {
        this.activatedRoute = activatedRoute;
        this.perdidoService = perdidoService;
        this.url = src_app_global__WEBPACK_IMPORTED_MODULE_4__["Global"].baseUrl;
    }
    DetalhePerdidoComponent.prototype.ngOnInit = function () {
        this.centerZoom = 15;
        this.perdidoId = this.activatedRoute.snapshot.params.id;
        this.getPerdido(this.perdidoId);
    };
    DetalhePerdidoComponent.prototype.getPerdido = function (id) {
        var _this = this;
        return this.perdidoService.getPerdidoById(id).then(function (perdido) {
            _this.perdido = perdido;
            (_this.perdido);
        });
    };
    DetalhePerdidoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_2__["PerdidoService"] }
    ]; };
    DetalhePerdidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalhe-perdido',
            template: __webpack_require__(/*! raw-loader!./detalhe-perdido.component.html */ "./node_modules/raw-loader/index.js!./src/app/detalhes/detalhe-perdido/detalhe-perdido.component.html"),
            styles: [__webpack_require__(/*! ./detalhe-perdido.component.scss */ "./src/app/detalhes/detalhe-perdido/detalhe-perdido.component.scss")]
        })
    ], DetalhePerdidoComponent);
    return DetalhePerdidoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(autenticacaoService, router) {
        this.autenticacaoService = autenticacaoService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.errorAlert = false;
        this.usuario = this.autenticacaoService.currentUserValue;
    };
    HeaderComponent.prototype.logout = function () {
        this.autenticacaoService.logout();
    };
    HeaderComponent.prototype.login = function () {
        var _this = this;
        this.autenticacaoService.login(this.formLoginEmail, this.formLoginSenha).subscribe(function (data) {
            if (data == null) {
                _this.errorAlert = true;
            }
            else {
                window.location.reload();
            }
        }, function (error) {
            _this.errorAlert = true;
        });
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, autenticacaoService) {
        this.router = router;
        this.autenticacaoService = autenticacaoService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.autenticacaoService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/novo-usuario'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthGuard);
    return AuthGuard;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");



var BasicAuthInterceptor = /** @class */ (function () {
    function BasicAuthInterceptor(autenticacaoService) {
        this.autenticacaoService = autenticacaoService;
    }
    BasicAuthInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with basic auth credentials if available
        var currentUser = this.autenticacaoService.currentUserValue;
        if (currentUser && currentUser.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Basic " + currentUser.authdata
                }
            });
        }
        return next.handle(request);
    };
    BasicAuthInterceptor.ctorParameters = function () { return [
        { type: _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] }
    ]; };
    BasicAuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BasicAuthInterceptor);
    return BasicAuthInterceptor;
}());



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
var CUSTOM_ERRORS = [
    {
        error: "required",
        format: requiredFormat
    }, {
        error: "email",
        format: emailFormat
    }
];
function requiredFormat(label, error) {
    return label + " \u00E9 obrigat\u00F3rio.";
}
function emailFormat(label, error) {
    return label + " doesn't look like a valid email address.";
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(autenticacaoService) {
        this.autenticacaoService = autenticacaoService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.autenticacaoService.logout();
                // location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
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
                throw new Error("Unable to bypass security for invalid type: " + type);
        }
    };
    SafePipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        })
    ], SafePipe);
    return SafePipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(autenticacaoService, router) {
        this.autenticacaoService = autenticacaoService;
        this.router = router;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.errorAlert = false;
        if (this.autenticacaoService.currentUserValue.authdata !== null) {
            this.router.navigate(['/']);
        }
    };
    LandingPageComponent.prototype.login = function () {
        var _this = this;
        this.autenticacaoService.login(this.formLoginEmail, this.formLoginSenha).subscribe(function (data) {
            if (data == null) {
                _this.errorAlert = true;
            }
            else {
                window.location.reload();
            }
        }, function (error) {
            _this.errorAlert = true;
        });
    };
    LandingPageComponent.ctorParameters = function () { return [
        { type: _services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/landing-page/landing-page.component.scss")]
        })
    ], LandingPageComponent);
    return LandingPageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/doacao.service */ "./src/app/services/doacao.service.ts");




var ListagemDoacaoComponent = /** @class */ (function () {
    function ListagemDoacaoComponent(autenticacaoService, doacaoService) {
        this.autenticacaoService = autenticacaoService;
        this.doacaoService = doacaoService;
        this.labels = {
            previousLabel: 'Anterior',
            nextLabel: 'Próxima',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: "You're on page"
        };
    }
    ListagemDoacaoComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListagemDoacaoComponent.prototype.ngOnInit = function () {
        this.listaDoacoesGeral();
    };
    ListagemDoacaoComponent.prototype.listaDoacoesGeral = function () {
        var _this = this;
        this.doacaoService.getDoacoesGeral().subscribe(function (data) {
            if (data.content.length > 0) {
                _this.doacoes = data.content;
                _this.config = {
                    itemsPerPage: 10,
                    currentPage: data.pageable.pageNumber,
                    totalItems: data.totalElements
                };
            }
        });
    };
    ListagemDoacaoComponent.ctorParameters = function () { return [
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
        { type: src_app_services_doacao_service__WEBPACK_IMPORTED_MODULE_3__["DoacaoService"] }
    ]; };
    ListagemDoacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listagem-doacao',
            template: __webpack_require__(/*! raw-loader!./listagem-doacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/listagem/listagem-doacao/listagem-doacao.component.html"),
            styles: [__webpack_require__(/*! ./listagem-doacao.component.scss */ "./src/app/listagem/listagem-doacao/listagem-doacao.component.scss")]
        })
    ], ListagemDoacaoComponent);
    return ListagemDoacaoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/encontrado.service */ "./src/app/services/encontrado.service.ts");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");




var ListagemEncontradoComponent = /** @class */ (function () {
    function ListagemEncontradoComponent(autenticacaoService, encontradosService) {
        this.autenticacaoService = autenticacaoService;
        this.encontradosService = encontradosService;
        this.labels = {
            previousLabel: 'Anterior',
            nextLabel: 'Próxima',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: "You're on page"
        };
    }
    ListagemEncontradoComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListagemEncontradoComponent.prototype.ngOnInit = function () {
        this.listaEncontradoGeral();
    };
    ListagemEncontradoComponent.prototype.listaEncontradoGeral = function () {
        var _this = this;
        this.encontradosService.getEncontradosGeral().subscribe(function (data) {
            if (data.content.length > 0) {
                _this.encontrados = data.content;
                _this.config = {
                    itemsPerPage: 10,
                    currentPage: data.pageable.pageNumber,
                    totalItems: data.totalElements
                };
            }
        });
    };
    ListagemEncontradoComponent.ctorParameters = function () { return [
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"] },
        { type: src_app_services_encontrado_service__WEBPACK_IMPORTED_MODULE_2__["EncontradoService"] }
    ]; };
    ListagemEncontradoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listagem-encontrado',
            template: __webpack_require__(/*! raw-loader!./listagem-encontrado.component.html */ "./node_modules/raw-loader/index.js!./src/app/listagem/listagem-encontrado/listagem-encontrado.component.html"),
            styles: [__webpack_require__(/*! ./listagem-encontrado.component.scss */ "./src/app/listagem/listagem-encontrado/listagem-encontrado.component.scss")]
        })
    ], ListagemEncontradoComponent);
    return ListagemEncontradoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenticacao.service */ "./src/app/services/autenticacao.service.ts");
/* harmony import */ var src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/perdido.service */ "./src/app/services/perdido.service.ts");




var ListagemPerdidoComponent = /** @class */ (function () {
    function ListagemPerdidoComponent(autenticacaoService, perdidoService) {
        this.autenticacaoService = autenticacaoService;
        this.perdidoService = perdidoService;
        this.labels = {
            previousLabel: 'Anterior',
            nextLabel: 'Próxima',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: "You're on page"
        };
    }
    ListagemPerdidoComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListagemPerdidoComponent.prototype.ngOnInit = function () {
        this.listaEncontradoGeral();
    };
    ListagemPerdidoComponent.prototype.listaEncontradoGeral = function () {
        var _this = this;
        this.perdidoService.getPerdidosGeral().subscribe(function (data) {
            if (data.content.length > 0) {
                _this.perdidos = data.content;
                _this.config = {
                    itemsPerPage: 10,
                    currentPage: data.pageable.pageNumber,
                    totalItems: data.totalElements
                };
            }
        });
    };
    ListagemPerdidoComponent.ctorParameters = function () { return [
        { type: src_app_services_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"] },
        { type: src_app_services_perdido_service__WEBPACK_IMPORTED_MODULE_3__["PerdidoService"] }
    ]; };
    ListagemPerdidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listagem-perdido',
            template: __webpack_require__(/*! raw-loader!./listagem-perdido.component.html */ "./node_modules/raw-loader/index.js!./src/app/listagem/listagem-perdido/listagem-perdido.component.html"),
            styles: [__webpack_require__(/*! ./listagem-perdido.component.scss */ "./src/app/listagem/listagem-perdido/listagem-perdido.component.scss")]
        })
    ], ListagemPerdidoComponent);
    return ListagemPerdidoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_doacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/doacao.service */ "./src/app/services/doacao.service.ts");



var MainComponent = /** @class */ (function () {
    function MainComponent(doacaoService) {
        this.doacaoService = doacaoService;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.listaDoacoesGeral();
    };
    MainComponent.prototype.listaDoacoesGeral = function () {
        var _this = this;
        this.doacaoService.getDoacoesGeral(0, 3).subscribe(function (data) {
            if (data.content.length > 0) {
                _this.doacoes = data.content;
            }
        });
    };
    MainComponent.ctorParameters = function () { return [
        { type: _services_doacao_service__WEBPACK_IMPORTED_MODULE_2__["DoacaoService"] }
    ]; };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        })
    ], MainComponent);
    return MainComponent;
}());



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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());



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
var Anuncio = /** @class */ (function () {
    function Anuncio() {
    }
    return Anuncio;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _anuncio_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anuncio.model */ "./src/app/model/anuncio.model.ts");


var AnuncioDoacao = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnuncioDoacao, _super);
    function AnuncioDoacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AnuncioDoacao;
}(_anuncio_model__WEBPACK_IMPORTED_MODULE_1__["Anuncio"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _anuncio_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anuncio.model */ "./src/app/model/anuncio.model.ts");


var AnuncioEncontrado = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnuncioEncontrado, _super);
    function AnuncioEncontrado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AnuncioEncontrado;
}(_anuncio_model__WEBPACK_IMPORTED_MODULE_1__["Anuncio"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _anuncio_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anuncio.model */ "./src/app/model/anuncio.model.ts");


var AnuncioPerdido = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnuncioPerdido, _super);
    function AnuncioPerdido() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AnuncioPerdido;
}(_anuncio_model__WEBPACK_IMPORTED_MODULE_1__["Anuncio"]));



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
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AutenticacaoService = /** @class */ (function () {
    function AutenticacaoService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AutenticacaoService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AutenticacaoService.prototype.login = function (username, password) {
        var _this = this;
        var token = window.btoa(username + ':' + password);
        var formData = new FormData;
        formData.append('token', token);
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_4__["Global"].baseUrl + "usuario/autenticar", formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            if (user != null) {
                var usuario = user;
                // login successful if there's a jwt token in the response
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                usuario.authdata = token;
                localStorage.setItem('currentUser', JSON.stringify(usuario));
                _this.currentUserSubject.next(usuario);
            }
            return usuario;
        }));
    };
    AutenticacaoService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AutenticacaoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AutenticacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AutenticacaoService);
    return AutenticacaoService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DoacaoService = /** @class */ (function () {
    function DoacaoService(httpClient) {
        this.httpClient = httpClient;
    }
    DoacaoService.prototype.registerDoacao = function (formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "doacao/upload", formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    DoacaoService.prototype.getDoacoesGeral = function (page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 12; }
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "doacao?page=" + page + "&size=" + size, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (page) { return page; }));
    };
    DoacaoService.prototype.getDoacaoById = function (id) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "doacao/" + id, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (doacao) { return doacao; })).toPromise();
    };
    DoacaoService.prototype.getDoacoesByUser = function (id, page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 12; }
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "doacao/porUsuario/" + id + "?page=" + page + "&size=" + size, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (page) { return page; }));
    };
    DoacaoService.prototype.editDoacao = function (formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "doacao/edit", formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    DoacaoService.prototype.removeDoacao = function (id, formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "doacao/delete/" + id, formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    DoacaoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DoacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DoacaoService);
    return DoacaoService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var EncontradoService = /** @class */ (function () {
    function EncontradoService(httpClient) {
        this.httpClient = httpClient;
    }
    EncontradoService.prototype.registerEncontrado = function (formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "encontrado/upload", formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    EncontradoService.prototype.getEncontradosGeral = function (page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 12; }
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "encontrado?page=" + page + "&size=" + size, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (page) { return page; }));
    };
    EncontradoService.prototype.getEncontradoById = function (id) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "encontrado/" + id, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (encontrado) { return encontrado; })).toPromise();
    };
    EncontradoService.prototype.getEncontradosByUser = function (id, page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 12; }
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "encontrado/porUsuario/" + id + "?page=" + page + "&size=" + size, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (page) { return page; }));
    };
    EncontradoService.prototype.editEncontrado = function (formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "encontrado/edit", formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    EncontradoService.prototype.removeEncontrado = function (id, formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "encontrado/delete/" + id, formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    EncontradoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EncontradoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EncontradoService);
    return EncontradoService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var PerdidoService = /** @class */ (function () {
    function PerdidoService(httpClient) {
        this.httpClient = httpClient;
    }
    PerdidoService.prototype.registerPerdido = function (formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].baseUrl + "perdido/upload", formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    PerdidoService.prototype.getPerdidosGeral = function (page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 12; }
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].baseUrl + "perdido?page=" + page + "&size=" + size, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (page) { return page; }));
    };
    PerdidoService.prototype.getPerdidoById = function (id) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].baseUrl + "perdido/" + id, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (Perdido) { return Perdido; })).toPromise();
    };
    PerdidoService.prototype.getPerdidosByUser = function (id, page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 12; }
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].baseUrl + "perdido/porUsuario/" + id + "?page=" + page + "&size=" + size, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (page) { return page; }));
    };
    PerdidoService.prototype.editPerdido = function (formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].baseUrl + "perdido/edit", formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    PerdidoService.prototype.removePerdido = function (id, formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].baseUrl + "perdido/delete/" + id, formData, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    PerdidoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    PerdidoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PerdidoService);
    return PerdidoService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UsuarioService = /** @class */ (function () {
    function UsuarioService(httpClient) {
        this.httpClient = httpClient;
    }
    UsuarioService.prototype.registerUser = function (formData) {
        return this.httpClient.post(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "usuario/upload", formData, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data; }));
    };
    UsuarioService.prototype.getUserById = function (id) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "usuario/" + id, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (usuario) { return usuario; })).toPromise();
    };
    UsuarioService.prototype.getUserByEmail = function (email) {
        return this.httpClient.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].baseUrl + "usuario/poremail/" + email, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (usuario) { return usuario; })).toPromise();
    };
    UsuarioService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UsuarioService);
    return UsuarioService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zone.js */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map