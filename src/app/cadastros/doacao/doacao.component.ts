import { Component, OnInit } from '@angular/core';
import { AnuncioDoacao } from 'src/app/model/anuncioDoacao.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { DoacaoService } from 'src/app/services/doacao.service';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.scss']
})
export class DoacaoComponent implements OnInit {

  anuncioDoacao: AnuncioDoacao = new AnuncioDoacao();
  files: Map<any, File> =  new Map();
  formDataFiles: Array<File> = [];

  constructor(public autenticacaoService: AutenticacaoService,
    public doacaoService: DoacaoService) { }

  ngOnInit() {
  }

  addFiles(fileInput: any) {
    <File>fileInput.target.forEach(element => {
      this.files.set(element.name, element.files);      
    });
  }

  removeFile(fileName: any) {
    this.files.delete(fileName);
  }

  cadastrarDoacao() {
      this.formDataFiles = Array.from(this.files.values());

      const formData = new FormData();
      formData.append('value', JSON.stringify(this.anuncioDoacao));

      this.formDataFiles.forEach(element => {
        formData.append('files', element);
      });
  
      this.doacaoService.registerDoacao(formData).subscribe(data => {
        console.log(data);
      });
  }
}
