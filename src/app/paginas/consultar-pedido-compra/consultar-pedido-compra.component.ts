import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

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

  public ajuste = 'open';
  
  public filterResouce: any = [];
  public term: any;
  public searchTextFilterUsers = [];

  accounts = [
    { cnpjForn: '55.122.258/0001-52', cnpj: '13.235.417/0001-85', nomeGps: 'Pro guarda', numeroPed: '5835' },
    { cnpjForn: '39.819.977/0001-70', cnpj: '97.587.031/0001-22', nomeGps: 'In-Haus - Inteligência em Logística', numeroPed: '9214' },
    { cnpjForn: '88.477.779/0001-81', cnpj: '82.163.747/0001-25', nomeGps: 'Lc restaurantes', numeroPed: '7272' },
  ];
  constructor( private menuService : MenuService) { }

  ngOnInit() {

    this.menuService.emitirMenu.subscribe(
      (menu) => {
        this.ajuste = menu;
      }
    );  
    
  }

  public searchUserFilter() {

    this.searchTextFilterUsers = this.term;

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
