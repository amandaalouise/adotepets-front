import { Component, OnInit } from '@angular/core';
import { AnuncioPerdido } from 'src/app/model/anuncioPerdido.model';
import { PerdidoService } from 'src/app/services/perdido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-perdido',
  templateUrl: './detalhe-perdido.component.html',
  styleUrls: ['./detalhe-perdido.component.scss']
})
export class DetalhePerdidoComponent implements OnInit {

  public perdidoId: number;
  public perdido: AnuncioPerdido;
  public centerZoom: number;

  constructor(private activatedRoute: ActivatedRoute,
    private perdidoService: PerdidoService) { }

  ngOnInit() {
    this.centerZoom = 15;
    this.perdidoId = this.activatedRoute.snapshot.params.id 
    this.getPerdido(this.perdidoId);
  }
 
  getPerdido(id: any) {
    return this.perdidoService.getPerdidoById(id).then(perdido =>  {
      this.perdido = perdido;
      console.log(this.perdido);
    });
  }
}
