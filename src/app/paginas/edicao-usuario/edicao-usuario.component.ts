import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edicao-usuario',
  templateUrl: './edicao-usuario.component.html',
  styleUrls: ['./edicao-usuario.component.scss']
})
export class EdicaoUsuarioComponent implements OnInit {

  @Input() editarUsuario: boolean = true;
  @Output() alertFechou = new EventEmitter();

  public form: FormGroup;

  public mensagemSenha: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();

  }

  private createForm() {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
      tipoAcesso: ['1', [Validators.required]],
      status: ['1', [Validators.required]],
        });
  }

  fechar() { 
    this.alertFechou.emit('Fechou'); 
  }

  public cancelar(){
    this.alertFechou.emit('Fechou');
  }


}


