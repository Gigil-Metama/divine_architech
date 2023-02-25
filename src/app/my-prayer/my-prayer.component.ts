import { Component } from '@angular/core';

@Component({
  selector: 'app-my-prayer',
  templateUrl: './my-prayer.component.html',
  styleUrls: ['./my-prayer.component.scss']
})
export class MyPrayerComponent {
  prayer = '';
  popup = false;

  toggleTips() {
    this.popup = !this.popup;
  }
}
