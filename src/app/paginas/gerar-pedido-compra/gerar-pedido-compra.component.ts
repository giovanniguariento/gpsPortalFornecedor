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

    accounts = [
        { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' },
        { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' },
        { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' },
        { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' }
    ];

    produtosTemp = [
      { name: 'Kalunga', filial: '03', produto : 'papel'},
      { name: 'Americanas', filial: '06', produto : 'caneta'},
      { name: 'Atacadao', filial: '03' ,produto : 'mesa'}
  ];

  constructor() { }

  ngOnInit() {
  }

  produtos(){
this.fornecedor = this.produto;

  }

  public valorTotalConta(){
    this.valorTotal = this.valorUni * this.quantidade;
  }

  public cancelar(){
    this.fornecedor = null;
    this.produto = null;
  }

}
