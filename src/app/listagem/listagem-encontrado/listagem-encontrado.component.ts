import { Component, OnInit } from '@angular/core';
import { AnuncioEncontrado } from 'src/app/model/anuncioEncontrado.model';
import { EncontradoService } from 'src/app/services/encontrado.service';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-listagem-encontrado',
  templateUrl: './listagem-encontrado.component.html',
  styleUrls: ['./listagem-encontrado.component.scss']
})
export class ListagemEncontradoComponent implements OnInit {

  encontrados: AnuncioEncontrado[];
  config: any;

  constructor(public autenticacaoService: AutenticacaoService,
    public encontradosService: EncontradoService) {
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.listaEncontradoGeral();
  }

  listaEncontradoGeral() {
    this.encontradosService.getEncontradosGeral().subscribe(data => {

      if (data.content.length > 0) {
        this.encontrados = data.content;

        this.config = {
          itemsPerPage: 10,
          currentPage: data.pageable.pageNumber,
          totalItems: data.totalElements
        };
      }
    })
  }
}
