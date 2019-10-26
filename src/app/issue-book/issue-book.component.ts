import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }
  issueBook(issueBookForm:NgForm){
    this.auth.issueBook(issueBookForm.value).subscribe(data=>{
      console.log(data);
      issueBookForm.reset();
    });
  }
  ngOnInit() {
  }
}
