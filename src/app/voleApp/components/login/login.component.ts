import { FacebookLoginProvider, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;

  @Input() error!: string | null;

  @Output() submitEM = new EventEmitter();

  constructor( private fB : FormBuilder, private router: Router, private socialAuthService: SocialAuthService ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = this.fB.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['dashboard']));
  }

  loginWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(() => this.router.navigate(['dashboard']));
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      console.log(this.form.value)
    }
  }

  forgottenPassword(){

  }

}
