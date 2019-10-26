import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {

  constructor(private auth:AuthService) { }

  delete(deleteUserForm:NgForm){
          this.auth.deleteUser(deleteUserForm.value).subscribe(data=>{
            console.log(data);
            deleteUserForm.reset();
          })
  }
  ngOnInit() {
  }

}
