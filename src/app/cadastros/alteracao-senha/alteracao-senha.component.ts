import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alteracao-senha',
  templateUrl: './alteracao-senha.component.html',
  styleUrls: ['./alteracao-senha.component.scss']
})
export class AlteracaoSenhaComponent implements OnInit {

  usuarioForm: any;
  passwordForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
    public autenticacaoService: AutenticacaoService,
    public usuarioService: UsuarioService,
    public router: Router,
    private toastr: ToastrService) { 
    this.passwordForm = this.createFormGroupWithBuilder(this.formBuilder);
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      oldsenha: new FormControl('', Validators.required),
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

  ngOnInit() {
  }

  onSubmit() {

    let token = window.btoa(this.autenticacaoService.currentUserValue.email + ':' + this.passwordForm.value.oldsenha);

    if (this.passwordForm.invalid) {
      return;
    }

    if(token != this.autenticacaoService.currentUserValue.authdata) {
      this.showErrorMessage();
    } else {
      this.alteraSenha();
    }
  }

  alteraSenha() {
    const formData = new FormData();
    formData.append('senhaAntiga', this.passwordForm.value.oldsenha);
    formData.append('novaSenha', this.passwordForm.value.senha);
    formData.append('id', this.autenticacaoService.currentUserValue.id.toString());

    this.usuarioService.alteraSenha(formData).subscribe(data => {
      if(data.ok) {
        this.showSuccessMessage();
        this.router.navigate(['/dashboard/doacao']);
      }
    });
  }

  showSuccessMessage() {
    this.toastr.success('Senha alterada com sucesso!', 'Sucesso', {
      timeOut: 1000
    });
  }

  showErrorMessage() {
    this.toastr.error('Senha incorreta', 'Erro', {
      timeOut: 1000
    });
  }
}
