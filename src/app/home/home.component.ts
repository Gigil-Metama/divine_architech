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

  closePopup(){
    this.showPopup = false;
  };
  
  continue(){
    this.router.navigateByUrl('/made-with-prayers');
  };
}
