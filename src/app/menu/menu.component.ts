import { AuthService } from './../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isShowMenu = localStorage.getItem('userLogin');
  openMenu = localStorage.getItem('menu');

  constructor(private authService : AuthService, private router: Router , private menuService : MenuService) { 

  }

  ngOnInit() {
    this.authService.getShowMenuControl()
      .subscribe(
        (data : any) => { this.isShowMenu = data; }
      );

      this.menuService.emitirMenu.subscribe(
        (menu) => {
          this.openMenu = menu;
        }
      );
      
  }

}
