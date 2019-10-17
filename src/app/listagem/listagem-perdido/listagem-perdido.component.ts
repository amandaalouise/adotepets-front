import { Component, OnInit } from '@angular/core';
import { AnuncioPerdido } from 'src/app/model/anuncioPerdido.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { PerdidoService } from 'src/app/services/perdido.service';

@Component({
  selector: 'app-listagem-perdido',
  templateUrl: './listagem-perdido.component.html',
  styleUrls: ['./listagem-perdido.component.scss']
})
export class ListagemPerdidoComponent implements OnInit {

  perdidos: AnuncioPerdido[];
  config: any;

  constructor(public autenticacaoService: AutenticacaoService,
    public perdidoService: PerdidoService) {
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.listaEncontradoGeral();
  }

  listaEncontradoGeral() {
    this.perdidoService.getPerdidosGeral().subscribe(data => {

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
