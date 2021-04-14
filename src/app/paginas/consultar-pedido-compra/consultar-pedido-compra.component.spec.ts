import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPedidoCompraComponent } from './consultar-pedido-compra.component';

describe('ConsultarPedidoCompraComponent', () => {
  let component: ConsultarPedidoCompraComponent;
  let fixture: ComponentFixture<ConsultarPedidoCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPedidoCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPedidoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
