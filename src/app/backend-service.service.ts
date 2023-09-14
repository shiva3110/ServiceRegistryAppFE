import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { application } from './application';
import { requestTypes } from './requestTypes';
import { users } from './users';
import { submitRequest } from './submitRequest';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {
  
  constructor(private http: HttpClient) { }
  
  getApplicationList(): Observable<any[]>{
    const baseUrl = 'http://localhost:8080/v1/service_registery/applications';
 
   return this.http.get<application[]>(baseUrl);
  }
  getUsersList():Observable<any[]>{
    const baseUrl = 'http://localhost:8080/v1/service_registery/users';
 
    return this.http.get<users[]>(baseUrl);
   }

   getRequestTypeList():Observable<any[]>{
    const baseUrl = 'http://localhost:8080/v1/service_registery/Rquests';
 
    return this.http.get<requestTypes[]>(baseUrl);
   }

   createNewSubmitRequest(newRequest: FormGroup):Observable<any>{
    const baseUrl = 'http://localhost:8080/v1/service_registery/submitRequest';
    const httpOptions = {
      
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post<any>( baseUrl, newRequest.value, httpOptions)
   
   }
   registerNewUser(userData: FormGroup):Observable<any>{
    
    const baseUrl = 'http://localhost:8080/ServiceRegistryApp/api/RegisterUser';
    const httpOptions = {
      
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>( baseUrl, userData.value, httpOptions)
   
   }

   checkUserCredential(userCredential: FormGroup):Observable<any>{
    const baseUrl = 'http://localhost:8080/ServiceRegistryApp/api/LoginUser';
    let params = new HttpParams()
    .set('mail', userCredential.controls['mail'].value)
    .set('password', userCredential.controls['password'].value)
    return this.http.get<any>(baseUrl,{params: params});
   }

   triggerPasswordMail(userEmail: FormGroup):Observable<any>{
    const baseUrl = 'http://localhost:8080/ServiceRegistryApp/api/forgotPassword';
    let params = new HttpParams()
    .set('mail', userEmail.controls['mail'].value)
    
    return this.http.get<any>(baseUrl,{params: params});
   }
   createSessionForUser(userEmail: any):Observable<any>{
    const baseUrl = 'http://localhost:8080/ServiceRegistryApp/api/createSession';
    let params = new HttpParams()
    .set('mail', userEmail)
    
    return this.http.get<any>(baseUrl,{params: params});
   }
}
