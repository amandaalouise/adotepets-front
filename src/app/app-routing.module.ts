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


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LandingPageComponent},
  {path: 'nova-doacao', component: DoacaoComponent},
  {path: 'novo-encontrado', component: EncontradoComponent},
  {path: 'novo-perdido', component: PerdidoComponent},
  {path: 'novo-usuario', component: UsuarioComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'listagem-doacao', component: ListagemDoacaoComponent},
  {path: 'doacao/:id', component: DetalheDoacaoComponent},
  {path: 'encontrado/:id', component: DetalheEncontradoComponent},
  {path: 'perdido/:id', component: DetalhePerdidoComponent}
  // {path: 'login', component: LoginComponent},
  // {path: 'recuperar-senha', component: RecuperarSenhaComponent},
  // {path: 'cadastrar-senha/:codigo', component: CadastrarSenhaComponent},
  // {
  //   path: '',
  //   component: DashboardViewComponent,
  //   canActivate: [AuthenticationService],
  //   children: [
  //     {
  //       path: '', redirectTo: 'cadastros', pathMatch: 'full',
  //     },
  //     {
  //       path: 'cadastros',
  //       component: CadastrosViewComponent,
  //       canActivate: [CadastrosViewComponent],
  //       children: [
  //         {
  //           path: '', redirectTo: 'etapas', pathMatch: 'full',
  //         },
  //         {
  //           path: 'etapas', component: EtapaViewComponent,
  //           canActivate: [EtapaViewComponent],
  //           children: [
  //             {path: 'get', redirectTo: '', pathMatch: 'full'},
  //             {path: '', component: ConsultarEtapasComponent},
  //             {path: 'adicionar', component: InserirEtapaComponent},
  //             {path: 'editar/:id', component: AlterarEtapaComponent},
  //             {path: ':id/editar', component: AlterarEtapaComponent},
  //             {path: ':id', component: VisualizarEtapaComponent}
  //           ]
  //         },
  //         {
  //           path: 'graduacoes', component: GraduacaoViewComponent,
  //           canActivate: [GraduacaoViewComponent],
  //           children: [
  //             {path: 'get', redirectTo: '', pathMatch: 'full'},
  //             {path: '', component: ConsultarGraduacoesComponent},
  //             {path: 'adicionar', component: InserirGraduacaoComponent},
  //             {path: 'editar/:id', component: AlterarGraduacaoComponent},
  //             {path: ':id/editar', component: AlterarGraduacaoComponent},
  //             {path: ':id', component: VisualizarGraduacaoComponent}
  //           ]
  //         },
  //         {
  //           path: 'ramos-atuacao', component: RamoAtuacaoViewComponent,
  //           canActivate: [RamoAtuacaoViewComponent],
  //           children: [
  //             {path: 'get', redirectTo: '', pathMatch: 'full'},
  //             {path: '', component: ConsultarRamosAtuacaoComponent},
  //             {path: 'adicionar', component: InserirRamoAtuacaoComponent},
  //             {path: 'editar/:id', component: AlterarRamoAtuacaoComponent},
  //             {path: ':id/editar', component: AlterarRamoAtuacaoComponent},
  //             {path: ':id', component: VisualizarRamoAtuacaoComponent}
  //           ]
  //         },
  //         {
  //           path: 'observacoes', component: ObservacaoViewComponent,
  //           children: [
  //             {path: 'get', redirectTo: '', pathMatch: 'full'},
  //             {path: '', component: ConsultarObservacoesComponent},
  //             {path: 'adicionar', component: InserirObservacaoComponent},
  //             {path: 'editar/:id', component: AlterarObservacaoComponent},
  //             {path: ':id/editar', component: AlterarObservacaoComponent},
  //             {path: ':id', component: VisualizarObservacaoComponent}
  //           ]
  //         }
  //       ]
  //     },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
