import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalhes-compra',
  templateUrl: './detalhes-compra.component.html',
  styleUrls: ['./detalhes-compra.component.scss']
})
export class DetalhesCompraComponent implements OnInit {
  
  @Input() detalhesCompra: boolean = true;
  @Output() alertFechou = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  fechar() { this.alertFechou.emit('Fechou'); }

}