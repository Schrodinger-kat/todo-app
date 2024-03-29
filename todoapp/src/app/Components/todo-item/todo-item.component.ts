import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from '../../Services/todo.service'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() to:Todo;
  @Output() deleteTodo:EventEmitter<Todo> = new EventEmitter();

  constructor(private ts:TodoService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      to:true,
      'is-complete': this.to.complete
    }    
    return classes;
  }

onToggle(to){
  to.complete = !to.complete;
  this.ts.toggleCompleted(to).subscribe(to=>
    console.log(to));
}

onDelete(to){
    this.deleteTodo.emit(to);
    console.log('delete');
}

}
