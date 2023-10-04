import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../model/product';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  
  //this Subject is going to emmit a string value, is working like an eventEmitter
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  //creating a product in db
  createProduct(product: { pName: string; desc: string; price: string }) {
    console.log(product);
    //sending Headers (meaning aditionall information we want to send in the response)
    const headers = new HttpHeaders({ myHeader: 'procademy' });
    //the post method will automatically convert the JS object 'product' in a json
    //and will the send this json object togheter with the request
    //post method is returning an observable, so we have to subscribe to it in order
    //to be able to retreive the data, and to send the request after
    //so we are sending a request and we are getting a response containing the json object

    //post(link, body, optional_parameters)
    this.http
      .post(
        'https://angular-b10df-default-rtdb.firebaseio.com/products.json',
        product,
        { headers: headers }
      )
      .subscribe((response) => {
        console.log(response);
      }, (err) => {
        //emiting the what is inside the 'err' variable (shortly we are emitting
        //the error's which occurs message)
        this.error.next(err.message);
      });
  }

  //fetch products from db
  fetchProduct() {

    //sending headers togheter with the http request
    const header = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Acces-Control', '*');

    //sending query params with the htpp request
    //this query param will format the json response of the request
    const params = new HttpParams()
    .set('print', 'pretty');

    //the response we are getting is going to look like this {[key: string]: Product}
    // key-value pairs; {[key: string]: Product} => key is a string , value is a Product
    // but it works without to specify it, angular is smart enough to do it by himself
    return this.http
      .get<{ [key: string]: Product }>(
        'https://angular-b10df-default-rtdb.firebaseio.com/products.json', {headers: header, params: params}
      )
      .pipe(
        map((response) => {
          const products = [];
          //key = id we are getting from database
          for (const key in response) {
            //for each key, we want to push the corresponding object in the products array
            //...response[key] is meaning that we are creating another object from current object
            //and stored it also in the current object
            if (response.hasOwnProperty(key)) {
              products.push({ ...response[key], id: key });
            }
          }
          return products;
        }),
        //We are using the catch error operator to handle the error which is returned
        //by the http response when we make the get request
        catchError((err) => {
            //write the logic for logging error

            //We also have to return that error, so like this the error will be handled
            //in the app.components.ts in the fetchProducts() method
            return throwError(err);
        })
      )
  }

  //delete a product from db
  deleteProduct(id: string) {
    let header = new HttpHeaders();
    header = header.append('my-header-1', 'value1');
    header = header.append('my-header-2', 'value2');

    this.http.delete('https://angular-b10df-default-rtdb.firebaseio.com/products/'+id+'.json', {headers: header})
    .subscribe();
  }

  //delete all products from db
  deleteAllProducts() {
    this.http.delete('https://angular-b10df-default-rtdb.firebaseio.com/products.json')
    .subscribe();
  }

  //update products in database
  updateProduct(id: string, value: Product){
    this.http.put('https://angular-b10df-default-rtdb.firebaseio.com/products/'+id+'.json', value)
    .subscribe();
  }
}
