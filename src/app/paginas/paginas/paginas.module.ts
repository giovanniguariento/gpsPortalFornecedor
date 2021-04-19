import { ConsultaTitulosPagosComponent } from './../consulta-titulos-pagos/consulta-titulos-pagos.component';
import { SharedModule } from './../../shared/shared.module';
import { ConsultarPedidoCompraComponent } from './../consultar-pedido-compra/consultar-pedido-compra.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerarPedidoCompraComponent } from '../gerar-pedido-compra/gerar-pedido-compra.component';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { CarrinhoPageComponent } from '../carrinho-page/carrinho-page.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    ConsultarPedidoCompraComponent , 
    ConsultaTitulosPagosComponent,
    GerarPedidoCompraComponent,
    CarrinhoComponent,
    CarrinhoPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgSelectModule
  ],
  exports : [
    CarrinhoComponent,
    CarrinhoPageComponent
  ]
})
export class PaginasModule { }
