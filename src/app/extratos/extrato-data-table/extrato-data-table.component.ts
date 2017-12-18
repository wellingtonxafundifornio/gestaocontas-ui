import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { LancamentoFilter } from './../../core/model';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { ExtratoService } from './../extrato.service';

@Component({
  selector: 'app-extratos-data-table',
  templateUrl: './extrato-data-table.component.html',
  styleUrls: ['./extrato-data-table.component.css']
})
export class ExtratoDataTableComponent implements OnInit {

  filtro = {dataInicial: null, dataFinal: null };
  lancamentoFilter = new LancamentoFilter();

  lancamentos = [];
  @ViewChild('tabela') grid;

  constructor(
    private router: Router,
    private extratoService: ExtratoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {

  }

  filtrar() {
    this.extratoService.filtrar(this.filtro)
      .then(lancamentos => {
        this.lancamentos = lancamentos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  buscarPorCodigoConta(codigo: number) {
    this.extratoService.buscarPorCodigoConta(codigo)
      .then(lancamentos => {
        this.lancamentos = lancamentos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

    // reseta o formulario
  novo(form: FormControl) {
     form.reset();

     setTimeout(function(){
      this.Lancamento = new LancamentoFilter();
     }.bind(this), 1 );


     this.router.navigate(['/extratos']);
  }


}
