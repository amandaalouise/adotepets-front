import { Component, OnInit } from '@angular/core';
import { AnuncioDoacao } from 'src/app/model/anuncioDoacao.model';
import { Animal } from 'src/app/model/animal.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { DoacaoService } from 'src/app/services/doacao.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Global } from 'src/app/global';

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
  url: any = Global.baseUrl;

  anuncioForm: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public autenticacaoService: AutenticacaoService,
    public doacaoService: DoacaoService,
    public router: Router,
    private formBuilder: FormBuilder) { 

      this.anuncioForm = this.createFormGroupWithBuilder(this.formBuilder);
        
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      tipo: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      vacinado: new FormControl('', Validators.required),
      castrado: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      cor: new FormControl('', Validators.required),
      porte: new FormControl('', Validators.required),
      idade: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.animal.tipo = this.anuncioForm.value.tipo;
    this.animal.castrado = this.anuncioForm.value.castrado;
    this.animal.cor = this.anuncioForm.value.cor;
    this.animal.descricao = this.anuncioForm.value.descricao;
    this.animal.nome = this.anuncioForm.value.nome;
    this.animal.porte = this.anuncioForm.value.porte;
    this.animal.sexo = this.anuncioForm.value.sexo;
    this.animal.vacinado = this.anuncioForm.value.vacinado;
    this.animal.idade = this.anuncioForm.value.idade;

    this.anuncioDoacao.animal = this.animal;
    this.anuncioDoacao.cidade = "Foz do Iguaçu";
    this.anuncioDoacao.estado = "Paraná";

    this.editaDoacao();
  }

  ngOnInit() {
    this.doacaoId = this.activatedRoute.snapshot.params.id;
    this.getDoacao(this.doacaoId);

    if(this.autenticacaoService.currentUserValue == null) {
      this.router.navigate(['/']);
    }
  }

  getDoacao(id: any) {
    return this.doacaoService.getDoacaoById(id).then(doacao => {
      this.anuncioDoacao = doacao;
      this.animal = this.anuncioDoacao.animal;

      this.anuncioForm.controls.tipo.setValue(this.anuncioDoacao.animal.tipo); 
      this.anuncioForm.controls.sexo.setValue(this.anuncioDoacao.animal.sexo);
      this.anuncioForm.controls.vacinado.setValue(this.anuncioDoacao.animal.vacinado.toString());
      this.anuncioForm.controls.castrado.setValue(this.anuncioDoacao.animal.castrado.toString());
      this.anuncioForm.controls.porte.setValue(this.anuncioDoacao.animal.porte);
      this.anuncioForm.controls.idade.setValue(this.anuncioDoacao.animal.idade);
      this.anuncioForm.controls.nome.setValue(this.anuncioDoacao.animal.nome);
      this.anuncioForm.controls.cor.setValue(this.anuncioDoacao.animal.cor);
      this.anuncioForm.controls.descricao.setValue(this.anuncioDoacao.animal.descricao);

      if(this.animal.usuario.id != this.autenticacaoService.currentUserValue.id) {
        this.router.navigate(['/']);
      }
    });
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
        this.router.navigate(['/dashboard/doacao']);
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
