import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GerarPedidoCompraComponent } from './gerar-pedido-compra.component';

describe('GerarPedidoCompraComponent', () => {
  let component: GerarPedidoCompraComponent;
  let fixture: ComponentFixture<GerarPedidoCompraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GerarPedidoCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerarPedidoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
