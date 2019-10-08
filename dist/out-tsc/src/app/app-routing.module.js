import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main/main.component';
import { DoacaoComponent } from './cadastros/doacao/doacao.component';
import { EncontradoComponent } from './cadastros/encontrado/encontrado.component';
import { PerdidoComponent } from './cadastros/perdido/perdido.component';
import { UsuarioComponent } from './cadastros/usuario/usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './helpers/auth.guard';
import { ListagemDoacaoComponent } from './listagem/listagem-doacao/listagem-doacao.component';
import { DetalheDoacaoComponent } from './detalhes/detalhe-doacao/detalhe-doacao.component';
import { DetalhePerdidoComponent } from './detalhes/detalhe-perdido/detalhe-perdido.component';
import { DetalheEncontradoComponent } from './detalhes/detalhe-encontrado/detalhe-encontrado.component';
const routes = [
    { path: '', component: MainComponent },
    { path: 'login', component: LandingPageComponent },
    { path: 'nova-doacao', component: DoacaoComponent },
    { path: 'novo-encontrado', component: EncontradoComponent },
    { path: 'novo-perdido', component: PerdidoComponent },
    { path: 'novo-usuario', component: UsuarioComponent },
    { path: 'listagem-doacao', component: ListagemDoacaoComponent },
    { path: 'doacao/:id', component: DetalheDoacaoComponent },
    { path: 'encontrado/:id', component: DetalheEncontradoComponent },
    { path: 'perdido/:id', component: DetalhePerdidoComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map