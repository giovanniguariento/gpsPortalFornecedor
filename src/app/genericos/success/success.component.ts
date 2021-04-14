import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  @Input() successGenerico: boolean = false;
  @Output() alertFechou = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  fechar() { this.alertFechou.emit('Fechou'); }

}
