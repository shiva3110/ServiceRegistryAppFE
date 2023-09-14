import { Component } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isSubmitted: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private service: BackendServiceService,private formBuilder: FormBuilder,private router: Router,private _snackBar: MatSnackBar){}
  registerForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    userPassword:''
  });

  onSubmit(): void {
    this.service.registerNewUser(this.registerForm).subscribe(res=>{
    if(res.result==="OK"){
      this._snackBar.open('Registration Successfull Please Visit Login Page!', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      this.registerForm.reset();
    }
    else
    this._snackBar.open(res.result, 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
      });
     
   }
}
