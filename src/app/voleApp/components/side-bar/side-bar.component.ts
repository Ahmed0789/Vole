import { LoginComponent } from './../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  loggedIn: boolean = false;

  constructor( private loginService : LoginService, private dialog : MatDialog) {
    /* TODO document why this constructor is empty */
    // if(this.loginService.isLoggedIn()){

    //   this.loggedIn = true
    // }
    }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
   }

   login(){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: 'auto',
      height: 'auto',
      data: [],
      closeOnNavigation: true
    });
    dialogRef.afterClosed().subscribe(
      (res) => {
        if(res){
          // if(res.event !== "cancel"){
          // }
        }
       }
    );
   }

}
