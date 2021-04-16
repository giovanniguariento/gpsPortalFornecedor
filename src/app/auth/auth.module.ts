import { PaginasModule } from './../paginas/paginas/paginas.module';
import { SharedModule } from './../shared/shared.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';


@NgModule({
  declarations: [LoginComponent, EsqueciSenhaComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    PaginasModule
  ]
})
export class AuthModule { }
