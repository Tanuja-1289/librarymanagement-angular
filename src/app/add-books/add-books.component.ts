import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }
addBooks(addBooksForm:NgForm) {
  this.auth.addBooks(addBooksForm.value).subscribe(data=>{
    console.log(data);
    addBooksForm.reset();
  });
}
  ngOnInit() {
  }

}
