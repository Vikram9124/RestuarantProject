import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThalappakkattiComponent } from './thalappakkatti.component';

describe('ThalappakkattiComponent', () => {
  let component: ThalappakkattiComponent;
  let fixture: ComponentFixture<ThalappakkattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThalappakkattiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThalappakkattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
