import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-pedido-compra',
  templateUrl: './consultar-pedido-compra.component.html',
  styleUrls: ['./consultar-pedido-compra.component.scss']
})
export class ConsultarPedidoCompraComponent implements OnInit {

  public detalhesCompra = false;


  constructor() { }

  ngOnInit() {
  }

  public abrirDetalhesCompra() {
    this.detalhesCompra = true;
  }


  fecharDetalhesCompra(evento: string) {
    this.detalhesCompra = false;
  }

}
