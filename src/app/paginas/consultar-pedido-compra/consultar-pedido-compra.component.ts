import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-pedido-compra',
  templateUrl: './consultar-pedido-compra.component.html',
  styleUrls: ['./consultar-pedido-compra.component.scss']
})
export class ConsultarPedidoCompraComponent implements OnInit {

  public detalhesCompra = false;

  public loading: boolean = false;
  public alertSucesso: boolean = false;
  public error: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  public abrirDetalhesCompra() {
    this.detalhesCompra = true;
  }


  fecharDetalhesCompra(evento: string) {
    this.detalhesCompra = false;
  }

    // Fechar o alerta de sucesso, clicando no botão OK
    fecharAlertSucesso(evento: string) {
      this.alertSucesso = false;
    }
  
    // Fechar o alerta de error, clicando no botão OK
    fecharerror(evento: string) {
      this.error = false;
    }

}
