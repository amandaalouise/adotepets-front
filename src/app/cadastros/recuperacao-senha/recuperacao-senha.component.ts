import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-recuperacao-senha',
  templateUrl: './recuperacao-senha.component.html',
  styleUrls: ['./recuperacao-senha.component.scss']
})
export class RecuperacaoSenhaComponent implements OnInit {

  usuarioForm: FormGroup;
  email: string;
  success: boolean = false;

  constructor(private usuarioService: UsuarioService,
    private formBuilder: FormBuilder) {

    this.usuarioForm = this.createFormGroupWithBuilder(this.formBuilder);
  }

  ngOnInit() {

  }

  onSubmit() {
      this.email = this.usuarioForm.value.email;

    if (this.usuarioForm.invalid) {
      return;
    }

    this.recuperaSenha();
  }


  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      email: new FormControl('', Validators.required)
    });
  }

  recuperaSenha() {
    const formData = new FormData();
    formData.append('email', this.email);

    this.usuarioService.resetPassword(formData).subscribe(data => {
      if (data.ok) {
        this.success = true;
      }
    });
  }
}
