import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent implements OnInit {

  public usuario: Usuario = new Usuario;
  public fileData: File;
  previewUrl;
  url: any = Global.baseUrl;

  usuarioForm: FormGroup;

  @ViewChild('myInput', { static: false })
  myInputVariable: ElementRef;

  constructor(private usuarioService: UsuarioService,
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.usuarioForm = this.createFormGroupWithBuilder(this.formBuilder);
  }

  ngOnInit() {
    this.getUsuario(this.autenticacaoService.currentUserValue.id);
    if (this.autenticacaoService.currentUserValue == null || this.autenticacaoService.currentUserValue.authdata == null) {
      this.router.navigate(['/']);
    }
  }

  getUsuario(id: any) {
    return this.usuarioService.getUserById(id).then(user => {
      this.usuario = user;

      this.usuarioForm.controls.nome.setValue(this.usuario.nome); 
      this.usuarioForm.controls.email.setValue(this.usuario.email);
      this.usuarioForm.controls.telefone.setValue(this.usuario.telefone);
      this.usuarioForm.controls.celular.setValue(this.usuario.celular);

    });
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
    });
  }


  onSubmit() {
    this.usuario.nome = this.usuarioForm.value.nome;
    this.usuario.email = this.usuarioForm.value.email;
    this.usuario.celular = this.usuarioForm.value.celular;
    this.usuario.telefone = this.usuarioForm.value.telefone;

    let token = window.btoa(this.autenticacaoService.currentUserValue.email + ':' + this.usuarioForm.value.senha);


    if (this.usuarioForm.invalid) {
      return;
    }

    if(token != this.autenticacaoService.currentUserValue.authdata) {
      return;
    } else {
      this.editarUsuario();
    }
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];

    this.preview(fileInput);
  }

  preview(fileInput) {
    this.previewUrl = [];
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

  removeFile() {
    this.previewUrl = [];
    this.fileData = null;
    this.myInputVariable.nativeElement.value = "";

    return false;
  }

  editarUsuario() {
    const formData = new FormData();
    formData.append('value', JSON.stringify(this.usuario));
    formData.append('file', this.fileData);

    this.usuarioService.editUser(formData).subscribe(data => {
      if (data.ok) {
        console.log("ok");
      }
    });
  }
}
