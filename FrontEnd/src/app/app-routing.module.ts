import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegisterComponent } from './register/register.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HomeComponent } from './home/home.component';
import { ThalappakkattiComponent } from './thalappakkatti/thalappakkatti.component';
import { A2BComponent } from './a2-b/a2-b.component';
import { CornerBakeryComponent } from './corner-bakery/corner-bakery.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
const routes: Routes = [
{path:'', component:LoginComponent},
{path:'loginsuccess', component:LoginsuccessComponent},
{path:'register', component:RegisterComponent},
{path:'hotellist', component:HotelListComponent}, 
{path:'home', component:HomeComponent},
{path:'thalappakkatti', component:ThalappakkattiComponent}, 
{path:'a2b', component:A2BComponent}, 
{path:'corner', component:CornerBakeryComponent},
{path:'order', component:OrdersuccessComponent}, 
{path:'addtocart',component:AddToCartComponent}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
