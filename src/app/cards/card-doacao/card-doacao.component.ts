import { Component, OnInit, Input } from '@angular/core';
import { AnuncioDoacao } from 'src/app/model/anuncioDoacao.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-card-doacao',
  templateUrl: './card-doacao.component.html',
  styleUrls: ['./card-doacao.component.scss']
})
export class CardDoacaoComponent implements OnInit {

  @Input() doacao: AnuncioDoacao;
  public url = Global.baseUrl;
  public style: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.style = "url(" + this.url + "arquivo/doacao/" + this.doacao.id + "/" + this.doacao.animal.imagens[0] + ")";
  }

  sanitizeImage(id: any, file: any) {
    console.log("url("+ Global.baseUrl + 'arquivo/doacao/' + id + '/' + file +")");
    return this.sanitizer.bypassSecurityTrustStyle("url("+ Global.baseUrl + 'arquivo/doacao/' + id + '/' + file +")");    
  }
}
