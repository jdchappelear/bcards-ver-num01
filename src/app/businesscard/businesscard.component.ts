import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-businesscard',
  templateUrl: './businesscard.component.html',
  styleUrls: ['./businesscard.component.css']
})
export class BusinesscardComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

   
  deleteCustomer() {
    this.customerService
      .deleteCustomer(this.customer.key)
      .catch(err => console.log(err));
  }

}
