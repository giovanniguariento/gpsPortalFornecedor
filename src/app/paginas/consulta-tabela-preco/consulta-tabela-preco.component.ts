import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-tabela-preco',
  templateUrl: './consulta-tabela-preco.component.html',
  styleUrls: ['./consulta-tabela-preco.component.scss']
})
export class ConsultaTabelaPrecoComponent implements OnInit {

  public cnpj;
  public tabelaPreco;

  constructor() { }

  ngOnInit() {
  }

}
