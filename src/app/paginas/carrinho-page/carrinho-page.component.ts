import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carrinho-page',
  templateUrl: './carrinho-page.component.html',
  styleUrls: ['./carrinho-page.component.scss']
})
export class CarrinhoPageComponent implements OnInit {

  valorTotalCompra = 500;
  
  @Input() carrinho: boolean = true;
  @Output() alertFechou = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  fechar() { this.alertFechou.emit('Fechou'); }

}