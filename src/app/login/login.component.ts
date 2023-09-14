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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: BackendServiceService,private formBuilder: FormBuilder,private router: Router,private _snackBar: MatSnackBar){}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  loginForm = this.formBuilder.group({
    mail: '',
    password: ''
  });

  onSubmit(): void {
    this.service.checkUserCredential(this.loginForm).subscribe(res=>{
    if(res.result==="OK"){
      this.service.createSessionForUser(this.loginForm.controls['mail'].value).subscribe(res1=>{
        if(res1.result==="OK")
          this.router.navigate(['Home']);
        else
        this._snackBar.open('Something went Wrong!', 'OK', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      });
     
    }
    else
    this._snackBar.open('User Not Found! Please Enter Valid Credential', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
      });
     
   }
}
