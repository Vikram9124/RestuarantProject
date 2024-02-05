import { Injectable } from '@angular/core';
import { FoodItem } from '../food-item.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: FoodItem[] = [];
  
  add(item: FoodItem):void
  {
    this.cartItems.push(item); 
  }
  getCartItems():FoodItem[]
  {
     return this.cartItems; 
  }
}
