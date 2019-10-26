import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class loginService {
    isUserLoggedIn=true;
    isLibrarianLoggedIn=true;
    isAdminLoggedIn=true;
    constructor(private http:HttpClient){ }

    isUserLogin() {
        if (this.isUserLoggedIn) {
          return true;
        } else {
          return false;
        }
      }

      isAdminLogin() {
        if (this.isAdminLoggedIn) {
          return true;
        } else {
          return false;
        }
      }

      isLibrarianLogin() {
        if (this.isLibrarianLoggedIn) {
          return true;
        } else {
          return false;
        }
      }
}