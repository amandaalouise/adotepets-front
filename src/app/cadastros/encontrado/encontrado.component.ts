import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { AnuncioEncontrado } from 'src/app/model/anuncioEncontrado.model';
import { EncontradoService } from 'src/app/services/encontrado.service';

@Component({
  selector: 'app-encontrado',
  templateUrl: './encontrado.component.html',
  styleUrls: ['./encontrado.component.scss']
})
export class EncontradoComponent implements OnInit {

  anuncioEncontrado: AnuncioEncontrado = new AnuncioEncontrado();
  files: Map<any, File> = new Map();
  formDataFiles: Array<File> = [];
  previewUrl: any = [];

  constructor(public autenticacaoService: AutenticacaoService,
    public encontradoService: EncontradoService) { }

  ngOnInit() {
  }

  addFiles(fileInput: any) {
    const arr = [...fileInput.target.files];
    arr.forEach(element => {
      this.files.set(element.name, element);
    });

    this.preview(fileInput);
  }

  removeFile(fileName: any) {
    this.files.delete(fileName);
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
        this.previewUrl.push(reader.result);
      }
    });
  }


  cadastrarEncontrado() {
    this.formDataFiles = Array.from(this.files.values());

    const formData = new FormData();
    formData.append('value', JSON.stringify(this.encontradoService));

    this.formDataFiles.forEach(element => {
      formData.append('files', element);
    });

    this.encontradoService.registerEncontrado(formData).subscribe(data => {
      console.log(data);
    });
  }

}
