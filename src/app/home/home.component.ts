import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loading: boolean = false;
  public alertSucesso: boolean = false;
  public error: boolean = false;


  constructor() { }

  ngOnInit() {
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
