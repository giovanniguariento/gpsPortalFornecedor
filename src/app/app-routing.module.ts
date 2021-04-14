import { GuardService } from './auth/services/guard.service';

import { ConsultarPedidoCompraComponent } from './paginas/consultar-pedido-compra/consultar-pedido-compra.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:  'home', component : HomeComponent, canActivate : [GuardService]},
  {path:  'ConsultarPedidosCompra', component : ConsultarPedidoCompraComponent, canActivate : [GuardService]},
  {path:  '', component : HomeComponent, canActivate : [GuardService]},  
  { path: 'auth', loadChildren : () => import( './auth/auth.module' ).then ( m =>m.AuthModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
