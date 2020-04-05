import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './Components/todo/todo.component';
import { TodoItemComponent } from './Components/todo-item/todo-item.component';
import { HeaderComponent } from './Components/layout/header/header.component';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { AboutComponent } from './Components/pages/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
