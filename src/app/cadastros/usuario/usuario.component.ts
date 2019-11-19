import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Prestador } from 'src/app/model/prestador.model';
import { PrestadorService } from 'src/app/services/prestador.service';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario = new Usuario;
  public prestador: Prestador = new Prestador;
  public fileData: File;
  public filePrestador: File;
  previewUrl: any = [];

  @ViewChild('myInput', {static: false})
  myInputVariable: ElementRef;

  constructor(private usuarioService: UsuarioService,
    private prestadorService: PrestadorService,
    private autenticacaoService: AutenticacaoService,
    private router: Router) { }

  ngOnInit() {
    if(this.autenticacaoService.currentUserValue !== null && this.autenticacaoService.currentUserValue.authdata !== null) {
      this.router.navigate(['/']);
    }
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];

    this.preview(fileInput);
  }

  fileProgressPrestador(fileInput: any) {
    this.filePrestador = <File>fileInput.target.files[0];

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

  registerUser() {
    const formData = new FormData();
    formData.append('value', JSON.stringify(this.usuario));
    formData.append('file', this.fileData);

    this.usuarioService.registerUser(formData).subscribe(data => {
      console.log(data);
    });
  }

  registerPrestador() {
    const formData = new FormData();
    formData.append('value', JSON.stringify(this.prestador));
    formData.append('file', this.filePrestador);

    this.prestadorService.registerPrestador(formData).subscribe(data => {
      console.log(data);
    });
  }

}
