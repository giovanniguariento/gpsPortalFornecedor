import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public novoUsuario = false;
  public editarUsuario = false;

  accounts = [
    { name: 'Adam'},
    { name: 'Samantha'},
    { name: 'Amalie' },
    { name: 'Estefanía' }
  ];
  openMenu;
  constructor(private menuService : MenuService) { }

  ngOnInit() {

    this.menuService.emitirMenu.subscribe(
      (menu) => {
        this.openMenu = menu;
      }
    ); 
  }

  public abrirNovoUsuario() {
    this.novoUsuario = true;
  }

  fecharDetalhesCompra(evento: string) {
    this.novoUsuario = false;
  }

  public abrirEditarUsuario() {
    this.editarUsuario = true;
  }

  fecharEditarUsuario(evento: string) {
    this.editarUsuario = false;
  }

}
