import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input() loading: boolean = true;
  @Input() message;

  public get messageString() : string {
    if (this.message) {
      return this.message;
    }
    return 'Por favor aguarde ...';
  }


  constructor() { }

  ngOnInit() {
  }

}
