import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  emitirMenu = new EventEmitter<string>();

  constructor() { } 


  public abrirMenu(){

    if(localStorage.getItem('menu') == 'open'){
      localStorage.setItem('menu' , 'close')
      this.emitirMenu.emit(localStorage.menu)
    }
    else{
      localStorage.setItem('menu' , 'open');
      this.emitirMenu.emit(localStorage.menu)

    }
  }
}
