import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  no_of_variations = 0;
  max_variations = 3;
  disclaimerText1 ='I understand that by publishing this image on the gallery, I transfer the rights to Divine ArchiTech, allowing them to mint it as an NFT on the marketplace under their wallet in OpenSea.';
  disclaimerText2 = '* By allowing Divine ArchiTech to mint the image as an NFT, you are helping the cause to earn more funds via NFT sales.';
  state: {
    name: string;
    email: string;
  } = {
    name: '',
    email: ''
  }
  showPopup = false;

  constructor(private api: ApiService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.state = navigation?.extras.state as {
      name: string,
      email: string
    };
  }

  ngOnInit() {
    const url = localStorage.getItem('prayer');
    if ( url != null && url !== '') {
      this.url = url;
      this.prayer = localStorage.getItem('prayer-text');
      this.no_of_variations = 1;
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
      this.no_of_variations += 1;
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

  closePopup(){
    this.showPopup = false;
  }

  publishPrayer(){
    this.showPopup = true;
  }

  confirm(){
    if(this.url && this.url.length>0)
    {
      this.busy = true;
      this.api.publish(this.url, this.state.name, this.state.email).subscribe({
        next: (v) => {
          if(v.status){
            this.router.navigateByUrl('/made-with-prayers-thank-you');
          }
        },
        error: (e) => {
          this.busy = false;
        }
      }
      );
    }
  }
}
