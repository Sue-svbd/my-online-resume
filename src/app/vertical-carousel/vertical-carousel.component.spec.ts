import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCarouselComponent } from './vertical-carousel.component';

describe('VerticalCarouselComponent', () => {
  let component: VerticalCarouselComponent;
  let fixture: ComponentFixture<VerticalCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalCarouselComponent]
    });
    fixture = TestBed.createComponent(VerticalCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
