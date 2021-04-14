import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private showMenuControl : Subject<boolean> = new Subject<boolean>(  );

  constructor() { }

  getShowMenuControl(){
    return this.showMenuControl;
  }
}
