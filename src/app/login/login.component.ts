import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { loginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type:any;
  users=[];
  constructor(private auth: AuthService, private router: Router,private loginService: loginService) { }
  login(loginForm: NgForm) {
      this.auth.login(loginForm.value).subscribe(data => {
        console.log(data);
        // this.users = data.user;
        // if (data.user.type === 'admin') {
        //   alert('login successfull');
        //   this.loginService.isAdminLoggedIn = true;
        //   this.router.navigateByUrl('/');
        // } else if (data.us er.type === 'librarian') {
        //   alert('login successfull');
        //   this.loginService.isLibrarianLoggedIn = true;
        //   this.router.navigateByUrl('/');
        // } else if (data.user.type=== 'user') {
        //   alert('login successfull');
        //   this.loginService.isUserLoggedIn = true;
        //   this.router.navigateByUrl('/');
        // } else {
        //   alert('ENTER CORRECT CREDENTAILS');
        //   loginForm.reset();
        // }
      });
    }
  ngOnInit() {
  }

}
