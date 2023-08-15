import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, Payment, PayResult } from '../api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  model: Payment = {
    amt: 5, name: '', email: '', cc: '', expiry: '', ccv: ''
  }
  busy = false;
  error = false;

  constructor(
    private route: ActivatedRoute, 
    private api: ApiService,
    private router: Router) {
    //
  }

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.model.amt = params['amt'];
      });
  }

  pay() {
    this.error = false;
    this.busy = true;
    if(+this.model.amt === 4.99) this.router.navigateByUrl('/my-prayer');
    else{
      this.model.expiry = this.model.expiry.replace('/','');
      this.api.pay(this.model).subscribe({ 
        next: (v) => {
          this.busy = false;
          if (v.success) {
            this.router.navigate(['/my-prayer'], { state: { name: this.model.name, email: this.model.email }});
          } else {
            this.error = true;
          }
        },
        error: (e) => {
          this.error = true;
          this.busy = false;
        }
      });
    }
  }
}
