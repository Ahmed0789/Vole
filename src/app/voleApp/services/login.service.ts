import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login = false;
  constructor(){}

    setAuth(auth: string, user: string, roles: string, _userInfo: any) {
      //this.auth.setUserRoles(roles);
      localStorage.setItem('authKey', auth);
      localStorage.setItem('user', user);
      localStorage.setItem('roles', roles);
      localStorage.setItem('loggedIn', 'true');
      // localStorage.setItem('navigationState', JSON.stringify(this.auth.getUserAuthApps));
      //console.log("🚀 ~ file: login.service.ts ~ line 17 ~ LoginService ~ setAuth ~ userPermissions", this.auth.showApps)
    }

    removeAuth() {
      localStorage.removeItem('authKey');
      localStorage.removeItem('user');
      localStorage.removeItem('roles');
      localStorage.removeItem('loggedIn');
      //localStorage.removeItem('navigationState');
    }

    getAuth() {
      return localStorage.getItem('authKey');
    }

    isLoggedIn() {
      const loggedIn = localStorage.getItem('loggedIn');
      if (loggedIn == 'true')
          {this.login = true;}
          else
            {this.login = false;}
      return this.login;
    }

  }
