import { Component } from '@angular/core';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-thalappakkatti',
  templateUrl: './thalappakkatti.component.html',
  styleUrl: './thalappakkatti.component.css'
})
export class ThalappakkattiComponent {
  cartCount:number=0; 
  foodItems = [
    
    
    { name: 'Chicken Biriyani',quantity:0,  totalprice:0, description: '|Serves 1|Medium spicy|Served with Boneless|', price: 200, image:"https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1.jpg" },
    { name: 'Mutton Biriyani', quantity:0,  totalprice:0, description: 'Slow-cooked aromatic rice layered with marinated mutton pieces in a delicate blend of whole spices, served with raita.brinjol, dhalcha and bread halwa [250 ml].', price: 315, image:"https://happietrio.com/wp-content/uploads/2023/10/MuttonBiryani1-480x270.jpg"},
    { name: 'Grilled Chicken',quantity:0,   totalprice:0, description: 'A scrumptious combo of lip smacking grilled chicken served along with side salad and mayo.', price: 265, image:"https://itsbenlifestyle.com/cdn/shop/products/KjG9PTTo1X.jpg?v=1701870634" },
    { name: 'Grilled Chicken',quantity:0,   totalprice:0, description: 'A scrumptious combo of lip smacking grilled chicken served along with side salad and mayo.', price: 265, image:"https://itsbenlifestyle.com/cdn/shop/products/KjG9PTTo1X.jpg?v=1701870634" },
    { name: 'Grilled Chicken',quantity:0,   totalprice:0, description: 'A scrumptious combo of lip smacking grilled chicken served along with side salad and mayo.', price: 265, image:"https://itsbenlifestyle.com/cdn/shop/products/KjG9PTTo1X.jpg?v=1701870634" },
    { name: 'Grilled Chicken',quantity:0,   totalprice:0, description: 'A scrumptious combo of lip smacking grilled chicken served along with side salad and mayo.', price: 265, image:"https://itsbenlifestyle.com/cdn/shop/products/KjG9PTTo1X.jpg?v=1701870634" },
    { name: 'Grilled Chicken',quantity:0,   totalprice:0, description: 'A scrumptious combo of lip smacking grilled chicken served along with side salad and mayo.', price: 265, image:"https://itsbenlifestyle.com/cdn/shop/products/KjG9PTTo1X.jpg?v=1701870634" },
    { name: 'Grilled Chicken',quantity:0,   totalprice:0, description: 'A scrumptious combo of lip smacking grilled chicken served along with side salad and mayo.', price: 265, image:"https://itsbenlifestyle.com/cdn/shop/products/KjG9PTTo1X.jpg?v=1701870634" },
    { name: 'Grilled Chicken',quantity:0,   totalprice:0, description: 'A scrumptious combo of lip smacking grilled chicken served along with side salad and mayo.', price: 265, image:"https://itsbenlifestyle.com/cdn/shop/products/KjG9PTTo1X.jpg?v=1701870634" },
  ];
  constructor(private cartservice:CartService)
  {

  }
  increaseQuantity(foodItem: any): void {
    foodItem.quantity = (foodItem.quantity) + 1;
    foodItem.totalprice=(foodItem.quantity)*(foodItem.price);
   
  }

  decreaseQuantity(foodItem: any): void {
    if (foodItem.quantity && foodItem.quantity > 0) {
      foodItem.quantity -= 1;
      foodItem.totalprice=(foodItem.totalprice)-(foodItem.price); 
    }
  }

  addToCart(foodItem: any): void {
   
    console.log('Added to cart:', foodItem);
    this.cartservice.add(foodItem); 
     this.updateCartCount(); 
  }
  updateCartCount():void
  {
   this.cartCount+=1;  
  }
  }