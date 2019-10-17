import { Component, OnInit } from '@angular/core';
import { AnuncioDoacao } from 'src/app/model/anuncioDoacao.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { DoacaoService } from 'src/app/services/doacao.service';
import { Animal } from 'src/app/model/animal.model';
import { Usuario } from 'src/app/model/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.scss']
})
export class DoacaoComponent implements OnInit {

  anuncioDoacao: AnuncioDoacao = new AnuncioDoacao();
  animal: Animal = new Animal();
  files: Map<any, File> = new Map();
  formDataFiles: Array<File> = [];
  previewUrl: Map<any, any> = new Map();

  constructor(public autenticacaoService: AutenticacaoService,
    public doacaoService: DoacaoService,
    public router: Router) { }

  ngOnInit() {
    this.animal.usuario = new Usuario();
    this.animal.usuario.id = this.autenticacaoService.currentUserValue.id;
    this.anuncioDoacao.animal = this.animal;
    this.anuncioDoacao.cidade = "Foz do Iguaçu";
    this.anuncioDoacao.estado = "Paraná";
  }

  addFiles(fileInput: any) {
    const arr = [...fileInput.target.files];
    console.log(arr);
    arr.forEach(element => {
      this.files.set(element.name, element);
    });

    this.preview(fileInput);
  }

  removeFile(fileName: any) {
    this.files.delete(fileName);
    this.previewUrl.delete(fileName);
    this.updateFileInput();
  }

  preview(fileInput) {
    const arr = [...fileInput.target.files];
    arr.forEach(element => {
      var mimeType = element.type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }

      var reader = new FileReader();
      reader.readAsDataURL(element);
      reader.onload = (_event) => {
        this.previewUrl.set(element.name, reader.result);
      }
    });
  }

  updateFileInput() {
    let input = document.getElementById("file");
    let list = new DataTransfer();
    for(const [value] of this.files.entries()) {
      list.items.add(value);
    }

    let myFileList = list.files;
    (<HTMLInputElement>input).files = myFileList;
    
  }

  cadastrarDoacao() {
    this.formDataFiles = Array.from(this.files.values());

    const formData = new FormData();
    formData.append('value', JSON.stringify(this.anuncioDoacao));

    this.formDataFiles.forEach(element => {
      formData.append('files', element);
    });

    this.doacaoService.registerDoacao(formData).subscribe(data => {
      if(data.ok) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
