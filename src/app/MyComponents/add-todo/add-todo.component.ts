import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{

  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
  
  tittle: string | undefined;
  desc: string | undefined;
  
  constructor(){

  }
  ngOnInit(): void {
   
  }
onSubmit(){
  const todo = { 
    sno :8,
    tittle : this.tittle,
    desc : this.desc,
    active: true,


  }

  this.todoAdd.emit(todo);

}





  

}
