import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  formLoginEmail: string;
  formLoginSenha: string;
  errorAlert: boolean;

  constructor(public autenticacaoService: AutenticacaoService,
    private router: Router) { }

  ngOnInit() {
    this.errorAlert = false;
    if(this.autenticacaoService.currentUserValue.authdata !== null) {
      this.router.navigate(['/']);
    }
  }

  login() {
    this.autenticacaoService.login(this.formLoginEmail, this.formLoginSenha).subscribe(response => {
      console.log(response);
      if(response != 200) {
        this.autenticacaoService.logout();
        this.errorAlert = true;
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
