import { Component } from '@angular/core';

export interface PaymentModel {
  name: string;
  email: string;
  cc: string;
  expiry: string;
  ccv: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  model: PaymentModel = {
    name: '', email: '', cc: '', expiry: '', ccv: ''
  }
}
