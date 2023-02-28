import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-prayer-art',
  templateUrl: './my-prayer-art.component.html',
  styleUrls: ['./my-prayer-art.component.scss']
})
export class MyPrayerArtComponent implements OnInit {
  url = '/assets/sample-artwork.jpeg';

  ngOnInit() {
    const url = localStorage.getItem('prayer');
    if ( url != null) {
      this.url = url; 
    }
  }
}
