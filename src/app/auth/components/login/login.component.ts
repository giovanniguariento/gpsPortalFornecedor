import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public cnpj : any;
  public senha : any;
  constructor(private router: Router,private authService : AuthService) { }

  ngOnInit() {
    this.authService.getShowMenuControl().next(false);
    
  }

  public logar(){
    localStorage.setItem('userLogin' , 'true')

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 0);
    this.authService.getShowMenuControl().next(true);
    

  }

  
  revelaEscondeSenha() {
    const inputSenha = document.querySelector('#inputSenha') as HTMLInputElement;
    const iconeOlho = document.querySelector('#iconeOlho') as HTMLInputElement;

    if (inputSenha.type == 'password') {
      inputSenha.type = 'text';
      iconeOlho.classList.remove('fa-eye');
      iconeOlho.classList.add('fa-eye-slash');
    } else {
      inputSenha.type = 'password';
      iconeOlho.classList.remove('fa-eye-slash');
      iconeOlho.classList.add('fa-eye');
    }
  }

}
