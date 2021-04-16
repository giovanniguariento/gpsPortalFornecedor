import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss']
})
export class EsqueciSenhaComponent implements OnInit {

  @Input() esqueciSenha: boolean = true;
  @Output() alertFechou = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  fechar() { this.alertFechou.emit('Fechou'); }

}