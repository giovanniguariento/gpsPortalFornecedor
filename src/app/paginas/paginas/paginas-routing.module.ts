import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from 'src/app/auth/services/guard.service';
import { ConsultarPedidoCompraComponent } from '../consultar-pedido-compra/consultar-pedido-compra.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
