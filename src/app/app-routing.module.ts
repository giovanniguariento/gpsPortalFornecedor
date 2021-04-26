import { ConsultaTabelaPrecoComponent } from './paginas/consulta-tabela-preco/consulta-tabela-preco.component';
import { ConsultaTitulosAbertoComponent } from './paginas/consulta-titulos-aberto/consulta-titulos-aberto.component';
import { GerarPedidoCompraComponent } from './paginas/gerar-pedido-compra/gerar-pedido-compra.component';
import { ConsultaTitulosPagosComponent } from './paginas/consulta-titulos-pagos/consulta-titulos-pagos.component';
import { GuardService } from './auth/services/guard.service';

import { ConsultarPedidoCompraComponent } from './paginas/consultar-pedido-compra/consultar-pedido-compra.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:  'home', component : HomeComponent, canActivate : [GuardService]},
  {path:  'ConsultarPedidosCompra', component : ConsultarPedidoCompraComponent, canActivate : [GuardService]},
  {path:  '', component : HomeComponent, canActivate : [GuardService]},  
  {path:  'ConsultaTitulos', component : ConsultaTitulosPagosComponent, canActivate : [GuardService]},
  {path:  'GerarPedidoCompra', component : GerarPedidoCompraComponent, canActivate : [GuardService]},
  {path:  'ConsultaTitulosAberto', component : ConsultaTitulosAbertoComponent, canActivate : [GuardService]},
  {path:  'Consulta-Tabela-Preco', component : ConsultaTabelaPrecoComponent, canActivate : [GuardService]},


  { path: 'auth', loadChildren : () => import( './auth/auth.module' ).then ( m =>m.AuthModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
