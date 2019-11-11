import { Component, OnInit } from '@angular/core';
import { AnuncioPerdido } from 'src/app/model/anuncioPerdido.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { PerdidoService } from 'src/app/services/perdido.service';

@Component({
  selector: 'app-anuncio-perdido',
  templateUrl: './anuncio-perdido.component.html'
})
export class AnuncioPerdidoComponent implements OnInit {

  public userId: number;
  public perdidos: AnuncioPerdido[];
  config: any;

  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Próxima',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  constructor(public autenticacaoService: AutenticacaoService,
    public perdidoService: PerdidoService) { }

  ngOnInit() {
    this.userId = this.autenticacaoService.currentUserValue.id;
    this.listaPerdidosByUser();
  }

  listaPerdidosByUser() {
    this.perdidoService.getPerdidosByUser(this.userId).subscribe(data => {

      if (data.content.length > 0) {
        this.perdidos = data.content;

        this.config = {
          itemsPerPage: 10,
          currentPage: data.pageable.pageNumber,
          totalItems: data.totalElements
        };
      }
    })
  }
}
