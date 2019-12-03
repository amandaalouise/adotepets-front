import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Usuario } from '../model/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;
  formLoginEmail: string;
  formLoginSenha: string;
  errorAlert: boolean;

  constructor(public autenticacaoService: AutenticacaoService, public router: Router) { }

  ngOnInit() {
    this.errorAlert = false;
    this.usuario = this.autenticacaoService.currentUserValue;
  }

  logout() {
    this.autenticacaoService.logout();
  }

  login() {
    this.autenticacaoService.login(this.formLoginEmail, this.formLoginSenha).subscribe(
      data => {
        if(data == null) {
          this.errorAlert = true;
        } else {
          window.location.reload();
        }
      },
      error => {
        this.errorAlert = true;
      });
  }
}
