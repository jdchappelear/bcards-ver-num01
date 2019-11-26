import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CustomerService } from '../customer.service';
import { map } from 'rxjs/operators';
 
@Component({
  selector: 'app-businesscards',
  templateUrl: './businesscards.component.html',
  styleUrls: ['./businesscards.component.css']
})
export class BusinesscardsComponent implements OnInit {

  customers: any;

  constructor(private authService: AuthService, private customerService: CustomerService) { }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.getCustomersList();
  }
  getCustomersList() {
    this.customerService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(customers => {
      this.customers = customers;
    });
  }
 
  deleteCustomers() {
    this.customerService.deleteAll();
  }
 
}
