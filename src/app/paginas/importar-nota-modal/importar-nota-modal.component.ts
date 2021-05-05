import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-importar-nota-modal',
  templateUrl: './importar-nota-modal.component.html',
  styleUrls: ['./importar-nota-modal.component.scss']
})
export class ImportarNotaModalComponent implements OnInit {

  
@Input() importarNota: boolean = false;
@Output() alertFechou = new EventEmitter();

@ViewChild('inputFile', { static: true })
public inputFile: ElementRef;

public file = new FormData();
public nomeArquivo: string = 'Selecionar arquivo';
public comparador: any;
public ultimo: any;
public checkArquivo: boolean = false;
public empresa: any = localStorage.idEmpresaLogada;

public numeroPedido;
public pedido = '';
public form: FormGroup;

public tipoArquivo: any;

constructor(
  private Toastr: ToastrService,
  private formBuilder: FormBuilder,
) { }

ngOnInit(): void {
  this.createForm();
}

private createForm() {
  this.form = this.formBuilder.group({
    file: ['', [Validators.required]],
  });
}

public capturarArquivo(event: any) {
  this.file = new FormData();
  this.nomeArquivo = 'Selecionar arquivo';
  if (event.target.files && event.target.files[0]) {
    const arquivo = event.target.files[0];

    this.file.append('file', arquivo);

    this.nomeArquivo = arquivo.name;
    this.comparador = arquivo.name.split('.');
    this.ultimo = this.comparador[this.comparador.length - 1];
    if (this.ultimo == 'xml') {
      this.checkArquivo = true;
      this.Toastr.success(this.nomeArquivo + ' carregado com sucesso', '', {
        timeOut: 2000,
      });
    } else {
      this.checkArquivo = false;
      this.Toastr.error(this.nomeArquivo + ' possui formato inválido !', '', {
        timeOut: 2000,
      });
    }
  } else {
    this.Toastr.error('Carregue um arquivo', '', {
      timeOut: 2000,
    });
  }
}

public cancelarCapturaArquivo() {
  this.checkArquivo = false;
  this.pedido = '';
  this.numeroPedido = null;

  if (this.nomeArquivo != 'Selecionar arquivo') {
    this.Toastr.error('Arquivo excluido', '', {
      timeOut: 2000,
    });
    this.nomeArquivo = 'Selecionar arquivo';
  }
  this.inputFile.nativeElement.value = ``;
  this.fechar();
}


fechar() { 
  this.alertFechou.emit('Fechou'); 
}

postDados() {
  console.log(this.file)

}

}
