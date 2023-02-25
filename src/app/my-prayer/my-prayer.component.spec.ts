import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrayerComponent } from './my-prayer.component';

describe('MyPrayerComponent', () => {
  let component: MyPrayerComponent;
  let fixture: ComponentFixture<MyPrayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPrayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
