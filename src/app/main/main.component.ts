import { Component, OnInit } from '@angular/core';
import { AnuncioDoacao } from '../model/anuncioDoacao.model';
import { DoacaoService } from '../services/doacao.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  doacoes: AnuncioDoacao[];

  constructor(public doacaoService: DoacaoService,
    private titleService: Title,
    private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Pettix - Doação e localização de animais");
    this.metaService.addTags([
      { name: 'keywords', content: 'pettix, foz do iguaçu, adoção, doação de animais em foz, animais, localização, animal perdido, foz, animais em foz' },
      { name: 'description', content: 'Pettix é um sistema funcional, cujo os idealizadores são acadêmicos de Medicina Veterinária da cidade de Foz do Iguaçu - PR, dos quais possuem parcerias com ONG’s e protetores, com objetivo de achar um lar para animais que foram abandonados e com isso diminuir o índice de animais nas ruas e a superlotação de ONG’s.' },
      { name: 'robots', content: 'index, follow' }
    ]);
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
