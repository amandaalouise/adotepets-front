import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent implements OnInit {

  public usuario: Usuario = new Usuario;
  // public prestador: Prestador = new Prestador;
  public fileData: File;
  public filePrestador: File;
  previewUrl: any = [];

  usuarioForm: FormGroup;

  @ViewChild('myInput', { static: false })
  myInputVariable: ElementRef;

  constructor(private usuarioService: UsuarioService,
    // private prestadorService: PrestadorService,
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.usuarioForm = this.createFormGroupWithBuilder(this.formBuilder);
  }

  ngOnInit() {
    if (this.autenticacaoService.currentUserValue !== null && this.autenticacaoService.currentUserValue.authdata !== null) {
      this.router.navigate(['/']);
    }
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      confirmasenha: new FormControl('', Validators.required),
    }, { 
      validator: this.MustMatch('senha', 'confirmasenha')
    });
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }


  onSubmit() {
    this.usuario.nome = this.usuarioForm.value.nome;
    this.usuario.email = this.usuarioForm.value.email;
    this.usuario.celular = this.usuarioForm.value.celular;
    this.usuario.telefone = this.usuarioForm.value.telefone;
    this.usuario.senha = this.usuarioForm.value.senha;

    if (this.usuarioForm.invalid) {
      return;
    }

    this.cadastrarUsuario();
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];

    this.preview(fileInput);
  }

  // fileProgressPrestador(fileInput: any) {
  //   this.filePrestador = <File>fileInput.target.files[0];

  //   this.preview(fileInput);
  // }

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

  removeFile() {
    this.previewUrl = [];
    this.fileData = null;
    this.filePrestador = null;
    this.myInputVariable.nativeElement.value = "";

    return false;
  }

  cadastrarUsuario() {
    const formData = new FormData();
    formData.append('value', JSON.stringify(this.usuario));
    formData.append('file', this.fileData);

    this.usuarioService.registerUser(formData).subscribe(data => {
      console.log(data);
    });
  }
}
