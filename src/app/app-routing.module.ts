import { ConsultaTabelaPrecoComponent } from './paginas/consulta-tabela-preco/consulta-tabela-preco.component';
import { GerarPedidoCompraComponent } from './paginas/gerar-pedido-compra/gerar-pedido-compra.component';
import { ConsultaTitulosPagosComponent } from './paginas/consulta-titulos-pagos/consulta-titulos-pagos.component';
import { GuardService } from './auth/services/guard.service';

import { ConsultarPedidoCompraComponent } from './paginas/consultar-pedido-compra/consultar-pedido-compra.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportarNotaFiscalComponent } from './paginas/importar-nota-fiscal/importar-nota-fiscal.component';

const routes: Routes = [
  {path:  'home', component : HomeComponent, canActivate : [GuardService]},
  {path:  'ConsultarPedidosCompra', component : ConsultarPedidoCompraComponent, canActivate : [GuardService]},
  {path:  '', component : HomeComponent, canActivate : [GuardService]},  
  {path:  'Consultar-Titulos', component : ConsultaTitulosPagosComponent, canActivate : [GuardService]},
  {path:  'GerarPedidoCompra', component : GerarPedidoCompraComponent, canActivate : [GuardService]},
  {path:  'Atualizar-Tabela-Preco', component : ConsultaTabelaPrecoComponent, canActivate : [GuardService]},
  {path:  'Importar-Nota-Fiscal', component : ImportarNotaFiscalComponent, canActivate : [GuardService]},




  { path: 'auth', loadChildren : () => import( './auth/auth.module' ).then ( m =>m.AuthModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
