import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CalendarModule } from 'primeng/primeng';

import { SharedModule } from './../shared/shared.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';


import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    SelectButtonModule,
    DropdownModule,
    CalendarModule,

    CurrencyMaskModule,
    SharedModule
  ],
  declarations: [
    LancamentoCadastroComponent
  ],
  exports: [
    LancamentoCadastroComponent
  ]
})
export class LancamentoModule { }
