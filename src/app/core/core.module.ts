import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastyModule } from 'ng2-toasty';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { LancamentoService } from './../lancamento/lancamento.service';
import { ExtratoService } from './../extratos/extrato.service';
import { ContaService } from './../contas/conta.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot()
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastyModule
  ],
  providers: [
    ContaService,
    ExtratoService,
    LancamentoService,
     { provide: LOCALE_ID, useValue: 'pt-BR' },
    ErrorHandlerService
  ]
})
export class CoreModule { }
