import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }
  updateBooks(updateBooksForm:NgForm){
    this.auth.updateBook(updateBooksForm.value).subscribe(data=>{
      console.log(data);
      updateBooksForm.reset();
    });
  }
  ngOnInit() {
  }

}
