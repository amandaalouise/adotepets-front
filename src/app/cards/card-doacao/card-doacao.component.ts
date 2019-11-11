import { Component, OnInit, Input } from '@angular/core';
import { AnuncioDoacao } from 'src/app/model/anuncioDoacao.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Global } from 'src/app/global';
import { DoacaoService } from 'src/app/services/doacao.service';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-doacao',
  templateUrl: './card-doacao.component.html',
  styleUrls: ['./card-doacao.component.scss']
})
export class CardDoacaoComponent implements OnInit {

  @Input() doacao: AnuncioDoacao;
  @Input() type: any;
  public url = Global.baseUrl;
  public style: string;

  constructor(private sanitizer: DomSanitizer,
    private doacaoService: DoacaoService,
    private authService: AutenticacaoService,
    private router: Router) { }

  ngOnInit() {
    this.style = "url(" + this.url + "arquivo/doacao/" + this.doacao.id + "/" + this.doacao.animal.imagens[0] + ")";
  }

  sanitizeImage(id: any, file: any) {
    console.log("url(" + Global.baseUrl + 'arquivo/doacao/' + id + '/' + file + ")");
    return this.sanitizer.bypassSecurityTrustStyle("url(" + Global.baseUrl + 'arquivo/doacao/' + id + '/' + file + ")");
  }

  removeDoacao() {
    const formData = new FormData();
    formData.append('userId', this.authService.currentUserValue.id.toString());

    this.doacaoService.removeDoacao(this.doacao.id, formData).subscribe(data => {
      if (data.ok) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
