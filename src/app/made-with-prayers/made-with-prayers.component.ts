import { Component } from '@angular/core';

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
  showDonation: boolean = false;
  customAmount: string = '';
  fixedAmounts: FixedAmount[] = [ 
    { amount: 5, selected: true },
    { amount: 10, selected: false },
    { amount: 20, selected: false },
    { amount: 50, selected: false }
  ];

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

  proceed() {

  }
}
