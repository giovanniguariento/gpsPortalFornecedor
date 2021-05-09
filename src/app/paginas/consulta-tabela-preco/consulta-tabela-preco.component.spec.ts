import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsultaTabelaPrecoComponent } from './consulta-tabela-preco.component';

describe('ConsultaTabelaPrecoComponent', () => {
  let component: ConsultaTabelaPrecoComponent;
  let fixture: ComponentFixture<ConsultaTabelaPrecoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTabelaPrecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTabelaPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
