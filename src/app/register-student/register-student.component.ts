import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
isLoading='false';
  constructor(private auth:AuthService,private router: Router) { }
  
register(studentRegisterForm:NgForm){
  this.auth.register(studentRegisterForm.value).subscribe(resData=>{
    if(resData != null){
      this.isLoading="true";
      console.log(resData);
      studentRegisterForm.reset();
      this.router.navigateByUrl('/')
    }else{
      alert("Id already exist");
      studentRegisterForm.reset();
    }
  })
}
  ngOnInit() {
  }

}
