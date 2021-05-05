import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarNotaModalComponent } from './importar-nota-modal.component';

describe('ImportarNotaModalComponent', () => {
  let component: ImportarNotaModalComponent;
  let fixture: ComponentFixture<ImportarNotaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportarNotaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarNotaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
