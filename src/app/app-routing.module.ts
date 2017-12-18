import { LancamentoCadastroComponent } from './lancamento/lancamento-cadastro/lancamento-cadastro.component';
import { ExtratoDataTableComponent } from './extratos/extrato-data-table/extrato-data-table.component';
import { ContasCadastroComponent } from './contas/contas-cadastro/contas-cadastro.component';
import { ContasDataTableComponent } from './contas/contas-data-table/contas-data-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// rotas da aplicação
const routes: Routes = [
  { path: 'contas', component: ContasDataTableComponent },
  { path: 'contas/novo', component: ContasCadastroComponent },
  { path: 'contas/:codigo', component: ContasCadastroComponent },
  // { path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
  { path: 'lancamentos', component: LancamentoCadastroComponent },
  { path: 'lancamentos/novo', component: LancamentoCadastroComponent },
  { path: 'extratos', component: ExtratoDataTableComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
