import { ConsultaTitulosPagosComponent } from './../consulta-titulos-pagos/consulta-titulos-pagos.component';
import { SharedModule } from './../../shared/shared.module';
import { ConsultarPedidoCompraComponent } from './../consultar-pedido-compra/consultar-pedido-compra.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ConsultarPedidoCompraComponent , ConsultaTitulosPagosComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PaginasModule { }
