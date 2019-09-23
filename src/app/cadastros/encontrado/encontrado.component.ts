import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { AnuncioEncontrado } from 'src/app/model/anuncioEncontrado.model';
import { EncontradoService } from 'src/app/services/encontrado.service';
import { Animal } from 'src/app/model/animal.model';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-encontrado',
  templateUrl: './encontrado.component.html',
  styleUrls: ['./encontrado.component.scss']
})
export class EncontradoComponent implements OnInit {

  anuncioEncontrado: AnuncioEncontrado = new AnuncioEncontrado();
  animal: Animal = new Animal();
  files: Map<any, File> = new Map();
  formDataFiles: Array<File> = [];
  previewUrl: any = [];

  constructor(public autenticacaoService: AutenticacaoService,
    public encontradoService: EncontradoService) { }

  ngOnInit() {
    this.animal.usuario = new Usuario();
    this.animal.usuario.id = this.autenticacaoService.currentUserValue.id;
    this.anuncioEncontrado.animal = this.animal;
    this.anuncioEncontrado.cidade = "Foz do Iguaçu";
    this.anuncioEncontrado.estado = "Paraná";
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
