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
  config: any;

  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Próxima',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };
  
  constructor(public autenticacaoService: AutenticacaoService,
    public doacaoService: DoacaoService) {
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.listaDoacoesGeral();
  }

  listaDoacoesGeral() {
    this.doacaoService.getDoacoesGeral().subscribe(data => {

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
