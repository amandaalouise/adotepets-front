import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent implements OnInit {

  @ViewChild('myInput', {static: false})
  myInputVariable: ElementRef;

  constructor(private authService: AutenticacaoService) { }

  ngOnInit() {
  }

}
