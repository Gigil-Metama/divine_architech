import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface FixedAmount {
  amount: number;
  selected: boolean;
}

@Component({
  selector: 'app-made-with-prayers',
  templateUrl: './made-with-prayers.component.html',
  styleUrls: ['./made-with-prayers.component.scss']
})

export class MadeWithPrayersComponent {
  custom_placeholder="OTHER AMOUNT";
  showDonation: boolean = false;
  customAmount: string = '';
  fixedAmounts: FixedAmount[] = [ 
    { amount: 5, selected: true },
    { amount: 10, selected: false },
    { amount: 20, selected: false },
    { amount: 50, selected: false }
  ];

  constructor(private router: Router) {
    //
  }

  toggleDonate(): void {
    this.showDonation = !this.showDonation;
  }

  setDonation(amt: FixedAmount) {
    for (let a of this.fixedAmounts) {
      if (a.amount == amt.amount) {
        a.selected = true;
        this.customAmount = '';
      } else {
        a.selected = false;
      }
    }
  }

  onPropertyChange(ca: any): void {
    if (ca.viewModel != '' || ca.invalid) {
      for (let a of this.fixedAmounts) {
        a.selected = false;
      }
    }
  }

  onFocus(): void{
    this.custom_placeholder = "";
  }

  onFocusOut(): void{
    if( +this.customAmount < 4.99 || this.customAmount.trim() === "" ){
      this.custom_placeholder = "OTHER AMOUNT";
      this.customAmount = "";
    }
  }

  proceed() {
    let amt = this.customAmount;
    if (amt === '') {
      for (let fa of this.fixedAmounts) {
        if (fa.selected) {
          amt = ''+fa.amount;
        }
      }
    }
    this.router.navigateByUrl('/credit-card-portal?amt='+amt);
  }
}
