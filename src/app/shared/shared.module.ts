import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PopoverModule } from 'ngx-smart-popover';
import { CnpjPipe } from '../pipes/cnpj.pipe';



@NgModule({
  declarations: [
    CnpjPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule
  ],
  exports : [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    PopoverModule,
    CnpjPipe
    
  ]
})
export class SharedModule { }
