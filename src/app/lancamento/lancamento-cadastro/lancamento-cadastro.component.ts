import { ContaService } from './../../contas/conta.service';
import { LancamentoService } from './../lancamento.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { Lancamento } from './../../core/model';



@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  constructor(
    private contaService: ContaService,
    private lancamentoService: LancamentoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  operacoes = [{label: 'Crédito', value: 'Crédito'}, {label: 'Débito', value: 'Débito'}];

  contas = [];

lancamento = new Lancamento();

  ngOnInit() {
    this.carregarContas();
    console.log('A roda chegou em lançamentos com id: ', this.route.snapshot.params);
    console.log('Contas', this.contas);
  }

  get editando(){
    return Boolean(this.lancamento.codigo);
  }


  salvar(form: FormControl) {
    this.adicionarLancamento(form);
  }

  adicionarLancamento(form: FormControl) {
    console.log('Dados obtidos do formulario', this.lancamento);
    this.lancamentoService.adicionar(this.lancamento)
      .then(() => {
        this.toasty.success('Lancamento adicionado com sucesso!');

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarContas() {
    this.contaService.listarTodos()
      .then(contas => {
        this.contas = contas.map(c => ({ label: c.nome, value: c.codigo })
        );
      })
      .catch( erro => this.errorHandler.handle(erro));
      console.log(this.contas);
  }

  // reseta o formulario
  novo(form: FormControl) {
     form.reset();

     setTimeout(function(){
      this.Lancamento = new Lancamento();
     }.bind(this), 1 );


     this.router.navigate(['/lancamentos/novo']);
  }


}
