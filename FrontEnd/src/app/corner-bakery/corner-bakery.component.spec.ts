import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerBakeryComponent } from './corner-bakery.component';

describe('CornerBakeryComponent', () => {
  let component: CornerBakeryComponent;
  let fixture: ComponentFixture<CornerBakeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CornerBakeryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CornerBakeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
