import { Component, OnInit } from '@angular/core';
import { AnuncioEncontrado } from 'src/app/model/anuncioEncontrado.model';
import { EncontradoService } from 'src/app/services/encontrado.service';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-anuncio-encontrado',
  templateUrl: './anuncio-encontrado.component.html',
  styleUrls: ['./anuncio-encontrado.component.scss']
})
export class AnuncioEncontradoComponent implements OnInit {

  public userId: number;
  public encontrados: AnuncioEncontrado[];
  config: any;

  constructor(public autenticacaoService: AutenticacaoService,
    public encontradoService: EncontradoService) { }

  ngOnInit() {
    this.userId = this.autenticacaoService.currentUserValue.id;
    this.listaEncontradosPorUsuario();
  }

  listaEncontradosPorUsuario() {
    this.encontradoService.getEncontradosByUser(this.userId).subscribe(data => {

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
