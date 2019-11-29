import { Component, OnInit, Input } from '@angular/core';
import { AnuncioPerdido } from 'src/app/model/anuncioPerdido.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Global } from 'src/app/global';
import { PerdidoService } from 'src/app/services/perdido.service';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-perdido',
  templateUrl: './card-perdido.component.html',
  styleUrls: ['./card-perdido.component.scss']
})
export class CardPerdidoComponent implements OnInit {

  @Input() perdido: AnuncioPerdido;
  @Input() type: any;
  public url = Global.baseUrl;
  public style: string;

  constructor(private sanitizer: DomSanitizer,
    private perdidoService: PerdidoService,
    private authService: AutenticacaoService,
    private router: Router) { }

  ngOnInit() {
    this.style = "url(" + this.url + "arquivo/perdido/" + this.perdido.id + "/" + this.perdido.animal.imagens[0] + ")";
  }

  sanitizeImage(id: any, file: any) {
    return this.sanitizer.bypassSecurityTrustStyle("url(" + Global.baseUrl + 'arquivo/perdido/' + id + '/' + file + ")");
  }

  removePerdido() {
    const formData = new FormData();
    formData.append('userId', this.authService.currentUserValue.id.toString());

    this.perdidoService.removePerdido(this.perdido.id, formData).subscribe(data => {
      if (data.ok) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
