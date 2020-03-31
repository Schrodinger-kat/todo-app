import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../Services/todo.service'

import {Todo} from '../../models/todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo:Todo[]

  constructor(private ts:TodoService) {
  }

  ngOnInit(){
    this.ts.getTodos().subscribe(todo=> {
      this.todo = todo;
    });
  }

}
