import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from './model/product';
import { ProductService } from './Service/products.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'angular-http';
  private http !: HttpClient ;
  private productService !: ProductService
  allProducts : Product[] = [];
  isFetching : boolean = false;
  errorMessage: string = null;
  errorSub: Subscription;

  currentProductId: string;

  @ViewChild('productsForm') form: NgForm;
  editMode: boolean = false;

  //injecting httpClient, and productService
  //but we are not using it anymore inside this file, because we have made another 
  //.service file
  constructor(http: HttpClient,productService: ProductService){
    this.http = http;
    this.productService = productService;
  }

  ngOnInit(){
    //when ever the page loads, we want to display all the products we have in the 
    //data base in that page
    this.fetchProducts();
    this.errorSub = this.productService.error.subscribe((message) => {
      this.errorMessage = message;
    })
  }

  onProductsFetch(){
    this.fetchProducts();
  }

  onProductCreate(product: {pName: string, desc: string, price: string}){
    if(this.editMode){
      this.productService.updateProduct(this.currentProductId, product)
    }
    else{
      this.productService.createProduct(product);
    }
    
  }

  //retriveing data from database
  private fetchProducts(){
    this.isFetching = true;
    this.productService.fetchProduct().subscribe((products) => {
      this.allProducts = products;
      this.isFetching = false;
      //Handling error response, if an error cause by that method will ocure 
      //then we will catch the error inside 'err' variable
    },(err) => {
      this.errorMessage = err.message;
    })
  }


  //deleting which product we want  from database base on its ID
  onDeleteProduct(id: string){
    this.productService.deleteProduct(id);
  }

  //deleting all products from database
  onDeleteAllProduct(){
    this.productService.deleteAllProducts();
  }

  onEditClicked(id: string){

    //Obtaining the current product base on his ID
    this.currentProductId = id;
    let currentProduct = this.allProducts.find((product) => {
      return product.id === id;
    })
    
    //Populate the form with the products details
    this.form.setValue({
      pName: currentProduct.pName,
      desc:  currentProduct.desc,
      price:  currentProduct.price,
    });

    //Change the button value to update product
    this.editMode = true;

  }

  //Always recomanded to unsubscribe from an Observable if you are not using it anymore
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

}
