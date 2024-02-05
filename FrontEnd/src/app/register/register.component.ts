import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user=new User(); 
  constructor(private router: Router, private service:RegistrationService)
  {

  }
  loginPage()
  {
    this.router.navigate(['']); 
  }
 onSubmit()
  {
    this.service.registerUser(this.user).subscribe
    (data=>{console.log("response recieved"); 
  }, 
  error=>{
    console.log("excepiton occured"); 
  }
    )
  }

}
