import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2BComponent } from './a2-b.component';

describe('A2BComponent', () => {
  let component: A2BComponent;
  let fixture: ComponentFixture<A2BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A2BComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(A2BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
