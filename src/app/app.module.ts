import { GenericoModule } from './genericos/generico/generico.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsultarPedidoCompraComponent } from './paginas/consultar-pedido-compra/consultar-pedido-compra.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultarPedidoCompraComponent,    
    MenuComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    GenericoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
