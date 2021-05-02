import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  accounts = [
    { name: 'Adam'},
    { name: 'Samantha'},
    { name: 'Amalie' },
    { name: 'Estefanía' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
