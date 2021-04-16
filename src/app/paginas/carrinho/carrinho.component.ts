import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  carrinho = false;

  constructor() { }

  ngOnInit() {
  }

  public abrirCarrinho() {
    this.carrinho = true;
  }

  fecharCarrinho(evento: string) {
    this.carrinho = false;
  }

}
