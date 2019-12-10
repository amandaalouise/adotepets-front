import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { DoacaoService } from 'src/app/services/doacao.service';
import { AnuncioDoacao } from 'src/app/model/anuncioDoacao.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-listagem-doacao',
  templateUrl: './listagem-doacao.component.html',
  styleUrls: ['./listagem-doacao.component.scss']
})
export class ListagemDoacaoComponent implements OnInit {

  doacoes: AnuncioDoacao[];
  config: any;
  filtroForm: FormGroup;
  cleanFilter = false;

  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Próxima',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  constructor(public autenticacaoService: AutenticacaoService,
    public doacaoService: DoacaoService,
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
    this.listaDoacoesGeral();
  }

  onSubmit() {
    this.listaDoacoesFiltro();
  }

  cleanFilters() {
    this.listaDoacoesGeral();
  }

  listaDoacoesFiltro() {
    this.cleanFilter = true;
    let params = new HttpParams()
      .set("tipo", this.filtroForm.value.tipo)
      .set("sexo", this.filtroForm.value.sexo)
      .set("porte", this.filtroForm.value.porte)
      .set("idade", this.filtroForm.value.idade);

    this.doacaoService.getDoacoesFiltro(params).subscribe(data => {
      this.doacoes  = [];
      if (data.content.length > 0) {
        this.doacoes = data.content;

        this.config = {
          itemsPerPage: 10,
          currentPage: data.pageable.pageNumber,
          totalItems: data.totalElements
        };
      }
    });
  }

  listaDoacoesGeral() {
    this.cleanFilter = false;
    this.doacoes = [];
    this.doacaoService.getDoacoesGeral().subscribe(data => {

      if (data.content.length > 0) {
        this.doacoes = data.content;

        this.config = {
          itemsPerPage: 10,
          currentPage: data.pageable.pageNumber,
          totalItems: data.totalElements
        };
      }
    })
  }
}
