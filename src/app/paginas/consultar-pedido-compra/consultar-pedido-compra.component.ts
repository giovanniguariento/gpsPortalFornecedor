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

  accounts = [1,2,3,4,5,6,7];

  constructor( private menuService : MenuService) { }

  ngOnInit() {

    this.menuService.emitirMenu.subscribe(
      (menu) => {
        this.ajuste = menu;
      }
    );  
    
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
