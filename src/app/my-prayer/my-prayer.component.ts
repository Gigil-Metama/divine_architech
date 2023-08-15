import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
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
  state: {
    name: string;
    email: string;
  } = {
    name: '',
    email: ''
  }

  constructor(private api: ApiService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.state = navigation?.extras.state as {
      name: string,
      email: string
    };
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
        this.router.navigate(['/made-with-prayers-art'], { state: { ...this.state } });
      },
      error: (e) => {
        this.busy = false;
        this.router.navigate(['/made-with-prayers-art'], { state: { ...this.state } });
      }
    });
  }
}
