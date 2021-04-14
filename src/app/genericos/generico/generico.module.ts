import { ErrorComponent } from './../error/error.component';
import { SuccessComponent } from './../success/success.component';
import { LoadingComponent } from './../loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericoRoutingModule } from './generico-routing.module';


@NgModule({
  declarations: [LoadingComponent , SuccessComponent , ErrorComponent],
  imports: [
    CommonModule,
    GenericoRoutingModule
  ],
  exports : [
    LoadingComponent,
    SuccessComponent,
    ErrorComponent
  ]
})
export class GenericoModule { }
