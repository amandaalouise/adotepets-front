import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { DoacaoService } from 'src/app/services/doacao.service';
import { AnuncioDoacao } from 'src/app/model/anuncioDoacao.model';

@Component({
  selector: 'app-listagem-doacao',
  templateUrl: './listagem-doacao.component.html',
  styleUrls: ['./listagem-doacao.component.scss']
})
export class ListagemDoacaoComponent implements OnInit {

  doacoes: AnuncioDoacao[];

  constructor(public autenticacaoService: AutenticacaoService,
    public doacaoService: DoacaoService) { }

  ngOnInit() {
    this.listaDoacoesGeral();
  }

  listaDoacoesGeral() {
    this.doacaoService.getDoacoesGeral().subscribe(data => {
      if(data.content.length > 0) {
        this.doacoes = data.content;
      }
    })
  }
}
