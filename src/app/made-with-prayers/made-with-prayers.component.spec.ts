import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeWithPrayersComponent } from './made-with-prayers.component';

describe('MadeWithPrayersComponent', () => {
  let component: MadeWithPrayersComponent;
  let fixture: ComponentFixture<MadeWithPrayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadeWithPrayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadeWithPrayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
