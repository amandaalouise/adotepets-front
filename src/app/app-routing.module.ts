import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ListagemEncontradoComponent } from './listagem/listagem-encontrado/listagem-encontrado.component';
import { ListagemPerdidoComponent } from './listagem/listagem-perdido/listagem-perdido.component';
import { AnuncioLandingComponent } from './anuncios/anuncio-landing/anuncio-landing.component';
import { AnuncioDoacaoComponent } from './anuncios/anuncio-doacao/anuncio-doacao.component';
import { AnuncioEncontradoComponent } from './anuncios/anuncio-encontrado/anuncio-encontrado.component';
import { DoacaoEditComponent } from './cadastros/doacao-edit/doacao-edit.component';
import { AnuncioPerdidoComponent } from './anuncios/anuncio-perdido/anuncio-perdido.component';
import { PerdidoEditComponent } from './cadastros/perdido-edit/perdido-edit.component';
import { EncontradoEditComponent } from './cadastros/encontrado-edit/encontrado-edit.component';
import { UsuarioEditComponent } from './cadastros/usuario-edit/usuario-edit.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LandingPageComponent},
  {path: 'nova-doacao', component: DoacaoComponent},
  {path: 'novo-encontrado', component: EncontradoComponent},
  {path: 'novo-perdido', component: PerdidoComponent},
  {path: 'novo-usuario', component: UsuarioComponent},
  {path: 'listagem-doacao', component: ListagemDoacaoComponent},
  {path: 'listagem-encontrado', component: ListagemEncontradoComponent},
  {path: 'listagem-perdido', component: ListagemPerdidoComponent},
  {path: 'doacao/:id', component: DetalheDoacaoComponent},
  {path: 'encontrado/:id', component: DetalheEncontradoComponent},
  {path: 'perdido/:id', component: DetalhePerdidoComponent},
  {
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard],
    children: [
      {path: '', component: AnuncioLandingComponent },
      {path: 'doacao', component: AnuncioDoacaoComponent },
      {path: 'encontrado', component: AnuncioEncontradoComponent},
      {path: 'perdido', component: AnuncioPerdidoComponent},
      {path: 'editar-usuario/:id', component: UsuarioEditComponent}
    ]
  },
  {path: 'editar-doacao/:id', component: DoacaoEditComponent},
  {path: 'editar-perdido/:id', component: PerdidoEditComponent},
  {path: 'editar-encontrado/:id', component: EncontradoEditComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
