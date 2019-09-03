import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Prestador } from 'src/app/model/prestador.model';
import { PrestadorService } from 'src/app/services/prestador.service';

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

  constructor(private usuarioService: UsuarioService,
    private prestadorService: PrestadorService) { }

  ngOnInit() {
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }

  fileProgressPrestador(fileInput: any) {
    this.filePrestador = <File>fileInput.target.files[0];
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
