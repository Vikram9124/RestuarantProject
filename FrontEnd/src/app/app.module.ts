import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegisterComponent } from './register/register.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ThalappakkattiComponent } from './thalappakkatti/thalappakkatti.component';
import { A2BComponent } from './a2-b/a2-b.component';
import { CornerBakeryComponent } from './corner-bakery/corner-bakery.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginsuccessComponent,
    RegisterComponent,
    HotelListComponent,
    HomeComponent,
    ThalappakkattiComponent,
    A2BComponent,
    CornerBakeryComponent,
    OrdersuccessComponent,
    AddToCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
    RouterModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot({ timeOut: 2000,  preventDuplicates: true }),
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
