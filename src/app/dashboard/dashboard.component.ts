import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public usuarioId: number;

  constructor(private authService: AutenticacaoService) { }

  ngOnInit() {
    this.usuarioId = this.authService.currentUserValue.id;
  }

}
