import { Component, OnInit, Input } from '@angular/core';
import { AnuncioPerdido } from 'src/app/model/anuncioPerdido.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-card-perdido',
  templateUrl: './card-perdido.component.html',
  styleUrls: ['./card-perdido.component.scss']
})
export class CardPerdidoComponent implements OnInit {

  @Input() perdido: AnuncioPerdido;
  public url = Global.baseUrl;
  public style: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.style = "url(" + this.url + "arquivo/perdido/" + this.perdido.id + "/" + this.perdido.animal.imagens[0] + ")";
  }

  sanitizeImage(id: any, file: any) {
    console.log("url("+ Global.baseUrl + 'arquivo/perdido/' + id + '/' + file +")");
    return this.sanitizer.bypassSecurityTrustStyle("url("+ Global.baseUrl + 'arquivo/perdido/' + id + '/' + file +")");    
  }

}
