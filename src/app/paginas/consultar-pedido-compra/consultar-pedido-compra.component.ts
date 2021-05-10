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
    { name: 'Adam', cnpj: '13.235.417/0001-85', loja: 12, status: 'Vigente' },
    { name: 'Samantha', cnpj: '97.587.031/0001-22', loja: 30, status: 'Vigente' },
    { name: 'Amalie', cnpj: '82.163.747/0001-25', loja: 52, status: 'Vencido' },
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
