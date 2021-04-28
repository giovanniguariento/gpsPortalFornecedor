import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-tabela-preco',
  templateUrl: './consulta-tabela-preco.component.html',
  styleUrls: ['./consulta-tabela-preco.component.scss']
})
export class ConsultaTabelaPrecoComponent implements OnInit {

  public cnpj;
  public tabelaPreco;

  accounts = [
    { name: 'Adam', email: 'adam@email.com', age: 12, country: 'Aberto' },
    { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'Processado' },
    { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Negado' },
  ];


  constructor() { }

  ngOnInit() {
  }

}
