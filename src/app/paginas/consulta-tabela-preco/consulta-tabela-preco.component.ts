import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
    // for (let i = 0; i < this.accounts.length; i++) {

    //   this.accounts[i].name;
    // }
  }

  public searchUserFilter() {

    this.searchTextFilterUsers = this.term;

}

}
