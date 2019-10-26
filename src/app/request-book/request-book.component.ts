import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }
  requestBook(requestBookForm:NgForm){
    this.auth.requestBook(requestBookForm.value).subscribe(data=>{
      console.log(data);
      requestBookForm.reset();
    })
  }
  ngOnInit() {
  }

}
