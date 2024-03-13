import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPromotionCardComponent } from './FeedPromotionCardComponent';

describe('FeedPromotionCardComponent', () => {
  let component: FeedPromotionCardComponent;
  let fixture: ComponentFixture<FeedPromotionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedPromotionCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedPromotionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
