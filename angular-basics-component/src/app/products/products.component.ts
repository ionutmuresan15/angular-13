import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    {id:1, name: 'Minimalists Analog Watch', price: 109, color: 'Black', available: 'Available', image: '/assets/products/product-image-1.jpg'},
    {id:2, name: 'Hisense Ultra HD Smart Tv', price: 3339, color: 'Black', available: 'Available', image: '/assets/products/product-image-2.jpg'},
    {id:3, name: 'Apple Iphone 12', price: 1855, color: 'Black', available: 'Not Available', image: '/assets/products/product-image-3.jpg'},
    {id:4, name: 'LG Fully Automatic Washing Machine', price: 1765, color: 'White', available: 'Available', image: '/assets/products/product-image-4.jpg'},
    {id:5, name: 'LG Refrigerator with Door Cooling', price: 2815, color: 'White', available: 'Not Available', image: '/assets/products/product-image-5.jpg'},
    {id:6, name: 'DELL Inspiron One Ryzen 7', price: 2145, color: 'White', available: 'Available', image: '/assets/products/product-image-6.jpg'}
  ]

}
