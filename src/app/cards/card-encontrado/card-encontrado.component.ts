import { Component, OnInit, Input } from '@angular/core';
import { AnuncioEncontrado } from 'src/app/model/anuncioEncontrado.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Global } from 'src/app/global';
import { EncontradoService } from 'src/app/services/encontrado.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-card-encontrado',
  templateUrl: './card-encontrado.component.html',
  styleUrls: ['./card-encontrado.component.scss']
})
export class CardEncontradoComponent implements OnInit {

  @Input() encontrado: AnuncioEncontrado;
  @Input() type: any;
  public url = Global.baseUrl;
  public style: string;

  constructor(private sanitizer: DomSanitizer,
    private encontradoService: EncontradoService,
    private authService: AutenticacaoService,
    private router: Router) { }

  ngOnInit() {
    this.style = "url(" + this.url + "arquivo/encontrado/" + this.encontrado.id + "/" + this.encontrado.animal.imagens[0] + ")";
  }

  sanitizeImage(id: any, file: any) {
    console.log("url(" + Global.baseUrl + 'arquivo/encontrado/' + id + '/' + file + ")");
    return this.sanitizer.bypassSecurityTrustStyle("url(" + Global.baseUrl + 'arquivo/encontrado/' + id + '/' + file + ")");
  }

  removeEncontrado() {
    const formData = new FormData();
    formData.append('userId', this.authService.currentUserValue.id.toString());

    this.encontradoService.removeEncontrado(this.encontrado.id, formData).subscribe(data => {
      if (data.ok) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
