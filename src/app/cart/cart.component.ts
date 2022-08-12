import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart} from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getCartItem();
  total = this.cartService.getTotalPrice();
  cartItem: Cart | undefined;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  clear(pid: any) {
    let index = this.items.findIndex(item => item.id === pid);
    this.items.splice(index, 1)
  }
  clearCart() {
    this.items = [];
    this.total = 0;
    return this.items;
  }
}
