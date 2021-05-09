import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsultarPedidoCompraComponent } from './consultar-pedido-compra.component';

describe('ConsultarPedidoCompraComponent', () => {
  let component: ConsultarPedidoCompraComponent;
  let fixture: ComponentFixture<ConsultarPedidoCompraComponent>;

  beforeEach(waitForAsync(() => {
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
