import { MenuService } from './services/menu.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portalFornecedor';
    
  
    constructor( private menuService : MenuService) { }
  
    ngOnInit() {
    }

    public abrirMenu(){

      this.menuService.abrirMenu()

    }
  
  }
