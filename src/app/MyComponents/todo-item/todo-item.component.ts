import { Component, EventEmitter, Input, OnInit, Output, input, output, } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule, NgClass } from '@angular/common';



@Component({
  selector: 'app-todo-item',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{




  @Input()
  todo!: Todo;

  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todocheckbox : EventEmitter<Todo> = new EventEmitter();


constructor(){

}
  ngOnInit(): void{}

  onClick(todo: Todo) {

    this.todoDelete.emit(todo);

    console.log("onClick method executing")

  
 }
 
 OnChecboxClick(todo: any){

      this.todocheckbox.emit(todo);
 }

}
