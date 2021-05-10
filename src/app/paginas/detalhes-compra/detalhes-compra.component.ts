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

  clickClose(event) {
    let classClose = event.target.className.split(' ');
    event.target
    
    if( classClose[0] == 'body-alert'){
      this.fechar();
    }
}

  fechar() { 
    this.alertFechou.emit('Fechou'); }

}