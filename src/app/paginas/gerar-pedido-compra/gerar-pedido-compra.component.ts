import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerar-pedido-compra',
  templateUrl: './gerar-pedido-compra.component.html',
  styleUrls: ['./gerar-pedido-compra.component.scss']
})
export class GerarPedidoCompraComponent implements OnInit {
  
  public centroCusto;
  public localEntrega;
  public fornecedor;
  public produto;
  public valorUni = 10;
  public valorTotal;
  public quantidade;
  public regioesCadastradas: any = {
    'titulo': 'JSON x XML',
   };
  carrinho = false;

  constructor() { }

  ngOnInit() {
  }

  produtos(){
this.fornecedor = this.produto;

  }

  public valorTotalConta(){
    this.valorTotal = this.valorUni * this.quantidade;
  }

}
