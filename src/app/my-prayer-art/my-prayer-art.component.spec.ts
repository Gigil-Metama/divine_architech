import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrayerArtComponent } from './my-prayer-art.component';

describe('MyPrayerArtComponent', () => {
  let component: MyPrayerArtComponent;
  let fixture: ComponentFixture<MyPrayerArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPrayerArtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPrayerArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
