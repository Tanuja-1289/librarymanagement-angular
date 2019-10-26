import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-remove-books',
  templateUrl: './remove-books.component.html',
  styleUrls: ['./remove-books.component.css']
})
export class RemoveBooksComponent implements OnInit {

  constructor(private auth:AuthService) { }
  delete(deleteBooksForm:NgForm){
       this.auth.deleteBook(deleteBooksForm.value).subscribe(data=>{
         console.log(data);
         deleteBooksForm.reset();
       });
  }
  ngOnInit() {
  }

}
