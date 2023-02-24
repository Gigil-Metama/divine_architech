import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrayerThankYouComponent } from './my-prayer-thank-you.component';

describe('MyPrayerThankYouComponent', () => {
  let component: MyPrayerThankYouComponent;
  let fixture: ComponentFixture<MyPrayerThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPrayerThankYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPrayerThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
