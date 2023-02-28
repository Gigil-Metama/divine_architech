import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-my-prayer',
  templateUrl: './my-prayer.component.html',
  styleUrls: ['./my-prayer.component.scss']
})
export class MyPrayerComponent {
  prayer = '';
  popup = false;
  busy = false;

  constructor(private api: ApiService, private router: Router) {
    //
  }

  toggleTips() {
    this.popup = !this.popup;
  }

  generatePrayer() {
    this.busy = true;
    localStorage.removeItem('prayer');
    localStorage.setItem('prayer-text', this.prayer);
    this.api.generatePrayer(this.prayer).subscribe({ 
      next: (v) => {
        this.busy = false;
        if (v.success) {
          if (v.result && v.result.url) {
            localStorage.setItem('prayer', v.result.url);
          }
        }
        this.router.navigateByUrl('/made-with-prayers-art');
      },
      error: (e) => {
        this.busy = false;
        this.router.navigateByUrl('/made-with-prayers-art');
      }
    });
  }
}
