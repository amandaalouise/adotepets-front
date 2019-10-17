import { Component, OnInit, Input } from '@angular/core';
import { AnuncioEncontrado } from 'src/app/model/anuncioEncontrado.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-card-encontrado',
  templateUrl: './card-encontrado.component.html',
  styleUrls: ['./card-encontrado.component.scss']
})
export class CardEncontradoComponent implements OnInit {

  @Input() encontrado: AnuncioEncontrado;
  public url = Global.baseUrl;
  public style: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.style = "url(" + this.url + "arquivo/encontrado/" + this.encontrado.id + "/" + this.encontrado.animal.imagens[0] + ")";
  }

  sanitizeImage(id: any, file: any) {
    console.log("url("+ Global.baseUrl + 'arquivo/encontrado/' + id + '/' + file +")");
    return this.sanitizer.bypassSecurityTrustStyle("url("+ Global.baseUrl + 'arquivo/encontrado/' + id + '/' + file +")");    
  }
}
