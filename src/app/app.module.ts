import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { RemoveBooksComponent } from './remove-books/remove-books.component';
import { GetIssuedBooksComponent } from './get-issued-books/get-issued-books.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { ShowAllUsersComponent } from './show-all-users/show-all-users.component';
import { ShowAllLibrarianComponent } from './show-all-librarian/show-all-librarian.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterStudentComponent,
    UpdateUserComponent,
    RemoveUserComponent,
    AddBooksComponent,
    UpdateBooksComponent,
    RemoveBooksComponent,
    GetIssuedBooksComponent,
    RequestBookComponent,
    IssueBookComponent,
    ShowAllUsersComponent,
    ShowAllLibrarianComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      {path:'register-student',component:RegisterStudentComponent},
      {path:'update-user',component:UpdateUserComponent},
      {path:'remove-user',component:RemoveUserComponent},
      {path:'add-books',component:AddBooksComponent},
      {path:'update-books',component:UpdateBooksComponent},
      {path:'remove-books',component:RemoveBooksComponent},
      {path:'request-book',component:RequestBookComponent},
      {path:'get-issued-books',component:GetIssuedBooksComponent},
      {path:'show-all-librarian',component:ShowAllLibrarianComponent},
      {path:'show-all-users',component:ShowAllUsersComponent},
      {path:'issue-book',component:IssueBookComponent},
    ]),
      ReactiveFormsModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
