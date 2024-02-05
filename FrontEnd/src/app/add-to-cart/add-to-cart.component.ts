import { Component } from '@angular/core';
import { ThalappakkattiComponent } from '../thalappakkatti/thalappakkatti.component';
import { CartService } from '../cart-service';
import { FoodItem } from '../../food-item.model';
@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
  cartItems:FoodItem[]=[]; 
  constructor(private cartService:CartService)
  {
      this.cartItems=this.cartService.getCartItems(); 
  }
  calculateGrandTotal(): number {
    // Assuming 'totalprice' is a property on each FoodItem
    return this.cartItems.reduce((total, item) => total + item.totalprice, 0);
  }

}
