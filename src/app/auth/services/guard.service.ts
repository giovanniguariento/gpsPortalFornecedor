import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
public logado = localStorage.getItem('userLogin')
  constructor(private router : Router) { }

  public canActivate(): boolean {

    if(localStorage.getItem('userLogin') == 'true'){
return true
    }

    

    this.router.navigate ( ['/auth/login'] );

    //Lógica para conferir se vai entrar 

  }
}
