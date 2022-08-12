import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, products } from './products';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartitems: Product[] = [];

  totalprice = 0;
  event: EventEmitter<null> = new EventEmitter();

  constructor() { }

  notifyDataChange() {
    this.event.emit();
  }

  addToCart(p: Product) {
    this.cartitems.push(p);
    // add p.price to totalprice
    this.totalprice += p.price;
    this.notifyDataChange();
  }

  getCartItem() {
    return this.cartitems;
  }

  getCartItemCount() {
    return this.cartitems.length;
  }

  getTotalPrice() {
    return this.totalprice;
  }

  clearCart() { 
    this.cartitems = [];
    return this.cartitems;
  }
  
  deleteItem(pid: Number) { }
}
