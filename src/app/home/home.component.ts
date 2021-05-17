import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loading: boolean = false;
  public alertSucesso: boolean = false;
  public error: boolean = false;
  openMenu = 'close';

  constructor( private menuService : MenuService) { }

  ngOnInit() {

    this.menuService.emitirMenu.subscribe(
      (menu) => {
        this.openMenu = menu;
      }
    ); 
  }

  // Fechar o alerta de sucesso, clicando no botão OK
  fecharAlertSucesso(evento: string) {
    this.alertSucesso = false;
  }

  // Fechar o alerta de error, clicando no botão OK
  fecharerror(evento: string) {
    this.error = false;
  }

  public abrirMenu(){
    this.menuService.abrirMenu()
  }

}
