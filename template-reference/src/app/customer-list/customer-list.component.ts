import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  selectedCustomer?: Customer;

  customers: Customer[] = [

    {customerNo: 1, name: 'Mark Vought', adress: '', city: 'London', country: 'UK'},
    {customerNo: 2, name: 'John Smith', adress: '', city: 'London', country: 'UK'},
    {customerNo: 3, name: 'Merry Ann', adress: '', city: 'London', country: 'UK'},
    {customerNo: 4, name: 'Rajesh Khatry', adress: '', city: 'London', country: 'UK'},
    {customerNo: 5, name: 'Rahul Raj', adress: '', city: 'London', country: 'UK'}
  ];

}
