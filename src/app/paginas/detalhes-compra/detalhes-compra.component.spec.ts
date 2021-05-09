import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetalhesCompraComponent } from './detalhes-compra.component';

describe('DetalhesCompraComponent', () => {
  let component: DetalhesCompraComponent;
  let fixture: ComponentFixture<DetalhesCompraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
