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
    { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' },
    { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' },
    { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' },
    { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
