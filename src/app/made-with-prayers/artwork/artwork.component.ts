import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
  // animations: [
  //   trigger('slide', [
  //     transition(':enter', [
  //       style({ transform: 'translateY(-50%)' }),
  //       animate('0.5s')
  //     ]),
  //     transition(':leave', [
  //       animate('0.5s', style({ transform: 'translateY(-50%)' }))
  //     ]),
  //     state('paused', style({ animationPlayState: 'paused' })),
  //     state('running', style({ animationPlayState: 'running' })),
  //     animate('0.5s')
  //   ])
  // ]
})
export class ArtworkComponent implements OnInit {
  images :string []= [
    // "https://picsum.photos/300/300?random=1",
    // "https://picsum.photos/300/300?random=2",
    // "https://picsum.photos/300/300?random=3",
    // "https://picsum.photos/300/300?random=4",
    // "https://picsum.photos/300/300?random=5",
    // "https://picsum.photos/300/300?random=6",
    // "https://picsum.photos/300/300?random=7",
    // "https://picsum.photos/300/300?random=8",
  ]
  
  ngOnInit(): void {
    this.getImages();
  }

  constructor(private api: ApiService) {
    //
  }
  
  getImages(){
    this.api.getPublishedImages().subscribe({
      next: (i) => {    
        if(i.success && i.result){
          this.images = i.result.map(function(img){return img.url})
        }
      }
    })
      
  }
  

  isWithinColumn(columnNumber:number, index: number){
    if(columnNumber == 1){
      return index < 4;
    }

    if(columnNumber == 2) {
      return index < 8 && index >=4;
    }

    return false;
  }

  isOdd: boolean = false;
  animationState: string = 'running';

  onMouseEnter() {
    //this.animationState = 'paused';
  }

  onMouseLeave() {
    // this.animationState = 'running';
  }
}
