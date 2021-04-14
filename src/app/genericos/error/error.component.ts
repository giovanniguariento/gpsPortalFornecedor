import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() error: boolean = false;
  @Output() alertFechou = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fechar() { this.alertFechou.emit('Fechou'); }


}
