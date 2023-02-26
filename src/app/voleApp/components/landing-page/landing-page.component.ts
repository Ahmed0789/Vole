import { MatDialog } from '@angular/material/dialog';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { LoginComponent } from './../login/login.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [LoginComponent]
})
export class LandingPageComponent implements OnInit{

  numberForm!: FormGroup;
  otpForm!: FormGroup;
  passwordForm!: FormGroup;
  otp: boolean = false;
  password: boolean = false;
  mobileMode: boolean = false;

  @Input() error!: string | null;

  @Output() submitEM = new EventEmitter();

  constructor( private fB : FormBuilder, private responsive: BreakpointObserver, private router: Router, private dialog : MatDialog ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        if (result.matches) {
          this.mobileMode = true;
        }
  });
    this.numberForm = this.fB.group({ number : new FormControl('', [Validators.required, Validators.pattern(/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/)])});
    this.otpForm = this.fB.group({ otp: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{6}$/)])});
    this.passwordForm = this.fB.group({ password: new FormControl('', [Validators.required, Validators.minLength(10)])});
  }

  openloginForm(){
    let dialogRef = this.dialog.open(LoginComponent, {
      width:'40%',
      height: ' 50%'
    })
  }

  submitMobileNumber() {
    if (this.numberForm.valid) {
      this.submitEM.emit(this.numberForm.value);
      this.otp = true;
      console.log(this.numberForm.value)
    }
  }

  submitOtp() {
    //if user is registered - TOO DOO
    if(this.otpForm.valid){
      this.password = true;
      console.log(this.otpForm.value)
    }

  }

  submitPassword() {
    if(this.passwordForm.valid){
      this.router.navigate(['dash'])
    }
  }

  forgottenPassword(){

  }

}
