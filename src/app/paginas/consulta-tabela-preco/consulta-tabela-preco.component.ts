import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-consulta-tabela-preco',
  templateUrl: './consulta-tabela-preco.component.html',
  styleUrls: ['./consulta-tabela-preco.component.scss']
})
export class ConsultaTabelaPrecoComponent implements OnInit {

  public cnpj;
  public tabelaPreco;
  public dataVigencia = '13/08/1997';

  public filterResouce: any = [];
  public term: any;
  public searchTextFilterUsers = [];

  accounts = [
    { name: 'Adam', tabelaPreco: '50126', loja: 12, status: 'Vigente' },
    { name: 'Samantha', tabelaPreco: '13526', loja: 30, status: 'Vigente' },
    { name: 'Amalie', tabelaPreco: '75820', loja: 52, status: 'Vencido' },
  ];
  openMenu;

  constructor( private menuService : MenuService) { }

  ngOnInit() {
    // for (let i = 0; i < this.accounts.length; i++) {

    //   this.accounts[i].name;
    // }

    this.menuService.emitirMenu.subscribe(
      (menu) => {
        this.openMenu = menu;
      }
    ); 
  }

  public searchUserFilter() {

    this.searchTextFilterUsers = this.term;

}

}
