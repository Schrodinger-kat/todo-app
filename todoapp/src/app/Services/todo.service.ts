import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http"; 
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

const httpOps= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }) 
}
  

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todosUrl:string =  'https://jsonplaceholder.typicode.com/todos'; 

constructor(private http:HttpClient) { }

getTodos():Observable<Todo[]>{
  return this.http.get<Todo[]>(this.todosUrl);
  } 

  toggleCompleted(to:Todo):Observable<any>{
    const url = `${this.todosUrl}/${to.id}`
    return this.http.put(url, to, httpOps);
  }
}
