import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from 'src/app/services/menu.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-importar-nota-fiscal',
  templateUrl: './importar-nota-fiscal.component.html',
  styleUrls: ['./importar-nota-fiscal.component.scss']
})
export class ImportarNotaFiscalComponent implements OnInit {
  @ViewChild('inputFile', { static: true })
  public inputFile: ElementRef;

  //mapeamento do xml
  public numeroNotaFiscal;
  public dataEmissao;
  public cnpjEmissor;
  public nomeEmissor;
  public nomeDestinatario;
  public cnpjDestinatario;
  public produtos;
  public produtosServRio;

  public file = new FormData();
  public nomeArquivo: string = 'Selecionar arquivo';
  public comparador: any;
  public ultimo: any;
  public checkArquivo: boolean = false;
  public empresa: any = localStorage.idEmpresaLogada;

  public showFile: any;

  public numeroPedido;
  public pedido = '';
  public buscou = false;

  public form: FormGroup;
  public openMenu;

  public tipoArquivo: any;
  xml: any;

  constructor(
    private Toastr: ToastrService,
    private formBuilder: FormBuilder,
    private menuService : MenuService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.menuService.emitirMenu.subscribe(
      (menu) => {
        this.openMenu = menu;
      }
    ); 
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
      this.showFile = event.target.files[0];

      //console.log ( this.file );

      this.uploadDocument();

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

    this.produtosServRio = null;
    this.xml = null;
    this.numeroNotaFiscal = null;
    this.dataEmissao = null
    this.cnpjEmissor = null;
    this.nomeEmissor = null;
    this.nomeDestinatario = null;
    this.cnpjDestinatario = null;
    this.produtos = null;

    if (this.nomeArquivo != 'Selecionar arquivo') {
      this.Toastr.error('Arquivo excluido', '', {
        timeOut: 2000,
      });
      this.nomeArquivo = 'Selecionar arquivo';
    }
    this.inputFile.nativeElement.value = ``;
  }


  postDados() {
    console.log(this.file)

  }


  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.showFile = event.target.files[0];

      //console.log ( this.file );

      this.uploadDocument();
    }
  }

  uploadDocument() {

    let fileReader = new FileReader();
    fileReader.onload = e => {

      let modelJson = this.convertStringToJson(fileReader.result);

    };
    fileReader.readAsText(this.showFile);
  }

  convertStringToJson(stringModel) {

    const parser = new xml2js.Parser({ strict: false, trim: true });
    parser.parseString(stringModel, (err, result) => {
      this.xml = result;


      //produtos
      if (this.xml.NFEPROC != null) {
        this.numeroNotaFiscal = this.xml.NFEPROC.NFE[0].INFNFE[0].IDE[0].NNF[0];
        this.dataEmissao = this.xml.NFEPROC.NFE[0].INFNFE[0].IDE[0].DHEMI[0];
        this.cnpjEmissor = this.xml.NFEPROC.NFE[0].INFNFE[0].EMIT[0].CNPJ[0];
        this.nomeEmissor = this.xml.NFEPROC.NFE[0].INFNFE[0].EMIT[0].XNOME[0];
        this.nomeDestinatario = this.xml.NFEPROC.NFE[0].INFNFE[0].DEST[0].XNOME[0];
        this.cnpjDestinatario = this.xml.NFEPROC.NFE[0].INFNFE[0].DEST[0].CNPJ[0];
        this.produtos = this.xml.NFEPROC.NFE[0].INFNFE[0].DET;

      }

      //rio de janeiro servicos
      if(this.xml.INFRPS != null){
        this.numeroNotaFiscal = this.xml.INFRPS.IDENTIFICACAORPS[0].NUMERO[0]; 
        this.dataEmissao = this.xml.INFRPS.DATAEMISSAO[0];
        this.cnpjEmissor = this.xml.INFRPS.PRESTADOR[0].CNPJ[0];
        this.nomeDestinatario = this.xml.INFRPS.TOMADOR[0].RAZAOSOCIAL[0];
        this.cnpjDestinatario = this.xml.INFRPS.TOMADOR[0].IDENTIFICACAOTOMADOR[0].CPFCNPJ[0].CNPJ[0];
        this.produtosServRio = this.xml.INFRPS.SERVICO;
      }

      


    });
  }


}
