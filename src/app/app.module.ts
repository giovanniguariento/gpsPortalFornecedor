import { SharedModule } from './shared/shared.module';
import { PaginasModule } from './paginas/paginas/paginas.module';
import { GenericoModule } from './genericos/generico/generico.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FooterComponent } from './paginas/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { EdicaoUsuarioComponent } from './paginas/edicao-usuario/edicao-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    MenuComponent, FooterComponent, EdicaoUsuarioComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    GenericoModule,
    PaginasModule,
    SharedModule,
    NgSelectModule,
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
