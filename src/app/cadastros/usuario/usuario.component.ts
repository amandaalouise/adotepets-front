import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
// import { Prestador } from 'src/app/model/prestador.model';
// import { PrestadorService } from 'src/app/services/prestador.service';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Global } from 'src/app/global';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario = new Usuario;
  public fileData: File;
  public filePrestador: File;
  previewUrl: any = [];
  url: any = Global.baseUrl;
  submitBtn: boolean = false;

  usuarioForm: FormGroup;

  @ViewChild('myInput', { static: false })
  myInputVariable: ElementRef;

  constructor(private usuarioService: UsuarioService,
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {

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
    this.submitBtn = true;

    this.usuarioService.registerUser(formData).subscribe(data => {
      if (data.ok) {
        this.showSuccessMessage();
        this.router.navigate[" / "];
      } else {
        this.showErrorMessage();
        this.submitBtn = false
      }
    });
  }

  showSuccessMessage() {
    this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso', {
      timeOut: 10000
    });
  }

  showErrorMessage() {
    this.toastr.error('Ocorreu um erro ao salvar as informações', 'Erro', {
      timeOut: 1000
    });
  }
}
