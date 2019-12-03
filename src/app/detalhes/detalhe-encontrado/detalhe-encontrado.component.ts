import { Component, OnInit } from '@angular/core';
import { AnuncioEncontrado } from 'src/app/model/anuncioEncontrado.model';
import { EncontradoService } from 'src/app/services/encontrado.service';
import { ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-detalhe-encontrado',
  templateUrl: './detalhe-encontrado.component.html',
  styleUrls: ['./detalhe-encontrado.component.scss']
})
export class DetalheEncontradoComponent implements OnInit {

  public encontradoId: number;
  public encontrado: AnuncioEncontrado;
  public centerZoom: number;
  url: any = Global.baseUrl;

  constructor(private activatedRoute: ActivatedRoute,
    private encontradoService: EncontradoService) { }

  ngOnInit() {
    this.encontradoId = this.activatedRoute.snapshot.params.id 
    this.getEncontrado(this.encontradoId);
    this.centerZoom = 15;
  }
 
  getEncontrado(id: any) {
    return this.encontradoService.getEncontradoById(id).then(encontrado =>  {
      this.encontrado = encontrado;
    });
  }
}
