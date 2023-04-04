import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit{
  constructor(private api:ApiService ){

  }
  ngOnInit(): void {
    this.api.getTotalDonation().subscribe({
      next: (v) => {
        if(v.success){
          this.total_donations = v.result;
          // this.total_donations = 100000;
          this.compute_percent();
        }
      }
    })
  }


  total_donations: number = 0;
  goal: number = 250000;
  percent: number = 0;
  

  compute_percent(){
    this.percent =  this.total_donations/this.goal*100;
    // this.percent = 90;
    
  }
}
