import { Component, OnInit } from '@angular/core';
import { AnuncioDoacao } from 'src/app/model/anuncioDoacao.model';
import { Animal } from 'src/app/model/animal.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { DoacaoService } from 'src/app/services/doacao.service';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-doacao-edit',
  templateUrl: './doacao-edit.component.html',
  styleUrls: ['./doacao-edit.component.scss']
})
export class DoacaoEditComponent implements OnInit {

  anuncioDoacao: AnuncioDoacao;
  animal: Animal;
  files: Map<any, File> = new Map();
  formDataFiles: Array<File> = [];
  previewUrl: Map<any, any> = new Map();
  doacaoId: number;
  imgToDelete: any = new Array();

  constructor(
    public activatedRoute: ActivatedRoute,
    public autenticacaoService: AutenticacaoService,
    public doacaoService: DoacaoService,
    public router: Router) { }

  ngOnInit() {
    this.doacaoId = this.activatedRoute.snapshot.params.id;
    this.getDoacao(this.doacaoId);
  }

  getDoacao(id: any) {
    return this.doacaoService.getDoacaoById(id).then(doacao => {
      this.anuncioDoacao = doacao;
      this.animal = this.anuncioDoacao.animal;
    });

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

  removeExistingFile(fileName: any) {
    this.imgToDelete.push(fileName);

    this.removeElement(this.animal.imagens, fileName);
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
    for (const [value] of this.files.entries()) {
      list.items.add(value);
    }

    let myFileList = list.files;
    (<HTMLInputElement>input).files = myFileList;
  }

  editaDoacao() {
    console.log(this.animal);
    this.formDataFiles = Array.from(this.files.values());

    const formData = new FormData();
    formData.append('value', JSON.stringify(this.anuncioDoacao));

    this.formDataFiles.forEach(element => {
      formData.append('files', element);
    });

    this.imgToDelete.forEach(element => {
      formData.append('delete', element);
    })

    this.doacaoService.editDoacao(formData).subscribe(data => {
      if (data.ok) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}
