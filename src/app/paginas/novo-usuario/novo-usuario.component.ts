import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {
  @Input() novoUsuario: boolean = true;
  @Output() alertFechou = new EventEmitter();

  public form: FormGroup;

  public senha: string;
  public confirmarSenha: string;
  public forca: number = 0;
  public senhaForca: any;
  public confereSenha: boolean = false;
  public informarCaracter: string = '';
  public informarLetras: string = '';
  public informarNumeros: string = '';
  public confereNumero: boolean = false;

  public mensagemSenha: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();

  }

  clickClose(event) {
    let classClose = event.target.className.split(' ');
    event.target

    if (classClose[0] == 'body-alert') {
      this.fechar();
    }
  }

  private createForm() {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
      tipoAcesso: ['1', [Validators.required]],
      senha: [null, [Validators.required]],
      confirmarSenha: [null, [Validators.required]],
    });
  }

  fechar() {
    this.alertFechou.emit('Fechou');
  }

  public forcaSenha() {
    this.forca = 0;

    if (
      this.form.value.senha.length >= 1 &&
      this.form.value.senha.length <= 5
    ) {
      this.forca += 10;
    } else if (this.form.value.senha.length >= 9) {
      this.forca += 16;
    }

    if (this.form.value.senha.length > 0 && this.form.value.senha.length < 9) {
      this.forca += 10;
    }

    if (
      (this.form.value.senha.length >= 5 &&
        this.form.value.senha.match(/[a-z]+/)) ||
      this.form.value.senha.match(/[A-Z]+/)
    ) {
      this.forca += 8;
    }

    if (
      this.form.value.senha.length >= 5 &&
      this.form.value.senha.match(/[0-9]+/)
    ) {
      this.forca += 8;
    }

    if (
      this.form.value.senha.length >= 7 &&
      this.form.value.senha.match(/[@#$%&;*]/)
    ) {
      this.forca += 25;
    }
    this.informarRegras();
    this.mostrarForca();
  }

  public mostrarForca() {
    if (this.forca < 30) {
      this.senhaForca = 'Fraca';
    } else if (this.forca >= 30 && this.forca < 50) {
      this.senhaForca = 'Moderada';
    } else if (this.forca >= 50) {
      this.senhaForca = 'Forte';
    }
  }

  public informarRegras() {
    if (this.form.value.senha.length < 9) {
      this.informarCaracter = 'Sua senha deve ter no mínimo 9 caracteres.';
    }

    if (
      !this.form.value.senha.match(/[a-z]+/) ||
      this.form.value.senha.match(/[A-Z]+/)
    ) {
      this.informarLetras = 'Sua senha deve conter letras';
    }

    if (!this.form.value.senha.match(/[0-9]+/)) {
      this.informarNumeros = 'Sua senha deve conter números.';
      this.confereNumero = true;
    }

    if (this.form.value.senha.length >= 9) {
      this.informarCaracter = ' ';
    }

    if (
      this.form.value.senha.match(/[a-z]+/) ||
      this.form.value.senha.match(/[A-Z]+/)
    ) {
      this.informarLetras = ' ';
    }

    if (this.form.value.senha.match(/[0-9]+/)) {
      this.informarNumeros = ' ';
      this.confereNumero = false;
    }
  }

  senhasConferem() {
    var senha = this.form.value.senha;
    var repSenha = this.form.value.confirmarSenha;

    if (senha != repSenha && repSenha != null) {
      this.mensagemSenha = 'As senhas não conferem !';
      this.confereSenha = false;
    } else {
      this.mensagemSenha = '';
    }

    if (senha == repSenha) {
      this.confereSenha = true;
    }
  }


  revelaEscondeSenha() {
    const inputSenha = document.querySelector('#inputSenha1') as HTMLInputElement;
    const iconeOlho = document.querySelector('#iconeOlho1') as HTMLInputElement;

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

  revelaEscondeSenha2() {
    const inputSenha = document.querySelector('#inputSenha2') as HTMLInputElement;
    const iconeOlho = document.querySelector('#iconeOlho2') as HTMLInputElement;

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

  public cancelar() {
    this.informarCaracter = '';
    this.informarLetras = '';
    this.informarNumeros = '';
    this.forca = 0;
    this.form.reset();
    this.alertFechou.emit('Fechou');
  }

}