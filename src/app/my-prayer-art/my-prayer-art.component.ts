import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-my-prayer-art',
  templateUrl: './my-prayer-art.component.html',
  styleUrls: ['./my-prayer-art.component.scss']
})
export class MyPrayerArtComponent implements OnInit {
  url = '/assets/sample-artwork.jpeg';
  prayer: string | null = '';
  busy = false;

  constructor(private api: ApiService) {
    //
  }

  ngOnInit() {
    const url = localStorage.getItem('prayer');
    if ( url != null && url !== '') {
      this.url = url;
      this.prayer = localStorage.getItem('prayer-text');
    }
  }

  imgNotFound() {
    this.url = '/assets/sample-artwork.jpeg';
    this.prayer = '';
    localStorage.removeItem('prayer');
    localStorage.removeItem('prayer-text');
  }

  imgLoaded() {
    this.busy = false;
  }

  makeVariation() {
    if (this.prayer != null && this.prayer != '') {
      this.busy = true;
      this.api.generatePrayer(this.prayer).subscribe({ 
        next: (v) => {
          if (v.success) {
            if (v.result && v.result.url) {
              localStorage.setItem('prayer', v.result.url);
              this.url = v.result.url;
            }
          }
        },
        error: (e) => {
          this.busy = false;
        }
      });
    }
  }
}
