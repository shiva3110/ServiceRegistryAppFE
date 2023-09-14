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
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private service: BackendServiceService,private formBuilder: FormBuilder,private router: Router,private _snackBar: MatSnackBar){}
  forgotPassForm=this.formBuilder.group({
    mail: ''
  });

  onSubmit(): void {
    this.service.triggerPasswordMail(this.forgotPassForm).subscribe(res=>{
    if(res.result==="OK"){
      this._snackBar.open('Mail sent to Registered Mail', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      this.forgotPassForm.reset();
    }
    else
    this._snackBar.open('Account not Found!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
      });
     
   }
}
