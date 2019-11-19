import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UsuarioComponent } from './cadastros/usuario/usuario.component';
import { DoacaoComponent } from './cadastros/doacao/doacao.component';
import { EncontradoComponent } from './cadastros/encontrado/encontrado.component';
import { PerdidoComponent } from './cadastros/perdido/perdido.component';
import { AnuncioDoacaoComponent } from './anuncios/anuncio-doacao/anuncio-doacao.component';
import { AnuncioPerdidoComponent } from './anuncios/anuncio-perdido/anuncio-perdido.component';
import { AnuncioEncontradoComponent } from './anuncios/anuncio-encontrado/anuncio-encontrado.component';
import { CardDoacaoComponent } from './cards/card-doacao/card-doacao.component';
import { CardEncontradoComponent } from './cards/card-encontrado/card-encontrado.component';
import { CardPerdidoComponent } from './cards/card-perdido/card-perdido.component';
import { ListagemDoacaoComponent } from './listagem/listagem-doacao/listagem-doacao.component';
import { ListagemEncontradoComponent } from './listagem/listagem-encontrado/listagem-encontrado.component';
import { ListagemPerdidoComponent } from './listagem/listagem-perdido/listagem-perdido.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { SafePipe } from './helpers/safe.pipe';
import { DetalheDoacaoComponent } from './detalhes/detalhe-doacao/detalhe-doacao.component';
import { DetalheEncontradoComponent } from './detalhes/detalhe-encontrado/detalhe-encontrado.component';
import { DetalhePerdidoComponent } from './detalhes/detalhe-perdido/detalhe-perdido.component';
import { AgmCoreModule } from '@agm/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AnuncioLandingComponent } from './anuncios/anuncio-landing/anuncio-landing.component';
import { DoacaoEditComponent } from './cadastros/doacao-edit/doacao-edit.component';
import { EncontradoEditComponent } from './cadastros/encontrado-edit/encontrado-edit.component';
import { PerdidoEditComponent } from './cadastros/perdido-edit/perdido-edit.component';
import { UsuarioEditComponent } from './cadastros/usuario-edit/usuario-edit.component';
import { NgBootstrapFormValidationModule, CUSTOM_ERROR_MESSAGES } from 'ng-bootstrap-form-validation';
import { CUSTOM_ERRORS } from "./helpers/error-messages";

@NgModule({
  declarations: [
    SafePipe,
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    LandingPageComponent,
    UsuarioComponent,
    DoacaoComponent,
    EncontradoComponent,
    PerdidoComponent,
    AnuncioDoacaoComponent,
    AnuncioPerdidoComponent,
    AnuncioEncontradoComponent,
    CardDoacaoComponent,
    CardEncontradoComponent,
    CardPerdidoComponent,
    ListagemDoacaoComponent,
    ListagemEncontradoComponent,
    ListagemPerdidoComponent,
    DetalheDoacaoComponent,
    DetalheEncontradoComponent,
    DetalhePerdidoComponent,
    AnuncioLandingComponent,
    DoacaoEditComponent,
    EncontradoEditComponent,
    PerdidoEditComponent,
    UsuarioEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEiuCMybMtAnX3Hw0uAv-5mT3fzqwNsns',
      libraries: ['places']
    })

  ],
  providers: [
    { provide: CUSTOM_ERROR_MESSAGES, useValue: CUSTOM_ERRORS, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
