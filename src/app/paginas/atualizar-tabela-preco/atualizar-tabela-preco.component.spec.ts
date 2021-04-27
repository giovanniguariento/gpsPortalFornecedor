import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarTabelaPrecoComponent } from './atualizar-tabela-preco.component';

describe('AtualizarTabelaPrecoComponent', () => {
  let component: AtualizarTabelaPrecoComponent;
  let fixture: ComponentFixture<AtualizarTabelaPrecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarTabelaPrecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarTabelaPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
