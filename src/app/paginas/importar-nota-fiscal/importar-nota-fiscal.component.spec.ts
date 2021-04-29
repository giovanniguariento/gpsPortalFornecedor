import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarNotaFiscalComponent } from './importar-nota-fiscal.component';

describe('ImportarNotaFiscalComponent', () => {
  let component: ImportarNotaFiscalComponent;
  let fixture: ComponentFixture<ImportarNotaFiscalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportarNotaFiscalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarNotaFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
