import { AuthService } from './../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isShowMenu = localStorage.getItem('userLogin');

  constructor(private authService : AuthService, private router: Router ) { 

  }

  ngOnInit() {
    this.authService.getShowMenuControl()
      .subscribe(
        (data : any) => { this.isShowMenu = data; }
      );
  }

  logout(){
    localStorage.removeItem('userLogin')
    this.router.navigate(['/auth/login'])
  }

}
