import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { DoacaoService } from 'src/app/services/doacao.service';
import { AnuncioDoacao } from 'src/app/model/anuncioDoacao.model';

@Component({
  selector: 'app-anuncio-doacao',
  templateUrl: './anuncio-doacao.component.html',
  styles: []
})
export class AnuncioDoacaoComponent implements OnInit {

  public userId: number;
  public doacoes: AnuncioDoacao[];
  config: any;
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Próxima',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  constructor(public autenticacaoService: AutenticacaoService,
    public doacaoService: DoacaoService) { }

  ngOnInit() {
    this.userId = this.autenticacaoService.currentUserValue.id;
    this.listaDoacoesPorUsuario();
  }

  listaDoacoesPorUsuario() {
    this.doacaoService.getDoacoesByUser(this.userId).subscribe(data => {

      if (data.content.length > 0) {
        this.doacoes = data.content;

        this.config = {
          itemsPerPage: 10,
          currentPage: data.pageable.pageNumber,
          totalItems: data.totalElements
        };
      }
    })
  }
}
