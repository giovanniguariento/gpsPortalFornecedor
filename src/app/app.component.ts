import { MenuService } from './services/menu.service';
import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portalFornecedor';

  isShowMenu = localStorage.getItem('userLogin');

    
  
    constructor( private menuService : MenuService , private authService : AuthService , private router: Router) { }
  
    ngOnInit() {

      this.authService.getShowMenuControl()
      .subscribe(
        (data : any) => { this.isShowMenu = data; }
      );
      
    }

    public abrirMenu(){

      this.menuService.abrirMenu()

    }

    logout(){
      localStorage.removeItem('userLogin')
      this.router.navigate(['/auth/login'])
    }
  
  }
