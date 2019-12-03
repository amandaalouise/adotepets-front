import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoacaoService } from 'src/app/services/doacao.service';
import { AnuncioDoacao } from 'src/app/model/anuncioDoacao.model';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-detalhe-doacao',
  templateUrl: './detalhe-doacao.component.html',
  styleUrls: ['./detalhe-doacao.component.scss']
})
export class DetalheDoacaoComponent implements OnInit {

  public doacaoId: number;
  public doacao: AnuncioDoacao;
  url: any = Global.baseUrl;

  constructor(private activatedRoute: ActivatedRoute,
    private doacaoService: DoacaoService) { }

  ngOnInit() {
    this.doacaoId = this.activatedRoute.snapshot.params.id 
    this.getDoacao(this.doacaoId);
  }
 
  getDoacao(id: any) {
    return this.doacaoService.getDoacaoById(id).then(doacao =>  {
      this.doacao = doacao;
    });
  }
}
