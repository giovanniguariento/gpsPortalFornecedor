import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTitulosAbertoComponent } from './consulta-titulos-aberto.component';

describe('ConsultaTitulosAbertoComponent', () => {
  let component: ConsultaTitulosAbertoComponent;
  let fixture: ComponentFixture<ConsultaTitulosAbertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTitulosAbertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTitulosAbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
