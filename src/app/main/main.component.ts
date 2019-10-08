import { Component, OnInit } from '@angular/core';
import { AnuncioDoacao } from '../model/anuncioDoacao.model';
import { DoacaoService } from '../services/doacao.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  doacoes: AnuncioDoacao[];

  constructor(public doacaoService: DoacaoService) { }

  ngOnInit() {
    this.listaDoacoesGeral();
  }

  listaDoacoesGeral() {
    this.doacaoService.getDoacoesGeral(0, 3).subscribe(data => {

      if (data.content.length > 0) {
        this.doacoes = data.content;
      }
    })
  }
}
