import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router'; // Import Router from Angular router module
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Fix the typo in styleUrls
})
export class LoginComponent implements OnInit {
  user = new User();

  constructor(private _service: RegistrationService,
     private router: Router, 
     private toastrService: ToastrService)
   {}

  ngOnInit(): void {}

  loginUser() {
    this._service.loginUser(this.user).subscribe(
      data => {
          console.log('Login successful');
          this.toastrService.success('Login successful', 'Success'); // Show success toastr
          this.router.navigate(['/loginsuccess']); 
        } ,
      error => {
        console.log('Exception occurred!!!');   
        this.toastrService.error('Login Failed'); // Show error toastr
        
      }
    );
  }
  register()
  {
    this.router.navigate(['/register']); 
  }
  
}
