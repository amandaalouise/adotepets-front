import { Component, OnInit } from '@angular/core';
import { AnuncioEncontrado } from 'src/app/model/anuncioEncontrado.model';
import { EncontradoService } from 'src/app/services/encontrado.service';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listagem-encontrado',
  templateUrl: './listagem-encontrado.component.html',
  styleUrls: ['./listagem-encontrado.component.scss']
})
export class ListagemEncontradoComponent implements OnInit {

  encontrados: AnuncioEncontrado[];
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
    public encontradosService: EncontradoService,
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
    this.listaEncontradoGeral();
  }

  onSubmit() {
    this.listaEncontradosFiltro();
  }

  cleanFilters() {
    this.listaEncontradoGeral();
  }

  listaEncontradosFiltro() {
    this.cleanFilter = true;
    let params = new HttpParams()
      .set("tipo", this.filtroForm.value.tipo)
      .set("sexo", this.filtroForm.value.sexo)
      .set("porte", this.filtroForm.value.porte)
      .set("idade", this.filtroForm.value.idade);

    this.encontradosService.getEncontradosFilter(params).subscribe(data => {
      this.encontrados = [];
      if (data.content.length > 0) {
        this.encontrados = data.content;

        this.config = {
          itemsPerPage: 10,
          currentPage: data.pageable.pageNumber,
          totalItems: data.totalElements
        };
      }
    });
  }

  listaEncontradoGeral() {
    this.encontradosService.getEncontradosGeral().subscribe(data => {
      this.encontrados = [];
      if (data.content.length > 0) {
        this.encontrados = data.content;

        this.config = {
          itemsPerPage: 10,
          currentPage: data.pageable.pageNumber,
          totalItems: data.totalElements
        };
      }
    })
  }
}
