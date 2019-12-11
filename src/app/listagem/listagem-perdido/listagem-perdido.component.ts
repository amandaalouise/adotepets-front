import { Component, OnInit } from '@angular/core';
import { AnuncioPerdido } from 'src/app/model/anuncioPerdido.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { PerdidoService } from 'src/app/services/perdido.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-listagem-perdido',
  templateUrl: './listagem-perdido.component.html',
  styleUrls: ['./listagem-perdido.component.scss']
})
export class ListagemPerdidoComponent implements OnInit {

  perdidos: AnuncioPerdido[];
  config: any;
  cleanFilter = false;
  filtroForm: FormGroup;

  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Próxima',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  constructor(public autenticacaoService: AutenticacaoService,
    public perdidoService: PerdidoService,
    private formBuilder: FormBuilder) {
    this.filtroForm = this.createFormGroupWithBuilder(this.formBuilder);
    this.filtroForm.controls.tipo.setValue("");
    this.filtroForm.controls.sexo.setValue("");
    this.filtroForm.controls.porte.setValue("");
    this.filtroForm.controls.idade.setValue("");
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      tipo: new FormControl(''),
      sexo: new FormControl(''),
      porte: new FormControl(''),
      idade: new FormControl(''),
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.listaPerdidoGeral();
  }


  onSubmit() {
    this.listaPerdidosFiltro();
  }

  cleanFilters() {
    this.listaPerdidoGeral();
  }

  listaPerdidosFiltro() {
    this.cleanFilter = true;
    let params = new HttpParams()
      .set("tipo", this.filtroForm.value.tipo)
      .set("sexo", this.filtroForm.value.sexo)
      .set("porte", this.filtroForm.value.porte)
      .set("idade", this.filtroForm.value.idade);

    this.perdidoService.getPerdidosFiltro(params).subscribe(data => {
      this.perdidos = [];
      if (data.content.length > 0) {
        this.perdidos = data.content;

        this.config = {
          itemsPerPage: 10,
          currentPage: data.pageable.pageNumber,
          totalItems: data.totalElements
        };
      }
    });
  }

  listaPerdidoGeral() {
    this.perdidoService.getPerdidosGeral().subscribe(data => {
      this.perdidos = [];
      
      if (data.content.length > 0) {
        this.perdidos = data.content;

        this.config = {
          itemsPerPage: 10,
          currentPage: data.pageable.pageNumber,
          totalItems: data.totalElements
        };
      }
    })
  }

}
