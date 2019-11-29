import { Component, OnInit } from '@angular/core';
import { AnuncioDoacao } from 'src/app/model/anuncioDoacao.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { DoacaoService } from 'src/app/services/doacao.service';
import { Animal } from 'src/app/model/animal.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Usuario } from 'src/app/model/usuario.model';

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
  usuario: Usuario = new Usuario();

  anuncioForm: FormGroup;

  constructor(public autenticacaoService: AutenticacaoService,
    public doacaoService: DoacaoService,
    public router: Router,
    private formBuilder: FormBuilder) { 
        this.anuncioForm = this.createFormGroupWithBuilder(this.formBuilder);
        this.anuncioForm.controls.tipo.setValue("cachorro"); 
        this.anuncioForm.controls.sexo.setValue("macho");
        this.anuncioForm.controls.vacinado.setValue("false");
        this.anuncioForm.controls.castrado.setValue("false");
        this.anuncioForm.controls.porte.setValue("Pequeno");
        this.anuncioForm.controls.idade.setValue("Filhote (0 a 2 anos)");
    }

  ngOnInit() {
    if(this.autenticacaoService.currentUserValue != null) {
      this.usuario = this.autenticacaoService.currentUserValue;
    } else {
      this.router.navigate(['/']);
    }
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
    this.anuncioDoacao.animal.usuario = this.usuario;
    this.anuncioDoacao.cidade = "Foz do Iguaçu";
    this.anuncioDoacao.estado = "Paraná";

    this.cadastrarDoacao();
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
        this.router.navigate(['/dashboard/doacao']);
      }
    });
  }
}
