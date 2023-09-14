import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BackendServiceService } from '../backend-service.service';
import { application } from '../application';
import { users } from '../users';
import { requestTypes } from '../requestTypes';
import { submitRequest } from '../submitRequest';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent {
  panelOpenState = false;  
  ApplicationList:application[]=[];
  users:users[]=[];
  rTypes:requestTypes[]=[];

  isSubmitted = false;
  submittedApplication: string;
  submittedUser: any;
  submittedReqestType:string;
  submittedUserType:any;

  submitRequest: submitRequest;
  constructor(private service: BackendServiceService,private formBuilder: FormBuilder){}


  checkoutForm = this.formBuilder.group({
    appType: '',
    InternalUser: '',
    userId: '',
    reqType: ''
  });
  
  
  ngOnInit(){
    this.fillApplications();
    this.fillUsers();
    this.fillRequestTypes();
  
  }
  
  fillApplications(){
    this.service.getApplicationList().subscribe(arr=>
      this.ApplicationList=arr);
  }
  fillUsers(){
    this.service.getUsersList().subscribe(arr=>
      this.users=arr);
  }
  fillRequestTypes(){
    this.service.getRequestTypeList().subscribe(arr=>
      this.rTypes=arr);
  }
  
  onSubmit(): void {
   this.service.createNewSubmitRequest(this.checkoutForm).subscribe(res=>{
   this.isSubmitted=res.result=="SUCCESS";
     });
   
    this.checkoutForm.reset();
  }
}
