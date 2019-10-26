import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }
  updateUser(updateUserForm:NgForm){
    this.auth.updateUser(updateUserForm.value).subscribe(data=>{
      console.log(data);
      updateUserForm.reset();
    })
  }
  ngOnInit() {
  }

}
