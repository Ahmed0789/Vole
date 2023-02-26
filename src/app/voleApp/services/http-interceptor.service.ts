import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, finalize } from 'rxjs';
import { HttpService } from './http.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  count = 0;
  //Injecting the Login Service and NgxSpinner service
  constructor(private auth: LoginService, private http : HttpService) { }
  //Using the intercept method which have access to as our BasicAuthInterceptor implements/extends the HttpInterceptor class which is import from Angular
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //If their is data in the authKey object then we can add the Authorization header to the request
    if (this.auth.getAuth() != undefined) {
      request = request.clone({
        setHeaders: {
          // Authorization: this.auth.getAuth(),

        },
        // setHeaders: {
        //   User:
        // }
      });
    }
    //We are showing the spinner every time the intercept method picks up an HTTP call
    // this.spinner.show()
    //Incrementing the count, we use this to keep track of how many http calls have been made
    this.count++;

    return next.handle(request).pipe(tap(
      //Hooks commented out as we're not using them for anything, keeping the commented out code in case a developer needs them
      event => {},
      error => {
        if(error){
        //  if(localStorage?.['loggedIn'] == true && error?.status == 401){
        //    if(confirm('(401) unauthorized, please try reconnect.')){
        //      this.http.postReconnect({authKey: localStorage?.authKey}).subscribe(res => {
        //        if(res){
        //          window.location.reload();
        //        } else {
        //          window.location.href = '/login';
        //        }
        //        console.log(res)
        //      })
        //    } else {
        //      window.location.href = '/login';
        //    }
        //  }
      }
    }),
    finalize(() => {
      //Once the HTTP call has been called through, we decrement the count, using count we can show and hide the spinner on the first and last Http calls
      this.count--;

      // if (this.count == 0) this.spinner.hide()
    })
    );
  }
}
