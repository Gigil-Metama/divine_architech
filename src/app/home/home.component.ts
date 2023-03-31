import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.showPopup=true;
    }, 2000);
  }

  constructor(private router: Router){

  }

  showPopup=false;
  paragraph1: string = "Help build churches by generating and donating your own NFT.";
  paragraph2: string = "Turn your hopes into digital art through AI today.";

  closePopup(){
    this.showPopup = false;
  };
  
  continue(){
    this.router.navigateByUrl('/made-with-prayers');
  };
}
