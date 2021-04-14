import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTitulosPagosComponent } from './consulta-titulos-pagos.component';

describe('ConsultaTitulosPagosComponent', () => {
  let component: ConsultaTitulosPagosComponent;
  let fixture: ComponentFixture<ConsultaTitulosPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTitulosPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTitulosPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
