import { Router } from '@angular/router';
import { LoginComponent } from './../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  loggedIn: boolean = false;

  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  matchedViewport!: boolean;
  constructor(
    private loginService: LoginService,
    private dialog: MatDialog,
    private route: Router,
    private observer: BreakpointObserver
  ) {
    /* TODO document why this constructor is empty */
    // if(this.loginService.isLoggedIn()){
    //   this.loggedIn = true
    // }
  }

  goto(location: string) {
    this.route.navigate([location]);
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: 'auto',
      height: 'auto',
      data: [],
      closeOnNavigation: true,
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        // if(res.event !== "cancel"){
        // }
      }
    });
  }
}
