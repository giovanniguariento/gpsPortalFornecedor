import { ConsultaTitulosPagosComponent } from './../consulta-titulos-pagos/consulta-titulos-pagos.component';
import { SharedModule } from './../../shared/shared.module';
import { ConsultarPedidoCompraComponent } from './../consultar-pedido-compra/consultar-pedido-compra.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerarPedidoCompraComponent } from '../gerar-pedido-compra/gerar-pedido-compra.component';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { CarrinhoPageComponent } from '../carrinho-page/carrinho-page.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConsultaTabelaPrecoComponent } from '../consulta-tabela-preco/consulta-tabela-preco.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { DetalhesCompraComponent } from '../detalhes-compra/detalhes-compra.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};@NgModule({
  declarations: [
    ConsultarPedidoCompraComponent , 
    ConsultaTitulosPagosComponent,
    GerarPedidoCompraComponent,
    CarrinhoComponent,
    CarrinhoPageComponent,
    ConsultaTabelaPrecoComponent,
    DetalhesCompraComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgSelectModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  exports : [
    CarrinhoComponent,
    CarrinhoPageComponent
  ]
})
export class PaginasModule { }
