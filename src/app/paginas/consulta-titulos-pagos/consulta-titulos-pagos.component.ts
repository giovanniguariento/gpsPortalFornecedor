import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-titulos-pagos',
  templateUrl: './consulta-titulos-pagos.component.html',
  styleUrls: ['./consulta-titulos-pagos.component.scss']
})
export class ConsultaTitulosPagosComponent implements OnInit {

  accounts = [
    { cnpjForn: '55.122.258/0001-52', cnpj: '13.235.417/0001-85', status: 'Aberto', numeroPed: '5835' },
    { cnpjForn: '39.819.977/0001-70', cnpj: '97.587.031/0001-22', status: 'Pendente xml', numeroPed: '9214' },
    { cnpjForn: '88.477.779/0001-81', cnpj: '82.163.747/0001-25', status: 'Aberto', numeroPed: '7272' },
  ];

  resource;

  public importarNota = false;

  constructor() { }

  ngOnInit() {
this.teste();

  }


  teste(){

    this.resource = this.accounts
    for (let i = 0; i < this.resource.length; i++) {
      this.resource[i].status
      console.log(this.resource[i].status)
    }
  }

  public abrirImportarNota() {
    this.importarNota = true;
  }

  fecharImportarNota(evento: string) {
    this.importarNota = false;
  }

}
