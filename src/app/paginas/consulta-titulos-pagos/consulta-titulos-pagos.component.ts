import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-titulos-pagos',
  templateUrl: './consulta-titulos-pagos.component.html',
  styleUrls: ['./consulta-titulos-pagos.component.scss']
})
export class ConsultaTitulosPagosComponent implements OnInit {

  public importarNota = false;

  constructor() { }

  ngOnInit() {
  }

  public abrirImportarNota() {
    this.importarNota = true;
  }

  fecharImportarNota(evento: string) {
    this.importarNota = false;
  }

}
