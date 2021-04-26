import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isShowMenu = localStorage.getItem('userLogin');


  constructor( private authService : AuthService) { }

  ngOnInit() {
    this.authService.getShowMenuControl()
    .subscribe(
      (data : any) => { this.isShowMenu = data; }
    );
  }

}
